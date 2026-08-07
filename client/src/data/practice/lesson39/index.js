export const lesson39Questions = [
  {
    id: 't39_q1',
    title: 'Problem 1: Display Auto Variable',
    difficulty: 'Easy',
    description: "Declare an auto variable inside a function, assign a value, and display it.",
    inputFormat: "A single integer.",
    outputFormat: "Print the value of the auto variable.",
    sampleInput: "25",
    sampleOutput: "Auto Variable: 25",
    testCases: [
      { input: "10", expectedOutput: "Auto Variable: 10" },
      { input: "99", expectedOutput: "Auto Variable: 99" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Auto Variable: 25" },
      { input: "10", expectedOutput: "Auto Variable: 10" },
      { input: "99", expectedOutput: "Auto Variable: 99" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q2',
    title: 'Problem 2: Static Variable Counter',
    difficulty: 'Easy',
    description: "Use a static variable inside a function to count the number of function calls.",
    inputFormat: "No input.",
    outputFormat: "Print the counter value for three function calls.",
    sampleInput: "No Input",
    sampleOutput: "Call 1\nCall 2\nCall 3",
    testCases: [
      { input: "No Input", expectedOutput: "Call 1\nCall 2\nCall 3" },
      { input: "No Input", expectedOutput: "Call 1\nCall 2\nCall 3" }
    ],
    hiddenTestCases: [
      { input: "No Input", expectedOutput: "Call 1\nCall 2\nCall 3" },
      { input: "No Input", expectedOutput: "Call 1\nCall 2\nCall 3" },
      { input: "No Input", expectedOutput: "Call 1\nCall 2\nCall 3" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Call your function three times\n    return 0;\n}'
  },
  {
    id: 't39_q3',
    title: 'Problem 3: Global Variable',
    difficulty: 'Easy',
    description: "Declare a global variable, assign a value, and print it from main().",
    inputFormat: "A single integer.",
    outputFormat: "Print the global variable.",
    sampleInput: "50",
    sampleOutput: "Global Variable: 50",
    testCases: [
      { input: "100", expectedOutput: "Global Variable: 100" },
      { input: "75", expectedOutput: "Global Variable: 75" }
    ],
    hiddenTestCases: [
      { input: "50", expectedOutput: "Global Variable: 50" },
      { input: "100", expectedOutput: "Global Variable: 100" },
      { input: "75", expectedOutput: "Global Variable: 75" }
    ],
    starterCode: '#include <stdio.h>\n\n// Declare global variable here\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q4',
    title: 'Problem 4: Register Variable',
    difficulty: 'Easy',
    description: "Declare a register variable, read an integer, and display it.",
    inputFormat: "A single integer.",
    outputFormat: "Print the register variable.",
    sampleInput: "35",
    sampleOutput: "Register Variable: 35",
    testCases: [
      { input: "80", expectedOutput: "Register Variable: 80" },
      { input: "12", expectedOutput: "Register Variable: 12" }
    ],
    hiddenTestCases: [
      { input: "35", expectedOutput: "Register Variable: 35" },
      { input: "80", expectedOutput: "Register Variable: 80" },
      { input: "12", expectedOutput: "Register Variable: 12" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q5',
    title: 'Problem 5: Auto Variable Addition',
    difficulty: 'Medium',
    description: "Read two integers using auto variables and print their sum.",
    inputFormat: "Two integers.",
    outputFormat: "Print the sum.",
    sampleInput: "10 20",
    sampleOutput: "Sum: 30",
    testCases: [
      { input: "15 25", expectedOutput: "Sum: 40" },
      { input: "100 50", expectedOutput: "Sum: 150" }
    ],
    hiddenTestCases: [
      { input: "10 20", expectedOutput: "Sum: 30" },
      { input: "15 25", expectedOutput: "Sum: 40" },
      { input: "100 50", expectedOutput: "Sum: 150" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q6',
    title: 'Problem 6: Static Sum Tracker',
    difficulty: 'Medium',
    description: "Use a static variable to keep a running total of values entered in three function calls.",
    inputFormat: "Three integers.",
    outputFormat: "Print the cumulative sum after each call.",
    sampleInput: "10 20 30",
    sampleOutput: "10\n30\n60",
    testCases: [
      { input: "5 5 5", expectedOutput: "5\n10\n15" },
      { input: "7 8 9", expectedOutput: "7\n15\n24" }
    ],
    hiddenTestCases: [
      { input: "10 20 30", expectedOutput: "10\n30\n60" },
      { input: "5 5 5", expectedOutput: "5\n10\n15" },
      { input: "7 8 9", expectedOutput: "7\n15\n24" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Call your function three times inside a loop\n    return 0;\n}'
  },
  {
    id: 't39_q7',
    title: 'Problem 7: Global Array Sum',
    difficulty: 'Medium',
    description: "Store 5 integers in a global array and print their sum.",
    inputFormat: "Five integers.",
    outputFormat: "Print the sum.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "Sum: 15",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "Sum: 150" },
      { input: "5 5 5 5 5", expectedOutput: "Sum: 25" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "Sum: 15" },
      { input: "10 20 30 40 50", expectedOutput: "Sum: 150" },
      { input: "5 5 5 5 5", expectedOutput: "Sum: 25" }
    ],
    starterCode: '#include <stdio.h>\n\n// Declare global array here\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q8',
    title: 'Problem 8: Register Loop Counter',
    difficulty: 'Medium',
    description: "Use a register variable as a loop counter to print numbers from 1 to N.",
    inputFormat: "A single integer N.",
    outputFormat: "Print numbers from 1 to N.",
    sampleInput: "5",
    sampleOutput: "1\n2\n3\n4\n5",
    testCases: [
      { input: "3", expectedOutput: "1\n2\n3" },
      { input: "7", expectedOutput: "1\n2\n3\n4\n5\n6\n7" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "1\n2\n3\n4\n5" },
      { input: "3", expectedOutput: "1\n2\n3" },
      { input: "7", expectedOutput: "1\n2\n3\n4\n5\n6\n7" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q9',
    title: 'Problem 9: Storage Class Demonstration',
    difficulty: 'Hard',
    description: "Create a program demonstrating auto, static, register, and global variables by displaying one value for each.",
    inputFormat: "Four integer values.",
    outputFormat: "Print all storage class values.",
    sampleInput: "1 2 3 4",
    sampleOutput: "Auto: 1\nStatic: 2\nRegister: 3\nGlobal: 4",
    testCases: [
      { input: "10 20 30 40", expectedOutput: "Auto: 10\nStatic: 20\nRegister: 30\nGlobal: 40" },
      { input: "5 6 7 8", expectedOutput: "Auto: 5\nStatic: 6\nRegister: 7\nGlobal: 8" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4", expectedOutput: "Auto: 1\nStatic: 2\nRegister: 3\nGlobal: 4" },
      { input: "10 20 30 40", expectedOutput: "Auto: 10\nStatic: 20\nRegister: 30\nGlobal: 40" },
      { input: "5 6 7 8", expectedOutput: "Auto: 5\nStatic: 6\nRegister: 7\nGlobal: 8" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your code here\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't39_q10',
    title: 'Problem 10: Static Function Call Counter',
    difficulty: 'Hard',
    description: "Use a static variable inside a function to count and display how many times the function has been called.",
    inputFormat: "No input.",
    outputFormat: "Print the call count after five calls.",
    sampleInput: "No Input",
    sampleOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5",
    testCases: [
      { input: "No Input", expectedOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5" },
      { input: "No Input", expectedOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5" }
    ],
    hiddenTestCases: [
      { input: "No Input", expectedOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5" },
      { input: "No Input", expectedOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5" },
      { input: "No Input", expectedOutput: "Call Count: 1\nCall Count: 2\nCall Count: 3\nCall Count: 4\nCall Count: 5" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Call your function five times\n    return 0;\n}'
  }
];
