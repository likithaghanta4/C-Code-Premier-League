export const lesson38Questions = [
  {
    id: 't38_q1',
    title: 'Problem 1: Allocate Memory for an Integer',
    difficulty: 'Easy',
    description: "Allocate memory dynamically for an integer using malloc(), store a value, and display it.",
    inputFormat: "A single integer.",
    outputFormat: "Print the stored value.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q2',
    title: 'Problem 2: Allocate Memory for an Array',
    difficulty: 'Easy',
    description: "Allocate memory dynamically for an array of 5 integers, read the elements, and print them.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q3',
    title: 'Problem 3: Sum of Dynamic Array',
    difficulty: 'Easy',
    description: "Allocate memory for 5 integers using malloc(), read the values, and print their sum.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q4',
    title: 'Problem 4: Average of Dynamic Array',
    difficulty: 'Easy',
    description: "Allocate memory dynamically for 5 integers and calculate their average.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q5',
    title: 'Problem 5: Largest Element',
    difficulty: 'Medium',
    description: "Allocate memory for an array using calloc(), read 5 integers, and find the largest element.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q6',
    title: 'Problem 6: Resize an Array',
    difficulty: 'Medium',
    description: "Allocate memory for 3 integers, then resize it to 5 integers using realloc() and print all elements.",
    inputFormat: "Five integers.",
    outputFormat: "Print the resized array.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q7',
    title: 'Problem 7: Reverse Dynamic Array',
    difficulty: 'Medium',
    description: "Allocate memory for 5 integers and print the elements in reverse order.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q8',
    title: 'Problem 8: Search an Element',
    difficulty: 'Medium',
    description: "Allocate memory for 5 integers and search for a given element.",
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
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q9',
    title: 'Problem 9: Dynamic String Allocation',
    difficulty: 'Hard',
    description: "Allocate memory dynamically for a string, read the string, and display it.",
    inputFormat: "A single string.",
    outputFormat: "Print the entered string.",
    sampleInput: "Hello",
    sampleOutput: "String: Hello",
    testCases: [
      { input: "CPL", expectedOutput: "String: CPL" },
      { input: "Programming", expectedOutput: "String: Programming" }
    ],
    hiddenTestCases: [
      { input: "Hello", expectedOutput: "String: Hello" },
      { input: "CPL", expectedOutput: "String: CPL" },
      { input: "Programming", expectedOutput: "String: Programming" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't38_q10',
    title: 'Problem 10: Student Records Using Dynamic Memory',
    difficulty: 'Hard',
    description: "Allocate memory dynamically for 3 student IDs, read them, display the IDs, and free the allocated memory.",
    inputFormat: "Three integers.",
    outputFormat: "Print all student IDs.",
    sampleInput: "101 102 103",
    sampleOutput: "101 102 103",
    testCases: [
      { input: "201 202 203", expectedOutput: "201 202 203" },
      { input: "301 302 303", expectedOutput: "301 302 303" }
    ],
    hiddenTestCases: [
      { input: "101 102 103", expectedOutput: "101 102 103" },
      { input: "201 202 203", expectedOutput: "201 202 203" },
      { input: "301 302 303", expectedOutput: "301 302 303" }
    ],
    starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
