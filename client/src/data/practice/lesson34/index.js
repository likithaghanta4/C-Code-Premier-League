export const lesson34Questions = [
  {
    id: 't34_q1',
    title: 'Problem 1: Print Welcome Using Function',
    difficulty: 'Easy',
    description: "Write a user-defined function that prints 'Welcome to CPL'. Call the function from main().",
    inputFormat: "No input.",
    outputFormat: "Print the welcome message.",
    sampleInput: "No Input",
    sampleOutput: "Welcome to CPL",
    testCases: [
      { input: "No Input", expectedOutput: "Welcome to CPL" },
      { input: "No Input", expectedOutput: "Welcome to CPL" }
    ],
    hiddenTestCases: [
      { input: "No Input", expectedOutput: "Welcome to CPL" },
      { input: "No Input", expectedOutput: "Welcome to CPL" },
      { input: "No Input", expectedOutput: "Welcome to CPL" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Call your function here\n    return 0;\n}'
  },
  {
    id: 't34_q2',
    title: 'Problem 2: Add Two Numbers',
    difficulty: 'Easy',
    description: "Write a function that accepts two integers and returns their sum.",
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
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q3',
    title: 'Problem 3: Find Square',
    difficulty: 'Easy',
    description: "Write a function that accepts an integer and returns its square.",
    inputFormat: "A single integer.",
    outputFormat: "Print the square.",
    sampleInput: "5",
    sampleOutput: "Square: 25",
    testCases: [
      { input: "8", expectedOutput: "Square: 64" },
      { input: "12", expectedOutput: "Square: 144" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "Square: 25" },
      { input: "8", expectedOutput: "Square: 64" },
      { input: "12", expectedOutput: "Square: 144" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q4',
    title: 'Problem 4: Check Even or Odd',
    difficulty: 'Easy',
    description: "Write a function that checks whether a number is even or odd.",
    inputFormat: "A single integer.",
    outputFormat: "Print Even or Odd.",
    sampleInput: "8",
    sampleOutput: "Even",
    testCases: [
      { input: "13", expectedOutput: "Odd" },
      { input: "20", expectedOutput: "Even" }
    ],
    hiddenTestCases: [
      { input: "8", expectedOutput: "Even" },
      { input: "13", expectedOutput: "Odd" },
      { input: "20", expectedOutput: "Even" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q5',
    title: 'Problem 5: Factorial Using Function',
    difficulty: 'Medium',
    description: "Write a function to calculate the factorial of a number.",
    inputFormat: "A single integer.",
    outputFormat: "Print the factorial.",
    sampleInput: "5",
    sampleOutput: "Factorial: 120",
    testCases: [
      { input: "4", expectedOutput: "Factorial: 24" },
      { input: "6", expectedOutput: "Factorial: 720" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "Factorial: 120" },
      { input: "4", expectedOutput: "Factorial: 24" },
      { input: "6", expectedOutput: "Factorial: 720" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q6',
    title: 'Problem 6: Greatest of Two Numbers',
    difficulty: 'Medium',
    description: "Write a function that returns the larger of two integers.",
    inputFormat: "Two integers.",
    outputFormat: "Print the largest number.",
    sampleInput: "15 22",
    sampleOutput: "Largest: 22",
    testCases: [
      { input: "50 40", expectedOutput: "Largest: 50" },
      { input: "9 18", expectedOutput: "Largest: 18" }
    ],
    hiddenTestCases: [
      { input: "15 22", expectedOutput: "Largest: 22" },
      { input: "50 40", expectedOutput: "Largest: 50" },
      { input: "9 18", expectedOutput: "Largest: 18" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q7',
    title: 'Problem 7: Recursive Factorial',
    difficulty: 'Medium',
    description: "Write a recursive function to calculate the factorial of a number.",
    inputFormat: "A single integer.",
    outputFormat: "Print the factorial.",
    sampleInput: "5",
    sampleOutput: "Factorial: 120",
    testCases: [
      { input: "3", expectedOutput: "Factorial: 6" },
      { input: "7", expectedOutput: "Factorial: 5040" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "Factorial: 120" },
      { input: "3", expectedOutput: "Factorial: 6" },
      { input: "7", expectedOutput: "Factorial: 5040" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your recursive function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q8',
    title: 'Problem 8: Recursive Fibonacci',
    difficulty: 'Hard',
    description: "Write a recursive function to print the Nth Fibonacci number.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the Nth Fibonacci number.",
    sampleInput: "6",
    sampleOutput: "Fibonacci: 8",
    testCases: [
      { input: "8", expectedOutput: "Fibonacci: 21" },
      { input: "10", expectedOutput: "Fibonacci: 55" }
    ],
    hiddenTestCases: [
      { input: "6", expectedOutput: "Fibonacci: 8" },
      { input: "8", expectedOutput: "Fibonacci: 21" },
      { input: "10", expectedOutput: "Fibonacci: 55" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your recursive function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q9',
    title: 'Problem 9: Recursive Sum of N Numbers',
    difficulty: 'Hard',
    description: "Write a recursive function to find the sum of the first N natural numbers.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the sum.",
    sampleInput: "5",
    sampleOutput: "Sum: 15",
    testCases: [
      { input: "10", expectedOutput: "Sum: 55" },
      { input: "7", expectedOutput: "Sum: 28" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "Sum: 15" },
      { input: "10", expectedOutput: "Sum: 55" },
      { input: "7", expectedOutput: "Sum: 28" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your recursive function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  },
  {
    id: 't34_q10',
    title: 'Problem 10: Recursive Power',
    difficulty: 'Hard',
    description: "Write a recursive function to calculate x raised to the power n.",
    inputFormat: "Two integers x and n.",
    outputFormat: "Print x^n.",
    sampleInput: "2 5",
    sampleOutput: "Result: 32",
    testCases: [
      { input: "3 4", expectedOutput: "Result: 81" },
      { input: "5 3", expectedOutput: "Result: 125" }
    ],
    hiddenTestCases: [
      { input: "2 5", expectedOutput: "Result: 32" },
      { input: "3 4", expectedOutput: "Result: 81" },
      { input: "5 3", expectedOutput: "Result: 125" }
    ],
    starterCode: '#include <stdio.h>\n\n// Write your recursive function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
  }
];
