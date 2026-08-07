import api from './api';

const CompilerService = {
  /**
   * Run raw C code
   * @param {string} code - The C source code
   * @param {string} input - Optional standard input
   */
  runCode: async (code, input = '') => {
    try {
      const response = await api.post('/compiler/run', { code, input });
      return response.data;
    } catch (error) {
      console.error('Compiler execution failed', error);
      throw error;
    }
  },

  /**
   * Submit C code to run against hidden test cases
   * @param {string} code - The C source code
   * @param {Array} testCases - Array of test case objects { input, expectedOutput }
   */
  submitCode: async (code, testCases) => {
    try {
      const response = await api.post('/compiler/submit', { code, testCases });
      return response.data;
    } catch (error) {
      console.error('Compiler submission failed', error);
      throw error;
    }
  },
  
  /**
   * Save code (stubbed for future backend)
   */
  saveCode: async (program) => {
    try {
      const response = await api.post('/compiler/save', { program });
      return response.data;
    } catch (error) {
      console.error('Save failed', error);
      throw error;
    }
  }
};

export default CompilerService;
