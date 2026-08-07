export const lesson28Questions = [
  {
    id: 't28_q1',
    title: 'Problem 1: Add Two Numbers',
    difficulty: 'Easy',
    description: "Read two integers and print their sum.",
    inputFormat: "Two integers.",
    outputFormat: "Print the sum.",
    sampleInput: "10 20",
    sampleOutput: "Sum: 30",
    testCases: [
      { input: "15 25", expectedOutput: "Sum: 40" },
      { input: "100 200", expectedOutput: "Sum: 300" }
    ],
    hiddenTestCases: [
      { input: "10 20", expectedOutput: "Sum: 30" },
      { input: "15 25", expectedOutput: "Sum: 40" },
      { input: "100 200", expectedOutput: "Sum: 300" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q2',
    title: 'Problem 2: Subtract Two Numbers',
    difficulty: 'Easy',
    description: "Read two integers and print their difference.",
    inputFormat: "Two integers.",
    outputFormat: "Print the difference.",
    sampleInput: "30 10",
    sampleOutput: "Difference: 20",
    testCases: [
      { input: "50 15", expectedOutput: "Difference: 35" },
      { input: "100 45", expectedOutput: "Difference: 55" }
    ],
    hiddenTestCases: [
      { input: "30 10", expectedOutput: "Difference: 20" },
      { input: "50 15", expectedOutput: "Difference: 35" },
      { input: "100 45", expectedOutput: "Difference: 55" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q3',
    title: 'Problem 3: Multiply Two Numbers',
    difficulty: 'Easy',
    description: "Read two integers and print their product.",
    inputFormat: "Two integers.",
    outputFormat: "Print the product.",
    sampleInput: "5 6",
    sampleOutput: "Product: 30",
    testCases: [
      { input: "12 4", expectedOutput: "Product: 48" },
      { input: "9 9", expectedOutput: "Product: 81" }
    ],
    hiddenTestCases: [
      { input: "5 6", expectedOutput: "Product: 30" },
      { input: "12 4", expectedOutput: "Product: 48" },
      { input: "9 9", expectedOutput: "Product: 81" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q4',
    title: 'Problem 4: Divide Two Numbers',
    difficulty: 'Easy',
    description: "Read two integers and print the quotient using integer division.",
    inputFormat: "Two integers.",
    outputFormat: "Print the quotient.",
    sampleInput: "20 5",
    sampleOutput: "Quotient: 4",
    testCases: [
      { input: "30 6", expectedOutput: "Quotient: 5" },
      { input: "100 10", expectedOutput: "Quotient: 10" }
    ],
    hiddenTestCases: [
      { input: "20 5", expectedOutput: "Quotient: 4" },
      { input: "30 6", expectedOutput: "Quotient: 5" },
      { input: "100 10", expectedOutput: "Quotient: 10" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q5',
    title: 'Problem 5: Find Remainder',
    difficulty: 'Medium',
    description: "Read two integers and print the remainder using the modulus operator.",
    inputFormat: "Two integers.",
    outputFormat: "Print the remainder.",
    sampleInput: "17 5",
    sampleOutput: "Remainder: 2",
    testCases: [
      { input: "25 4", expectedOutput: "Remainder: 1" },
      { input: "50 7", expectedOutput: "Remainder: 1" }
    ],
    hiddenTestCases: [
      { input: "17 5", expectedOutput: "Remainder: 2" },
      { input: "25 4", expectedOutput: "Remainder: 1" },
      { input: "50 7", expectedOutput: "Remainder: 1" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q6',
    title: 'Problem 6: Arithmetic Operations',
    difficulty: 'Medium',
    description: "Read two integers and display their sum, difference, product and quotient.",
    inputFormat: "Two integers.",
    outputFormat: "Display all arithmetic results.",
    sampleInput: "20 10",
    sampleOutput: "Sum: 30\nDifference: 10\nProduct: 200\nQuotient: 2",
    testCases: [
      { input: "15 3", expectedOutput: "Sum: 18\nDifference: 12\nProduct: 45\nQuotient: 5" },
      { input: "24 6", expectedOutput: "Sum: 30\nDifference: 18\nProduct: 144\nQuotient: 4" }
    ],
    hiddenTestCases: [
      { input: "20 10", expectedOutput: "Sum: 30\nDifference: 10\nProduct: 200\nQuotient: 2" },
      { input: "15 3", expectedOutput: "Sum: 18\nDifference: 12\nProduct: 45\nQuotient: 5" },
      { input: "24 6", expectedOutput: "Sum: 30\nDifference: 18\nProduct: 144\nQuotient: 4" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q7',
    title: 'Problem 7: Increment Operator',
    difficulty: 'Medium',
    description: "Read an integer, increment it by one using the increment operator and display the result.",
    inputFormat: "A single integer.",
    outputFormat: "Print incremented value.",
    sampleInput: "25",
    sampleOutput: "Value: 26",
    testCases: [
      { input: "99", expectedOutput: "Value: 100" },
      { input: "-1", expectedOutput: "Value: 0" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Value: 26" },
      { input: "99", expectedOutput: "Value: 100" },
      { input: "-1", expectedOutput: "Value: 0" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q8',
    title: 'Problem 8: Decrement Operator',
    difficulty: 'Medium',
    description: "Read an integer, decrement it by one using the decrement operator and display the result.",
    inputFormat: "A single integer.",
    outputFormat: "Print decremented value.",
    sampleInput: "25",
    sampleOutput: "Value: 24",
    testCases: [
      { input: "100", expectedOutput: "Value: 99" },
      { input: "0", expectedOutput: "Value: -1" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Value: 24" },
      { input: "100", expectedOutput: "Value: 99" },
      { input: "0", expectedOutput: "Value: -1" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q9',
    title: 'Problem 9: Simple Calculator',
    difficulty: 'Hard',
    description: "Read two integers and an operator (+, -, *, /, %) and perform the corresponding operation.",
    inputFormat: "Two integers and one operator.",
    outputFormat: "Print the calculated result.",
    sampleInput: "10 5 +",
    sampleOutput: "Result: 15",
    testCases: [
      { input: "20 4 *", expectedOutput: "Result: 80" },
      { input: "25 5 /", expectedOutput: "Result: 5" }
    ],
    hiddenTestCases: [
      { input: "10 5 +", expectedOutput: "Result: 15" },
      { input: "20 4 *", expectedOutput: "Result: 80" },
      { input: "25 5 /", expectedOutput: "Result: 5" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't28_q10',
    title: 'Problem 10: Operator Demonstration',
    difficulty: 'Hard',
    description: "Read two integers and display the results of addition, subtraction, multiplication, division and modulus.",
    inputFormat: "Two integers.",
    outputFormat: "Display all operator results.",
    sampleInput: "18 4",
    sampleOutput: "Addition: 22\nSubtraction: 14\nMultiplication: 72\nDivision: 4\nModulus: 2",
    testCases: [
      { input: "50 8", expectedOutput: "Addition: 58\nSubtraction: 42\nMultiplication: 400\nDivision: 6\nModulus: 2" },
      { input: "81 9", expectedOutput: "Addition: 90\nSubtraction: 72\nMultiplication: 729\nDivision: 9\nModulus: 0" }
    ],
    hiddenTestCases: [
      { input: "18 4", expectedOutput: "Addition: 22\nSubtraction: 14\nMultiplication: 72\nDivision: 4\nModulus: 2" },
      { input: "50 8", expectedOutput: "Addition: 58\nSubtraction: 42\nMultiplication: 400\nDivision: 6\nModulus: 2" },
      { input: "81 9", expectedOutput: "Addition: 90\nSubtraction: 72\nMultiplication: 729\nDivision: 9\nModulus: 0" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
