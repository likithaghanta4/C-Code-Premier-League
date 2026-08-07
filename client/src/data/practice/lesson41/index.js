export const lesson41Questions = [
  {
    id: 't41_q1',
    title: 'Problem 1: Display Command-Line Arguments',
    difficulty: 'Easy',
    description: "Write a program that displays all command-line arguments passed to it.",
    inputFormat: "Command-line arguments.",
    outputFormat: "Print each argument on a new line.",
    sampleInput: "program Hello World",
    sampleOutput: "Hello\nWorld",
    testCases: [
      { input: "program CPL", expectedOutput: "CPL" },
      { input: "program C Language", expectedOutput: "C\nLanguage" }
    ],
    hiddenTestCases: [
      { input: "program Hello World", expectedOutput: "Hello\nWorld" },
      { input: "program CPL", expectedOutput: "CPL" },
      { input: "program C Language", expectedOutput: "C\nLanguage" }
    ],
    starterCode: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    // Note: The first argument argv[0] is typically the program name. \n    // Based on the expected output, you may only need to print from argv[1] onwards.\n    return 0;\n}'
  },
  {
    id: 't41_q2',
    title: 'Problem 2: Count Command-Line Arguments',
    difficulty: 'Easy',
    description: "Write a program to count the number of command-line arguments.",
    inputFormat: "Command-line arguments.",
    outputFormat: "Print the total count (excluding program name).",
    sampleInput: "program A B C",
    sampleOutput: "Count: 3",
    testCases: [
      { input: "program Test", expectedOutput: "Count: 1" },
      { input: "program X Y", expectedOutput: "Count: 2" }
    ],
    hiddenTestCases: [
      { input: "program A B C", expectedOutput: "Count: 3" },
      { input: "program Test", expectedOutput: "Count: 1" },
      { input: "program X Y", expectedOutput: "Count: 2" }
    ],
    starterCode: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q3',
    title: 'Problem 3: Print First Argument',
    difficulty: 'Easy',
    description: "Write a program to print only the first command-line argument.",
    inputFormat: "One or more command-line arguments.",
    outputFormat: "Print the first argument.",
    sampleInput: "program Apple Orange",
    sampleOutput: "First Argument: Apple",
    testCases: [
      { input: "program CPL", expectedOutput: "First Argument: CPL" },
      { input: "program 100 200", expectedOutput: "First Argument: 100" }
    ],
    hiddenTestCases: [
      { input: "program Apple Orange", expectedOutput: "First Argument: Apple" },
      { input: "program CPL", expectedOutput: "First Argument: CPL" },
      { input: "program 100 200", expectedOutput: "First Argument: 100" }
    ],
    starterCode: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q4',
    title: 'Problem 4: Sum of Two Arguments',
    difficulty: 'Easy',
    description: "Read two integer command-line arguments and print their sum.",
    inputFormat: "Two integer command-line arguments.",
    outputFormat: "Print the sum.",
    sampleInput: "program 10 20",
    sampleOutput: "Sum: 30",
    testCases: [
      { input: "program 50 25", expectedOutput: "Sum: 75" },
      { input: "program 7 9", expectedOutput: "Sum: 16" }
    ],
    hiddenTestCases: [
      { input: "program 10 20", expectedOutput: "Sum: 30" },
      { input: "program 50 25", expectedOutput: "Sum: 75" },
      { input: "program 7 9", expectedOutput: "Sum: 16" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q5',
    title: 'Problem 5: Product of Two Arguments',
    difficulty: 'Medium',
    description: "Read two integer command-line arguments and print their product.",
    inputFormat: "Two integer command-line arguments.",
    outputFormat: "Print the product.",
    sampleInput: "program 5 6",
    sampleOutput: "Product: 30",
    testCases: [
      { input: "program 12 4", expectedOutput: "Product: 48" },
      { input: "program 9 9", expectedOutput: "Product: 81" }
    ],
    hiddenTestCases: [
      { input: "program 5 6", expectedOutput: "Product: 30" },
      { input: "program 12 4", expectedOutput: "Product: 48" },
      { input: "program 9 9", expectedOutput: "Product: 81" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q6',
    title: 'Problem 6: Largest of Three Arguments',
    difficulty: 'Medium',
    description: "Read three integer command-line arguments and print the largest value.",
    inputFormat: "Three integer command-line arguments.",
    outputFormat: "Print the largest value.",
    sampleInput: "program 10 20 15",
    sampleOutput: "Largest: 20",
    testCases: [
      { input: "program 50 40 80", expectedOutput: "Largest: 80" },
      { input: "program 7 9 5", expectedOutput: "Largest: 9" }
    ],
    hiddenTestCases: [
      { input: "program 10 20 15", expectedOutput: "Largest: 20" },
      { input: "program 50 40 80", expectedOutput: "Largest: 80" },
      { input: "program 7 9 5", expectedOutput: "Largest: 9" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q7',
    title: 'Problem 7: Reverse Arguments',
    difficulty: 'Medium',
    description: "Write a program to print the command-line arguments in reverse order.",
    inputFormat: "Command-line arguments.",
    outputFormat: "Print the arguments in reverse order.",
    sampleInput: "program A B C",
    sampleOutput: "C\nB\nA",
    testCases: [
      { input: "program 1 2 3", expectedOutput: "3\n2\n1" },
      { input: "program X Y", expectedOutput: "Y\nX" }
    ],
    hiddenTestCases: [
      { input: "program A B C", expectedOutput: "C\nB\nA" },
      { input: "program 1 2 3", expectedOutput: "3\n2\n1" },
      { input: "program X Y", expectedOutput: "Y\nX" }
    ],
    starterCode: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q8',
    title: 'Problem 8: Check Even or Odd',
    difficulty: 'Medium',
    description: "Read an integer from the command line and determine whether it is even or odd.",
    inputFormat: "One integer command-line argument.",
    outputFormat: "Print Even or Odd.",
    sampleInput: "program 8",
    sampleOutput: "Even",
    testCases: [
      { input: "program 13", expectedOutput: "Odd" },
      { input: "program 20", expectedOutput: "Even" }
    ],
    hiddenTestCases: [
      { input: "program 8", expectedOutput: "Even" },
      { input: "program 13", expectedOutput: "Odd" },
      { input: "program 20", expectedOutput: "Even" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q9',
    title: 'Problem 9: Simple Calculator',
    difficulty: 'Hard',
    description: "Read two integers and an operator from the command line and perform the operation.",
    inputFormat: "Two integers and one operator.",
    outputFormat: "Print the result.",
    sampleInput: "program 10 5 +",
    sampleOutput: "Result: 15",
    testCases: [
      { input: "program 20 4 *", expectedOutput: "Result: 80" },
      { input: "program 25 5 /", expectedOutput: "Result: 5" }
    ],
    hiddenTestCases: [
      { input: "program 10 5 +", expectedOutput: "Result: 15" },
      { input: "program 20 4 *", expectedOutput: "Result: 80" },
      { input: "program 25 5 /", expectedOutput: "Result: 5" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't41_q10',
    title: 'Problem 10: Student Details from Arguments',
    difficulty: 'Hard',
    description: "Read a student's name, age, and CGPA from the command line and display the details.",
    inputFormat: "Name, Age and CGPA as command-line arguments.",
    outputFormat: "Print the student's details.",
    sampleInput: "program Rahul 20 8.9",
    sampleOutput: "Name: Rahul\nAge: 20\nCGPA: 8.9",
    testCases: [
      { input: "program Likitha 19 9.4", expectedOutput: "Name: Likitha\nAge: 19\nCGPA: 9.4" },
      { input: "program Anjali 21 8.7", expectedOutput: "Name: Anjali\nAge: 21\nCGPA: 8.7" }
    ],
    hiddenTestCases: [
      { input: "program Rahul 20 8.9", expectedOutput: "Name: Rahul\nAge: 20\nCGPA: 8.9" },
      { input: "program Likitha 19 9.4", expectedOutput: "Name: Likitha\nAge: 19\nCGPA: 9.4" },
      { input: "program Anjali 21 8.7", expectedOutput: "Name: Anjali\nAge: 21\nCGPA: 8.7" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    // Write your code here\n    return 0;\n}'
  }
];
