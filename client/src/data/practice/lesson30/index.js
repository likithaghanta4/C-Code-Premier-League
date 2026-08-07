export const lesson30Questions = [
  {
    id: 't30_q1',
    title: 'Problem 1: Day of the Week',
    difficulty: 'Easy',
    description: "Read a number (1-7) and use a switch statement to print the corresponding day of the week.",
    inputFormat: "A single integer (1-7).",
    outputFormat: "Print the corresponding day.",
    sampleInput: "1",
    sampleOutput: "Monday",
    testCases: [
      { input: "5", expectedOutput: "Friday" },
      { input: "7", expectedOutput: "Sunday" }
    ],
    hiddenTestCases: [
      { input: "1", expectedOutput: "Monday" },
      { input: "5", expectedOutput: "Friday" },
      { input: "7", expectedOutput: "Sunday" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q2',
    title: 'Problem 2: Month Name',
    difficulty: 'Easy',
    description: "Read a number (1-12) and print the corresponding month using a switch statement.",
    inputFormat: "A single integer (1-12).",
    outputFormat: "Print the month name.",
    sampleInput: "3",
    sampleOutput: "March",
    testCases: [
      { input: "10", expectedOutput: "October" },
      { input: "12", expectedOutput: "December" }
    ],
    hiddenTestCases: [
      { input: "3", expectedOutput: "March" },
      { input: "10", expectedOutput: "October" },
      { input: "12", expectedOutput: "December" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q3',
    title: 'Problem 3: Simple Calculator',
    difficulty: 'Easy',
    description: "Read two integers and an operator (+, -, *, /). Use a switch statement to perform the operation.",
    inputFormat: "Two integers and an operator.",
    outputFormat: "Print the result.",
    sampleInput: "10 5 +",
    sampleOutput: "Result: 15",
    testCases: [
      { input: "20 4 *", expectedOutput: "Result: 80" },
      { input: "30 6 /", expectedOutput: "Result: 5" }
    ],
    hiddenTestCases: [
      { input: "10 5 +", expectedOutput: "Result: 15" },
      { input: "20 4 *", expectedOutput: "Result: 80" },
      { input: "30 6 /", expectedOutput: "Result: 5" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q4',
    title: 'Problem 4: Vowel or Consonant',
    difficulty: 'Easy',
    description: "Read a lowercase vowel character and print its name using a switch statement.",
    inputFormat: "A single lowercase character.",
    outputFormat: "Print Vowel if it is a,e,i,o,u; otherwise Consonant.",
    sampleInput: "a",
    sampleOutput: "Vowel",
    testCases: [
      { input: "z", expectedOutput: "Consonant" },
      { input: "o", expectedOutput: "Vowel" }
    ],
    hiddenTestCases: [
      { input: "a", expectedOutput: "Vowel" },
      { input: "z", expectedOutput: "Consonant" },
      { input: "o", expectedOutput: "Vowel" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q5',
    title: 'Problem 5: Grade Description',
    difficulty: 'Medium',
    description: "Read a grade character (A, B, C, D, F) and display its description using switch.",
    inputFormat: "A single character.",
    outputFormat: "Print the description.",
    sampleInput: "A",
    sampleOutput: "Excellent",
    testCases: [
      { input: "C", expectedOutput: "Average" },
      { input: "F", expectedOutput: "Fail" }
    ],
    hiddenTestCases: [
      { input: "A", expectedOutput: "Excellent" },
      { input: "C", expectedOutput: "Average" },
      { input: "F", expectedOutput: "Fail" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q6',
    title: 'Problem 6: Menu Selection',
    difficulty: 'Medium',
    description: "A restaurant menu has 1. Pizza 2. Burger 3. Pasta 4. Juice. Read the choice and display the selected item.",
    inputFormat: "A single integer.",
    outputFormat: "Print the selected menu item.",
    sampleInput: "2",
    sampleOutput: "Burger",
    testCases: [
      { input: "4", expectedOutput: "Juice" },
      { input: "1", expectedOutput: "Pizza" }
    ],
    hiddenTestCases: [
      { input: "2", expectedOutput: "Burger" },
      { input: "4", expectedOutput: "Juice" },
      { input: "1", expectedOutput: "Pizza" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q7',
    title: 'Problem 7: Arithmetic Menu',
    difficulty: 'Medium',
    description: "Read two integers and a menu choice (1, 2, 3,4). Use switch to perform the operation.",
    inputFormat: "Two integers and one integer choice.",
    outputFormat: "Print the result.",
    sampleInput: "12 6 1",
    sampleOutput: "Result: 18",
    testCases: [
      { input: "20 5 3", expectedOutput: "Result: 100" },
      { input: "16 4 4", expectedOutput: "Result: 4" }
    ],
    hiddenTestCases: [
      { input: "12 6 1", expectedOutput: "Result: 18" },
      { input: "20 5 3", expectedOutput: "Result: 100" },
      { input: "16 4 4", expectedOutput: "Result: 4" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q8',
    title: 'Problem 8: ATM Menu',
    difficulty: 'Medium',
    description: "Read a choice (1: Balance, 2: Deposit, 3: Withdraw, 4: Exit) and display the selected option.",
    inputFormat: "A single integer.",
    outputFormat: "Print the selected option.",
    sampleInput: "1",
    sampleOutput: "Balance Enquiry",
    testCases: [
      { input: "3", expectedOutput: "Withdraw" },
      { input: "4", expectedOutput: "Exit" }
    ],
    hiddenTestCases: [
      { input: "1", expectedOutput: "Balance Enquiry" },
      { input: "3", expectedOutput: "Withdraw" },
      { input: "4", expectedOutput: "Exit" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q9',
    title: 'Problem 9: Traffic Signal',
    difficulty: 'Hard',
    description: "Read a character (R, Y, G) and display the corresponding traffic signal instruction using switch.",
    inputFormat: "A single character.",
    outputFormat: "Print the instruction.",
    sampleInput: "R",
    sampleOutput: "Stop",
    testCases: [
      { input: "Y", expectedOutput: "Get Ready" },
      { input: "G", expectedOutput: "Go" }
    ],
    hiddenTestCases: [
      { input: "R", expectedOutput: "Stop" },
      { input: "Y", expectedOutput: "Get Ready" },
      { input: "G", expectedOutput: "Go" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't30_q10',
    title: 'Problem 10: Electric Appliance',
    difficulty: 'Hard',
    description: "Read a choice (1-5) and display the appliance name using switch: 1-Fan, 2-Light, 3-TV, 4-AC, 5-Refrigerator.",
    inputFormat: "A single integer.",
    outputFormat: "Print the appliance name.",
    sampleInput: "4",
    sampleOutput: "AC",
    testCases: [
      { input: "2", expectedOutput: "Light" },
      { input: "5", expectedOutput: "Refrigerator" }
    ],
    hiddenTestCases: [
      { input: "4", expectedOutput: "AC" },
      { input: "2", expectedOutput: "Light" },
      { input: "5", expectedOutput: "Refrigerator" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
