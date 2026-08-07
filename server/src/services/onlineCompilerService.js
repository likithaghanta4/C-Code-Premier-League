const fs = require('fs/promises');
const path = require('path');
const os = require('os');
const { execFile } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const util = require('util');

const execFileAsync = util.promisify(execFile);

class OnlineCompilerService {
  /**
   * Compiles and executes C code safely.
   * @param {string} sourceCode - The C source code
   * @param {string} input - Standard input for the program
   * @returns {Promise<Object>} Structured JSON response
   */
  static async executeCode(sourceCode, input = '') {
    const isWindows = process.platform === 'win32';
    const exeName = isWindows ? 'main.exe' : 'main';
    const tempDir = path.join(os.tmpdir(), `cpl-compiler-${uuidv4()}`);
    
    try {
      // 1. Create a unique temporary directory
      await fs.mkdir(tempDir, { recursive: true });
      
      const sourcePath = path.join(tempDir, 'main.c');
      const exePath = path.join(tempDir, exeName);

      // 2. Save the submitted code
      await fs.writeFile(sourcePath, sourceCode, 'utf8');

      // 3. Compile the code
      let gccCommand = 'gcc';
      try {
        await execFileAsync(gccCommand, ['main.c', '-o', exeName], {
          cwd: tempDir,
          timeout: 5000, // 5 seconds compile timeout
        });
      } catch (compileError) {
        if (compileError.code === 'ENOENT' && isWindows) {
          // Fallback to absolute winget path if user's terminal has a stale PATH
          gccCommand = path.join(os.homedir(), 'AppData', 'Local', 'Microsoft', 'WinGet', 'Packages', 'BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe', 'mingw64', 'bin', 'gcc.exe');
          try {
            await execFileAsync(gccCommand, ['main.c', '-o', exeName], {
              cwd: tempDir,
              timeout: 5000,
            });
          } catch (fallbackError) {
            return {
              success: false,
              compileError: fallbackError.stderr || fallbackError.message,
              runtimeError: null,
              output: null
            };
          }
        } else {
          return {
            success: false,
            compileError: compileError.stderr || compileError.message,
            runtimeError: null,
            output: null
          };
        }
      }

      // 4. Run the executable
      let runOutput = '';
      let runError = '';
      const startTime = process.hrtime.bigint();

      try {
        const { stdout, stderr } = await this.runProcess(exePath, tempDir, input);
        runOutput = stdout;
        runError = stderr;
      } catch (runErr) {
        // execFileAsync throws if exit code != 0 or if timeout/maxBuffer occurs
        
        let errorMsg = runErr.stderr || runErr.message || 'Unknown runtime error';
        
        if (runErr.killed) {
           errorMsg = 'Time Limit Exceeded: The program took too long to execute (likely an infinite loop).';
        } else if (runErr.code === 'ERR_CHILD_PROCESS_STDIO_MAXBUFFER') {
           errorMsg = 'Output Limit Exceeded: The program produced too much output.';
        }

        return {
          success: false,
          compileError: null,
          runtimeError: errorMsg,
          output: runErr.stdout || ''
        };
      }

      const endTime = process.hrtime.bigint();
      const executionTimeMs = Number(endTime - startTime) / 1000000;

      // 5. Return success structured response
      return {
        success: true,
        compileError: null,
        runtimeError: runError || null,
        output: runOutput,
        executionTime: `${executionTimeMs.toFixed(2)}ms`,
        memoryUsed: 'N/A' // Hard to measure accurately without complex native bindings
      };

    } catch (err) {
      console.error("CompilerService Error:", err);
      return {
        success: false,
        compileError: null,
        runtimeError: "System Error: Failed to execute code environment.",
        output: null
      };
    } finally {
      // 6. Secure cleanup of temporary files
      try {
        await fs.rm(tempDir, { recursive: true, force: true });
      } catch (cleanupErr) {
        console.error(`Failed to clean up temp dir ${tempDir}:`, cleanupErr);
      }
    }
  }

  /**
   * Helper to run the executable and pipe stdin
   */
  static runProcess(exePath, cwd, input) {
    return new Promise((resolve, reject) => {
      const child = execFile(exePath, [], {
        cwd,
        timeout: 5000, // 5 seconds execution timeout
        maxBuffer: 1024 * 1024 // 1MB output limit
      }, (error, stdout, stderr) => {
        if (error) {
           // Attach stdout to the error so we can return partial output on failure
           error.stdout = stdout;
           error.stderr = stderr;
           reject(error);
        } else {
           resolve({ stdout, stderr });
        }
      });

      // Write stdin if provided
      if (input) {
        child.stdin.write(input);
      }
      child.stdin.end();
    });
  }
}

module.exports = OnlineCompilerService;
