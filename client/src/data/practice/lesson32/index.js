export const lesson32Questions = [
  {
    id: 't32_q1',
    title: 'Problem 1: Read and Print Array',
    difficulty: 'Easy',
    description: "Read 5 integers into an array and print them in the same order.",
    inputFormat: "Five integers.",
    outputFormat: "Print the array elements.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "1 2 3 4 5",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "10 20 30 40 50" },
      { input: "5 4 3 2 1", expectedOutput: "5 4 3 2 1" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
      { input: "10 20 30 40 50", expectedOutput: "10 20 30 40 50" },
      { input: "5 4 3 2 1", expectedOutput: "5 4 3 2 1" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q2',
    title: 'Problem 2: Sum of Array Elements',
    difficulty: 'Easy',
    description: "Read 5 integers and find their sum using an array.",
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
    id: 't32_q3',
    title: 'Problem 3: Find Largest Element',
    difficulty: 'Easy',
    description: "Read 5 integers into an array and print the largest element.",
    inputFormat: "Five integers.",
    outputFormat: "Print the largest element.",
    sampleInput: "4 8 2 9 6",
    sampleOutput: "Largest: 9",
    testCases: [
      { input: "15 22 10 5 18", expectedOutput: "Largest: 22" },
      { input: "7 7 7 7 7", expectedOutput: "Largest: 7" }
    ],
    hiddenTestCases: [
      { input: "4 8 2 9 6", expectedOutput: "Largest: 9" },
      { input: "15 22 10 5 18", expectedOutput: "Largest: 22" },
      { input: "7 7 7 7 7", expectedOutput: "Largest: 7" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q4',
    title: 'Problem 4: Find Smallest Element',
    difficulty: 'Easy',
    description: "Read 5 integers into an array and print the smallest element.",
    inputFormat: "Five integers.",
    outputFormat: "Print the smallest element.",
    sampleInput: "4 8 2 9 6",
    sampleOutput: "Smallest: 2",
    testCases: [
      { input: "15 22 10 5 18", expectedOutput: "Smallest: 5" },
      { input: "7 7 7 7 7", expectedOutput: "Smallest: 7" }
    ],
    hiddenTestCases: [
      { input: "4 8 2 9 6", expectedOutput: "Smallest: 2" },
      { input: "15 22 10 5 18", expectedOutput: "Smallest: 5" },
      { input: "7 7 7 7 7", expectedOutput: "Smallest: 7" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q5',
    title: 'Problem 5: Average of Array',
    difficulty: 'Medium',
    description: "Read 5 integers and calculate their average.",
    inputFormat: "Five integers.",
    outputFormat: "Print the average.",
    sampleInput: "2 4 6 8 10",
    sampleOutput: "Average: 6.00",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "Average: 30.00" },
      { input: "5 5 5 5 5", expectedOutput: "Average: 5.00" }
    ],
    hiddenTestCases: [
      { input: "2 4 6 8 10", expectedOutput: "Average: 6.00" },
      { input: "10 20 30 40 50", expectedOutput: "Average: 30.00" },
      { input: "5 5 5 5 5", expectedOutput: "Average: 5.00" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q6',
    title: 'Problem 6: Reverse Array',
    difficulty: 'Medium',
    description: "Read 5 integers and print them in reverse order.",
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
    id: 't32_q7',
    title: 'Problem 7: Search an Element',
    difficulty: 'Medium',
    description: "Read 5 integers and a key. Check whether the key exists in the array.",
    inputFormat: "Five integers followed by a key.",
    outputFormat: "Print Found or Not Found.",
    sampleInput: "1 2 3 4 5\n3",
    sampleOutput: "Found",
    testCases: [
      { input: "10 20 30 40 50\n25", expectedOutput: "Not Found" },
      { input: "7 8 9 10 11\n11", expectedOutput: "Found" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5\n3", expectedOutput: "Found" },
      { input: "10 20 30 40 50\n25", expectedOutput: "Not Found" },
      { input: "7 8 9 10 11\n11", expectedOutput: "Found" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q8',
    title: 'Problem 8: Count Even and Odd',
    difficulty: 'Medium',
    description: "Read 5 integers and count the even and odd numbers.",
    inputFormat: "Five integers.",
    outputFormat: "Print the count of even and odd elements.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "Even: 2\nOdd: 3",
    testCases: [
      { input: "2 4 6 8 10", expectedOutput: "Even: 5\nOdd: 0" },
      { input: "1 3 5 7 9", expectedOutput: "Even: 0\nOdd: 5" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "Even: 2\nOdd: 3" },
      { input: "2 4 6 8 10", expectedOutput: "Even: 5\nOdd: 0" },
      { input: "1 3 5 7 9", expectedOutput: "Even: 0\nOdd: 5" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q9',
    title: 'Problem 9: Second Largest Element',
    difficulty: 'Hard',
    description: "Read 5 integers and print the second largest element.",
    inputFormat: "Five integers.",
    outputFormat: "Print the second largest element.",
    sampleInput: "10 40 30 20 50",
    sampleOutput: "Second Largest: 40",
    testCases: [
      { input: "5 9 7 8 6", expectedOutput: "Second Largest: 8" },
      { input: "100 80 60 40 20", expectedOutput: "Second Largest: 80" }
    ],
    hiddenTestCases: [
      { input: "10 40 30 20 50", expectedOutput: "Second Largest: 40" },
      { input: "5 9 7 8 6", expectedOutput: "Second Largest: 8" },
      { input: "100 80 60 40 20", expectedOutput: "Second Largest: 80" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't32_q10',
    title: 'Problem 10: Array Rotation',
    difficulty: 'Hard',
    description: "Read 5 integers and perform a left rotation by one position.",
    inputFormat: "Five integers.",
    outputFormat: "Print the rotated array.",
    sampleInput: "1 2 3 4 5",
    sampleOutput: "2 3 4 5 1",
    testCases: [
      { input: "10 20 30 40 50", expectedOutput: "20 30 40 50 10" },
      { input: "9 8 7 6 5", expectedOutput: "8 7 6 5 9" }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", expectedOutput: "2 3 4 5 1" },
      { input: "10 20 30 40 50", expectedOutput: "20 30 40 50 10" },
      { input: "9 8 7 6 5", expectedOutput: "8 7 6 5 9" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
