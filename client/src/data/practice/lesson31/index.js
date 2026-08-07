export const lesson31Questions = [
  {
    id: 't31_q1',
    title: 'Problem 1: Print Numbers 1 to 10',
    difficulty: 'Easy',
    description: "Write a C program to print numbers from 1 to 10 using a for loop.",
    inputFormat: "No input.",
    outputFormat: "Print numbers from 1 to 10.",
    sampleInput: "No Input",
    sampleOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
    testCases: [
      { input: "No Input", expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" },
      { input: "No Input", expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" }
    ],
    hiddenTestCases: [
      { input: "No Input", expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" },
      { input: "No Input", expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" },
      { input: "No Input", expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q2',
    title: 'Problem 2: Print Natural Numbers',
    difficulty: 'Easy',
    description: "Read an integer N and print numbers from 1 to N.",
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
    id: 't31_q3',
    title: 'Problem 3: Sum of First N Numbers',
    difficulty: 'Easy',
    description: "Read an integer N and find the sum of the first N natural numbers.",
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
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q4',
    title: 'Problem 4: Multiplication Table',
    difficulty: 'Easy',
    description: "Read an integer and print its multiplication table from 1 to 10.",
    inputFormat: "A single integer.",
    outputFormat: "Print the multiplication table.",
    sampleInput: "5",
    sampleOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
    testCases: [
      { input: "2", expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20" },
      { input: "9", expectedOutput: "9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90" }
    ],
    hiddenTestCases: [
      { input: "5", expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50" },
      { input: "2", expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20" },
      { input: "9", expectedOutput: "9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q5',
    title: 'Problem 5: Factorial',
    difficulty: 'Medium',
    description: "Read an integer N and find its factorial using a loop.",
    inputFormat: "A single integer N.",
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
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q6',
    title: 'Problem 6: Count Digits',
    difficulty: 'Medium',
    description: "Read an integer and count the number of digits.",
    inputFormat: "A single integer.",
    outputFormat: "Print the digit count.",
    sampleInput: "12345",
    sampleOutput: "Digits: 5",
    testCases: [
      { input: "987", expectedOutput: "Digits: 3" },
      { input: "100000", expectedOutput: "Digits: 6" }
    ],
    hiddenTestCases: [
      { input: "12345", expectedOutput: "Digits: 5" },
      { input: "987", expectedOutput: "Digits: 3" },
      { input: "100000", expectedOutput: "Digits: 6" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q7',
    title: 'Problem 7: Reverse a Number',
    difficulty: 'Medium',
    description: "Read an integer and print its reverse.",
    inputFormat: "A single integer.",
    outputFormat: "Print the reversed number.",
    sampleInput: "1234",
    sampleOutput: "Reverse: 4321",
    testCases: [
      { input: "560", expectedOutput: "Reverse: 65" },
      { input: "98765", expectedOutput: "Reverse: 56789" }
    ],
    hiddenTestCases: [
      { input: "1234", expectedOutput: "Reverse: 4321" },
      { input: "560", expectedOutput: "Reverse: 65" },
      { input: "98765", expectedOutput: "Reverse: 56789" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q8',
    title: 'Problem 8: Palindrome Number',
    difficulty: 'Medium',
    description: "Read an integer and check whether it is a palindrome.",
    inputFormat: "A single integer.",
    outputFormat: "Print Palindrome or Not Palindrome.",
    sampleInput: "121",
    sampleOutput: "Palindrome",
    testCases: [
      { input: "123", expectedOutput: "Not Palindrome" },
      { input: "4554", expectedOutput: "Palindrome" }
    ],
    hiddenTestCases: [
      { input: "121", expectedOutput: "Palindrome" },
      { input: "123", expectedOutput: "Not Palindrome" },
      { input: "4554", expectedOutput: "Palindrome" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q9',
    title: 'Problem 9: Prime Number Check',
    difficulty: 'Hard',
    description: "Read an integer and determine whether it is a prime number.",
    inputFormat: "A single integer.",
    outputFormat: "Print Prime or Not Prime.",
    sampleInput: "13",
    sampleOutput: "Prime",
    testCases: [
      { input: "12", expectedOutput: "Not Prime" },
      { input: "29", expectedOutput: "Prime" }
    ],
    hiddenTestCases: [
      { input: "13", expectedOutput: "Prime" },
      { input: "12", expectedOutput: "Not Prime" },
      { input: "29", expectedOutput: "Prime" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't31_q10',
    title: 'Problem 10: Pattern Printing',
    difficulty: 'Hard',
    description: "Read an integer N and print a right-angled star pattern with N rows.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the pattern.",
    sampleInput: "4",
    sampleOutput: "*\n**\n***\n****",
    testCases: [
      { input: "3", expectedOutput: "*\n**\n***" },
      { input: "5", expectedOutput: "*\n**\n***\n****\n*****" }
    ],
    hiddenTestCases: [
      { input: "4", expectedOutput: "*\n**\n***\n****" },
      { input: "3", expectedOutput: "*\n**\n***" },
      { input: "5", expectedOutput: "*\n**\n***\n****\n*****" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
