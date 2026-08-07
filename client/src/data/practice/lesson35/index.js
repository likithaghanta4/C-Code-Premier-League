export const lesson35Questions = [
  {
    id: 't35_q1',
    title: 'Problem 1: Print Value Using Pointer',
    difficulty: 'Easy',
    description: "Read an integer, store its address in a pointer, and print the value using the pointer.",
    inputFormat: "A single integer.",
    outputFormat: "Print the value using the pointer.",
    sampleInput: "25",
    sampleOutput: "Value: 25",
    testCases: [
      { input: "10", expectedOutput: "Value: 10" },
      { input: "99", expectedOutput: "Value: 99" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Value: 25" },
      { input: "10", expectedOutput: "Value: 10" },
      { input: "99", expectedOutput: "Value: 99" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q2',
    title: 'Problem 2: Print Address of Variable',
    difficulty: 'Easy',
    description: "Read an integer and print its memory address using a pointer.",
    inputFormat: "A single integer.",
    outputFormat: "Print the memory address.",
    sampleInput: "15",
    sampleOutput: "Address: <memory_address>",
    testCases: [
      { input: "30", expectedOutput: "Address: <memory_address>" },
      { input: "45", expectedOutput: "Address: <memory_address>" }
    ],
    hiddenTestCases: [
      { input: "15", expectedOutput: "Address: <memory_address>" },
      { input: "30", expectedOutput: "Address: <memory_address>" },
      { input: "45", expectedOutput: "Address: <memory_address>" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Note: To match the exact output, print "Address: <memory_address>"\n    // instead of the actual %p pointer value.\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q3',
    title: 'Problem 3: Swap Two Numbers Using Pointers',
    difficulty: 'Easy',
    description: "Read two integers and swap them using pointers.",
    inputFormat: "Two integers.",
    outputFormat: "Print the swapped values.",
    sampleInput: "10 20",
    sampleOutput: "After Swap: 20 10",
    testCases: [
      { input: "5 8", expectedOutput: "After Swap: 8 5" },
      { input: "100 200", expectedOutput: "After Swap: 200 100" }
    ],
    hiddenTestCases: [
      { input: "10 20", expectedOutput: "After Swap: 20 10" },
      { input: "5 8", expectedOutput: "After Swap: 8 5" },
      { input: "100 200", expectedOutput: "After Swap: 200 100" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q4',
    title: 'Problem 4: Add Two Numbers Using Pointers',
    difficulty: 'Easy',
    description: "Read two integers and calculate their sum using pointers.",
    inputFormat: "Two integers.",
    outputFormat: "Print the sum.",
    sampleInput: "12 18",
    sampleOutput: "Sum: 30",
    testCases: [
      { input: "50 25", expectedOutput: "Sum: 75" },
      { input: "7 9", expectedOutput: "Sum: 16" }
    ],
    hiddenTestCases: [
      { input: "12 18", expectedOutput: "Sum: 30" },
      { input: "50 25", expectedOutput: "Sum: 75" },
      { input: "7 9", expectedOutput: "Sum: 16" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q5',
    title: 'Problem 5: Find Largest Using Pointers',
    difficulty: 'Medium',
    description: "Read two integers and determine the larger value using pointers.",
    inputFormat: "Two integers.",
    outputFormat: "Print the largest value.",
    sampleInput: "25 18",
    sampleOutput: "Largest: 25",
    testCases: [
      { input: "10 50", expectedOutput: "Largest: 50" },
      { input: "99 99", expectedOutput: "Largest: 99" }
    ],
    hiddenTestCases: [
      { input: "25 18", expectedOutput: "Largest: 25" },
      { input: "10 50", expectedOutput: "Largest: 50" },
      { input: "99 99", expectedOutput: "Largest: 99" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q6',
    title: 'Problem 6: Array Traversal Using Pointers',
    difficulty: 'Medium',
    description: "Read 5 integers into an array and print them using pointer arithmetic.",
    inputFormat: "Five integers.",
    outputFormat: "Print the array elements.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "1 2 3 4 5",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "10 20 30 40 50" },
      { input: "9 8 7 6 5", expectedOutput: "9 8 7 6 5" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
      { input: "10 20 30 40 50", expectedOutput: "10 20 30 40 50" },
      { input: "9 8 7 6 5", expectedOutput: "9 8 7 6 5" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q7',
    title: 'Problem 7: Sum of Array Using Pointers',
    difficulty: 'Medium',
    description: "Read 5 integers and find their sum using pointers.",
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
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q8',
    title: 'Problem 8: String Length Using Pointer',
    difficulty: 'Medium',
    description: "Read a string and find its length using only pointers.",
    inputFormat: "A single string.",
    outputFormat: "Print the length.",
    sampleInput: "Hello",
    sampleOutput: "Length: 5",
    testCases: [
      { input: "Programming", expectedOutput: "Length: 11" },
      { input: "CPL", expectedOutput: "Length: 3" }
    ],
    hiddenTestCases: [
      { input: "Hello", expectedOutput: "Length: 5" },
      { input: "Programming", expectedOutput: "Length: 11" },
      { input: "CPL", expectedOutput: "Length: 3" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q9',
    title: 'Problem 9: Reverse Array Using Pointers',
    difficulty: 'Hard',
    description: "Read 5 integers and print them in reverse order using pointers.",
    inputFormat: "Five integers.",
    outputFormat: "Print the reversed array.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "5 4 3 2 1",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "50 40 30 20 10" },
      { input: "9 8 7 6 5", expectedOutput: "5 6 7 8 9" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "5 4 3 2 1" },
      { input: "10 20 30 40 50", expectedOutput: "50 40 30 20 10" },
      { input: "9 8 7 6 5", expectedOutput: "5 6 7 8 9" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't35_q10',
    title: 'Problem 10: Pointer Calculator',
    difficulty: 'Hard',
    description: "Read two integers and use pointers to perform addition, subtraction, multiplication and division.",
    inputFormat: "Two integers.",
    outputFormat: "Print all arithmetic results.",
    sampleInput: "20 5",
    sampleOutput: "Addition: 25\nSubtraction: 15\nMultiplication: 100\nDivision: 4",
    testCases: [
      { input: "12 3", expectedOutput: "Addition: 15\nSubtraction: 9\nMultiplication: 36\nDivision: 4" },
      { input: "18 6", expectedOutput: "Addition: 24\nSubtraction: 12\nMultiplication: 108\nDivision: 3" }
    ],
    hiddenTestCases: [
      { input: "20 5", expectedOutput: "Addition: 25\nSubtraction: 15\nMultiplication: 100\nDivision: 4" },
      { input: "12 3", expectedOutput: "Addition: 15\nSubtraction: 9\nMultiplication: 36\nDivision: 4" },
      { input: "18 6", expectedOutput: "Addition: 24\nSubtraction: 12\nMultiplication: 108\nDivision: 3" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
