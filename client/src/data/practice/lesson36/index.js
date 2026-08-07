export const lesson36Questions = [
  {
    id: 't36_q1',
    title: 'Problem 1: Student Structure',
    difficulty: 'Easy',
    description: "Create a structure to store a student's roll number and name. Read the details and display them.",
    inputFormat: "Roll number and name.",
    outputFormat: "Print the student's details.",
    sampleInput: "101\nRahul",
    sampleOutput: "Roll Number: 101\nName: Rahul",
    testCases: [
      { input: "102\nLikitha", expectedOutput: "Roll Number: 102\nName: Likitha" },
      { input: "103\nAnjali", expectedOutput: "Roll Number: 103\nName: Anjali" }
    ],
    hiddenTestCases: [
      { input: "101\nRahul", expectedOutput: "Roll Number: 101\nName: Rahul" },
      { input: "102\nLikitha", expectedOutput: "Roll Number: 102\nName: Likitha" },
      { input: "103\nAnjali", expectedOutput: "Roll Number: 103\nName: Anjali" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Student {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q2',
    title: 'Problem 2: Employee Structure',
    difficulty: 'Easy',
    description: "Create a structure to store an employee's ID and salary. Read the details and display them.",
    inputFormat: "Employee ID and Salary.",
    outputFormat: "Print the employee details.",
    sampleInput: "1001\n35000",
    sampleOutput: "Employee ID: 1001\nSalary: 35000",
    testCases: [
      { input: "2002\n42000", expectedOutput: "Employee ID: 2002\nSalary: 42000" },
      { input: "3003\n28000", expectedOutput: "Employee ID: 3003\nSalary: 28000" }
    ],
    hiddenTestCases: [
      { input: "1001\n35000", expectedOutput: "Employee ID: 1001\nSalary: 35000" },
      { input: "2002\n42000", expectedOutput: "Employee ID: 2002\nSalary: 42000" },
      { input: "3003\n28000", expectedOutput: "Employee ID: 3003\nSalary: 28000" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Employee {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q3',
    title: 'Problem 3: Book Structure',
    difficulty: 'Easy',
    description: "Create a structure to store a book title and price. Read the details and display them.",
    inputFormat: "Book title and price.",
    outputFormat: "Print the book details.",
    sampleInput: "C_Programming\n499",
    sampleOutput: "Title: C_Programming\nPrice: 499",
    testCases: [
      { input: "DSA\n650", expectedOutput: "Title: DSA\nPrice: 650" },
      { input: "DBMS\n550", expectedOutput: "Title: DBMS\nPrice: 550" }
    ],
    hiddenTestCases: [
      { input: "C_Programming\n499", expectedOutput: "Title: C_Programming\nPrice: 499" },
      { input: "DSA\n650", expectedOutput: "Title: DSA\nPrice: 650" },
      { input: "DBMS\n550", expectedOutput: "Title: DBMS\nPrice: 550" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Book {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q4',
    title: 'Problem 4: Display Student Records',
    difficulty: 'Easy',
    description: "Read details of 3 students using an array of structures and display them.",
    inputFormat: "Three student records.",
    outputFormat: "Print all student records.",
    sampleInput: "101 A\n102 B\n103 C",
    sampleOutput: "101 A\n102 B\n103 C",
    testCases: [
      { input: "1 Ram\n2 Sam\n3 Tom", expectedOutput: "1 Ram\n2 Sam\n3 Tom" },
      { input: "11 X\n12 Y\n13 Z", expectedOutput: "11 X\n12 Y\n13 Z" }
    ],
    hiddenTestCases: [
      { input: "101 A\n102 B\n103 C", expectedOutput: "101 A\n102 B\n103 C" },
      { input: "1 Ram\n2 Sam\n3 Tom", expectedOutput: "1 Ram\n2 Sam\n3 Tom" },
      { input: "11 X\n12 Y\n13 Z", expectedOutput: "11 X\n12 Y\n13 Z" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Student {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q5',
    title: 'Problem 5: Product Structure',
    difficulty: 'Medium',
    description: "Create a structure to store a product name, quantity and price. Read and display the details.",
    inputFormat: "Product name, quantity and price.",
    outputFormat: "Print product details.",
    sampleInput: "Laptop\n5\n45000",
    sampleOutput: "Product: Laptop\nQuantity: 5\nPrice: 45000",
    testCases: [
      { input: "Mouse\n10\n800", expectedOutput: "Product: Mouse\nQuantity: 10\nPrice: 800" },
      { input: "Keyboard\n8\n1200", expectedOutput: "Product: Keyboard\nQuantity: 8\nPrice: 1200" }
    ],
    hiddenTestCases: [
      { input: "Laptop\n5\n45000", expectedOutput: "Product: Laptop\nQuantity: 5\nPrice: 45000" },
      { input: "Mouse\n10\n800", expectedOutput: "Product: Mouse\nQuantity: 10\nPrice: 800" },
      { input: "Keyboard\n8\n1200", expectedOutput: "Product: Keyboard\nQuantity: 8\nPrice: 1200" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Product {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q6',
    title: 'Problem 6: Nested Structure',
    difficulty: 'Medium',
    description: "Create nested structures to store a student's personal and academic details. Read and display the details.",
    inputFormat: "Name, Age and CGPA.",
    outputFormat: "Print all details.",
    sampleInput: "Likitha\n20\n9.1",
    sampleOutput: "Name: Likitha\nAge: 20\nCGPA: 9.1",
    testCases: [
      { input: "Rahul\n21\n8.4", expectedOutput: "Name: Rahul\nAge: 21\nCGPA: 8.4" },
      { input: "Anjali\n19\n9.5", expectedOutput: "Name: Anjali\nAge: 19\nCGPA: 9.5" }
    ],
    hiddenTestCases: [
      { input: "Likitha\n20\n9.1", expectedOutput: "Name: Likitha\nAge: 20\nCGPA: 9.1" },
      { input: "Rahul\n21\n8.4", expectedOutput: "Name: Rahul\nAge: 21\nCGPA: 8.4" },
      { input: "Anjali\n19\n9.5", expectedOutput: "Name: Anjali\nAge: 19\nCGPA: 9.5" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Academic {\n    // Define members here\n};\nstruct Student {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q7',
    title: 'Problem 7: Union Demonstration',
    difficulty: 'Medium',
    description: "Create a union containing an integer, float and character. Read an integer and display it using the union.",
    inputFormat: "An integer.",
    outputFormat: "Print the integer value.",
    sampleInput: "25",
    sampleOutput: "Value: 25",
    testCases: [
      { input: "100", expectedOutput: "Value: 100" },
      { input: "7", expectedOutput: "Value: 7" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Value: 25" },
      { input: "100", expectedOutput: "Value: 100" },
      { input: "7", expectedOutput: "Value: 7" }
    ],
    starterCode: '#include <stdio.h>\n\nunion Data {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q8',
    title: 'Problem 8: Structure with Function',
    difficulty: 'Medium',
    description: "Pass a structure containing employee details to a function and display the values.",
    inputFormat: "Employee ID and Name.",
    outputFormat: "Print employee details.",
    sampleInput: "101\nJohn",
    sampleOutput: "Employee ID: 101\nName: John",
    testCases: [
      { input: "102\nRiya", expectedOutput: "Employee ID: 102\nName: Riya" },
      { input: "103\nKiran", expectedOutput: "Employee ID: 103\nName: Kiran" }
    ],
    hiddenTestCases: [
      { input: "101\nJohn", expectedOutput: "Employee ID: 101\nName: John" },
      { input: "102\nRiya", expectedOutput: "Employee ID: 102\nName: Riya" },
      { input: "103\nKiran", expectedOutput: "Employee ID: 103\nName: Kiran" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Employee {\n    // Define members here\n};\n\n// Write function here\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q9',
    title: 'Problem 9: Bank Account Structure',
    difficulty: 'Hard',
    description: "Create a structure to store account number, holder name and balance. Read and display the details.",
    inputFormat: "Account number, holder name and balance.",
    outputFormat: "Print account details.",
    sampleInput: "12345\nLikitha\n25000",
    sampleOutput: "Account: 12345\nName: Likitha\nBalance: 25000",
    testCases: [
      { input: "56789\nRahul\n50000", expectedOutput: "Account: 56789\nName: Rahul\nBalance: 50000" },
      { input: "98765\nAnjali\n18000", expectedOutput: "Account: 98765\nName: Anjali\nBalance: 18000" }
    ],
    hiddenTestCases: [
      { input: "12345\nLikitha\n25000", expectedOutput: "Account: 12345\nName: Likitha\nBalance: 25000" },
      { input: "56789\nRahul\n50000", expectedOutput: "Account: 56789\nName: Rahul\nBalance: 50000" },
      { input: "98765\nAnjali\n18000", expectedOutput: "Account: 98765\nName: Anjali\nBalance: 18000" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct BankAccount {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't36_q10',
    title: 'Problem 10: Student Management System',
    difficulty: 'Hard',
    description: "Read details of 5 students using an array of structures and display all the records.",
    inputFormat: "Five student records (e.g. ID and Name per line).",
    outputFormat: "Print all student records.",
    sampleInput: "101 A\n102 B\n103 C\n104 D\n105 E",
    sampleOutput: "101 A\n102 B\n103 C\n104 D\n105 E",
    testCases: [
      { input: "1 Ram\n2 Sam\n3 Tom\n4 Bob\n5 Ali", expectedOutput: "1 Ram\n2 Sam\n3 Tom\n4 Bob\n5 Ali" },
      { input: "11 X\n12 Y\n13 Z\n14 W\n15 V", expectedOutput: "11 X\n12 Y\n13 Z\n14 W\n15 V" }
    ],
    hiddenTestCases: [
      { input: "101 A\n102 B\n103 C\n104 D\n105 E", expectedOutput: "101 A\n102 B\n103 C\n104 D\n105 E" },
      { input: "1 Ram\n2 Sam\n3 Tom\n4 Bob\n5 Ali", expectedOutput: "1 Ram\n2 Sam\n3 Tom\n4 Bob\n5 Ali" },
      { input: "11 X\n12 Y\n13 Z\n14 W\n15 V", expectedOutput: "11 X\n12 Y\n13 Z\n14 W\n15 V" }
    ],
    starterCode: '#include <stdio.h>\n\nstruct Student {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
