export const lesson29Questions = [
  {
    id: 't29_q1',
    title: 'Problem 1: Even or Odd',
    difficulty: 'Easy',
    description: "Read an integer and determine whether it is even or odd using an if statement.",
    inputFormat: "A single integer.",
    outputFormat: "Print either Even or Odd.",
    sampleInput: "8",
    sampleOutput: "Even",
    testCases: [
      { input: "15", expectedOutput: "Odd" },
      { input: "20", expectedOutput: "Even" }
    ],
    hiddenTestCases: [
      { input: "8", expectedOutput: "Even" },
      { input: "15", expectedOutput: "Odd" },
      { input: "20", expectedOutput: "Even" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q2',
    title: 'Problem 2: Positive or Negative',
    difficulty: 'Easy',
    description: "Read an integer and check whether it is positive or negative.",
    inputFormat: "A single integer.",
    outputFormat: "Print Positive or Negative.",
    sampleInput: "10",
    sampleOutput: "Positive",
    testCases: [
      { input: "-7", expectedOutput: "Negative" },
      { input: "25", expectedOutput: "Positive" }
    ],
    hiddenTestCases: [
      { input: "10", expectedOutput: "Positive" },
      { input: "-7", expectedOutput: "Negative" },
      { input: "25", expectedOutput: "Positive" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q3',
    title: 'Problem 3: Eligible to Vote',
    difficulty: 'Easy',
    description: "Read the age of a person. If the age is 18 or above, print Eligible to Vote; otherwise print Not Eligible to Vote.",
    inputFormat: "A single integer representing age.",
    outputFormat: "Print eligibility.",
    sampleInput: "20",
    sampleOutput: "Eligible to Vote",
    testCases: [
      { input: "16", expectedOutput: "Not Eligible to Vote" },
      { input: "18", expectedOutput: "Eligible to Vote" }
    ],
    hiddenTestCases: [
      { input: "20", expectedOutput: "Eligible to Vote" },
      { input: "16", expectedOutput: "Not Eligible to Vote" },
      { input: "18", expectedOutput: "Eligible to Vote" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q4',
    title: 'Problem 4: Largest of Two Numbers',
    difficulty: 'Easy',
    description: "Read two integers and print the larger number.",
    inputFormat: "Two integers.",
    outputFormat: "Print the larger value.",
    sampleInput: "15 22",
    sampleOutput: "Largest: 22",
    testCases: [
      { input: "40 18", expectedOutput: "Largest: 40" },
      { input: "7 9", expectedOutput: "Largest: 9" }
    ],
    hiddenTestCases: [
      { input: "15 22", expectedOutput: "Largest: 22" },
      { input: "40 18", expectedOutput: "Largest: 40" },
      { input: "7 9", expectedOutput: "Largest: 9" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q5',
    title: 'Problem 5: Pass or Fail',
    difficulty: 'Medium',
    description: "Read a student's marks. If marks are 35 or above, print Pass; otherwise print Fail.",
    inputFormat: "A single integer.",
    outputFormat: "Print Pass or Fail.",
    sampleInput: "78",
    sampleOutput: "Pass",
    testCases: [
      { input: "30", expectedOutput: "Fail" },
      { input: "35", expectedOutput: "Pass" }
    ],
    hiddenTestCases: [
      { input: "78", expectedOutput: "Pass" },
      { input: "30", expectedOutput: "Fail" },
      { input: "35", expectedOutput: "Pass" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q6',
    title: 'Problem 6: Greatest of Three Numbers',
    difficulty: 'Medium',
    description: "Read three integers and print the greatest among them.",
    inputFormat: "Three integers.",
    outputFormat: "Print the greatest number.",
    sampleInput: "10 25 18",
    sampleOutput: "Greatest: 25",
    testCases: [
      { input: "45 12 30", expectedOutput: "Greatest: 45" },
      { input: "7 9 15", expectedOutput: "Greatest: 15" }
    ],
    hiddenTestCases: [
      { input: "10 25 18", expectedOutput: "Greatest: 25" },
      { input: "45 12 30", expectedOutput: "Greatest: 45" },
      { input: "7 9 15", expectedOutput: "Greatest: 15" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q7',
    title: 'Problem 7: Leap Year Checker',
    difficulty: 'Medium',
    description: "Read a year. If it is divisible by 4, print Leap Year; otherwise print Not a Leap Year.",
    inputFormat: "A single integer.",
    outputFormat: "Print Leap Year or Not a Leap Year.",
    sampleInput: "2024",
    sampleOutput: "Leap Year",
    testCases: [
      { input: "2023", expectedOutput: "Not a Leap Year" },
      { input: "2028", expectedOutput: "Leap Year" }
    ],
    hiddenTestCases: [
      { input: "2024", expectedOutput: "Leap Year" },
      { input: "2023", expectedOutput: "Not a Leap Year" },
      { input: "2028", expectedOutput: "Leap Year" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q8',
    title: 'Problem 8: Grade Calculator',
    difficulty: 'Medium',
    description: "Read marks and assign grade: A (>=90), B (>=75), C (>=50), F (<50).",
    inputFormat: "A single integer.",
    outputFormat: "Print the grade.",
    sampleInput: "92",
    sampleOutput: "Grade: A",
    testCases: [
      { input: "68", expectedOutput: "Grade: C" },
      { input: "80", expectedOutput: "Grade: B" }
    ],
    hiddenTestCases: [
      { input: "92", expectedOutput: "Grade: A" },
      { input: "68", expectedOutput: "Grade: C" },
      { input: "80", expectedOutput: "Grade: B" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q9',
    title: 'Problem 9: Simple Login',
    difficulty: 'Hard',
    description: "Read a PIN. If it is 1234, print Login Successful; otherwise print Invalid PIN.",
    inputFormat: "A single integer PIN.",
    outputFormat: "Print login status.",
    sampleInput: "1234",
    sampleOutput: "Login Successful",
    testCases: [
      { input: "1111", expectedOutput: "Invalid PIN" },
      { input: "9999", expectedOutput: "Invalid PIN" }
    ],
    hiddenTestCases: [
      { input: "1234", expectedOutput: "Login Successful" },
      { input: "1111", expectedOutput: "Invalid PIN" },
      { input: "9999", expectedOutput: "Invalid PIN" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't29_q10',
    title: 'Problem 10: Largest Among Four Numbers',
    difficulty: 'Hard',
    description: "Read four integers and print the largest value.",
    inputFormat: "Four integers.",
    outputFormat: "Print the largest number.",
    sampleInput: "10 25 18 40",
    sampleOutput: "Largest: 40",
    testCases: [
      { input: "90 75 100 65", expectedOutput: "Largest: 100" },
      { input: "12 8 5 19", expectedOutput: "Largest: 19" }
    ],
    hiddenTestCases: [
      { input: "10 25 18 40", expectedOutput: "Largest: 40" },
      { input: "90 75 100 65", expectedOutput: "Largest: 100" },
      { input: "12 8 5 19", expectedOutput: "Largest: 19" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
