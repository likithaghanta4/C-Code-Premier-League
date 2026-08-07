export const lesson27Questions = [
  {
    id: 't27_q1',
    title: 'Problem 1: Define and Display PI',
    difficulty: 'Easy',
    description: "A science application uses the mathematical constant PI. Write a C program that declares PI as a constant and prints its value.",
    inputFormat: "No input.",
    outputFormat: "Print the value of PI.",
    sampleInput: "No Input",
    sampleOutput: "PI = 3.14",
    testCases: [
      { input: "No Input", expectedOutput: "PI = 3.14" },
      { input: "No Input", expectedOutput: "PI = 3.14" }
    ],
    hiddenTestCases: [
      { input: "No Input", expectedOutput: "PI = 3.14" },
      { input: "No Input", expectedOutput: "PI = 3.14" },
      { input: "No Input", expectedOutput: "PI = 3.14" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q2',
    title: 'Problem 2: Student ID using Constant',
    difficulty: 'Easy',
    description: "Declare a constant college code and read a student ID. Display both values.",
    inputFormat: "A single integer representing Student ID.",
    outputFormat: "Print the college code and student ID.",
    sampleInput: "101",
    sampleOutput: "College Code: SRKR\nStudent ID: 101",
    testCases: [
      { input: "205", expectedOutput: "College Code: SRKR\nStudent ID: 205" },
      { input: "350", expectedOutput: "College Code: SRKR\nStudent ID: 350" }
    ],
    hiddenTestCases: [
      { input: "101", expectedOutput: "College Code: SRKR\nStudent ID: 101" },
      { input: "205", expectedOutput: "College Code: SRKR\nStudent ID: 205" },
      { input: "350", expectedOutput: "College Code: SRKR\nStudent ID: 350" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q3',
    title: 'Problem 3: Read and Display Integer',
    difficulty: 'Easy',
    description: "Read an integer from the user and display it.",
    inputFormat: "A single integer.",
    outputFormat: "Print the entered integer.",
    sampleInput: "25",
    sampleOutput: "Number: 25",
    testCases: [
      { input: "100", expectedOutput: "Number: 100" },
      { input: "-15", expectedOutput: "Number: -15" }
    ],
    hiddenTestCases: [
      { input: "25", expectedOutput: "Number: 25" },
      { input: "100", expectedOutput: "Number: 100" },
      { input: "-15", expectedOutput: "Number: -15" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q4',
    title: 'Problem 4: Read and Display Float',
    difficulty: 'Easy',
    description: "Read a floating-point number and display it with two decimal places.",
    inputFormat: "A floating-point number.",
    outputFormat: "Print the entered value.",
    sampleInput: "45.75",
    sampleOutput: "Value: 45.75",
    testCases: [
      { input: "12.50", expectedOutput: "Value: 12.50" },
      { input: "99.99", expectedOutput: "Value: 99.99" }
    ],
    hiddenTestCases: [
      { input: "45.75", expectedOutput: "Value: 45.75" },
      { input: "12.50", expectedOutput: "Value: 12.50" },
      { input: "99.99", expectedOutput: "Value: 99.99" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q5',
    title: 'Problem 5: Student Basic Details',
    difficulty: 'Medium',
    description: "Read a student's name and age, then display the details.",
    inputFormat: "Student name and age.",
    outputFormat: "Display the student's details.",
    sampleInput: "Likitha\n20",
    sampleOutput: "Name: Likitha\nAge: 20",
    testCases: [
      { input: "Rahul\n21", expectedOutput: "Name: Rahul\nAge: 21" },
      { input: "Anjali\n19", expectedOutput: "Name: Anjali\nAge: 19" }
    ],
    hiddenTestCases: [
      { input: "Likitha\n20", expectedOutput: "Name: Likitha\nAge: 20" },
      { input: "Rahul\n21", expectedOutput: "Name: Rahul\nAge: 21" },
      { input: "Anjali\n19", expectedOutput: "Name: Anjali\nAge: 19" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q6',
    title: 'Problem 6: Circle Information',
    difficulty: 'Medium',
    description: "Declare PI as a constant. Read the radius and display the radius and PI value.",
    inputFormat: "Radius.",
    outputFormat: "Display PI and radius.",
    sampleInput: "7",
    sampleOutput: "PI: 3.14\nRadius: 7",
    testCases: [
      { input: "10", expectedOutput: "PI: 3.14\nRadius: 10" },
      { input: "15", expectedOutput: "PI: 3.14\nRadius: 15" }
    ],
    hiddenTestCases: [
      { input: "7", expectedOutput: "PI: 3.14\nRadius: 7" },
      { input: "10", expectedOutput: "PI: 3.14\nRadius: 10" },
      { input: "15", expectedOutput: "PI: 3.14\nRadius: 15" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q7',
    title: 'Problem 7: Electricity Bill Details',
    difficulty: 'Medium',
    description: "Read customer name and units consumed. Display both values.",
    inputFormat: "Customer name and units.",
    outputFormat: "Display customer details.",
    sampleInput: "Ravi\n150",
    sampleOutput: "Customer: Ravi\nUnits: 150",
    testCases: [
      { input: "Sita\n220", expectedOutput: "Customer: Sita\nUnits: 220" },
      { input: "Akhil\n95", expectedOutput: "Customer: Akhil\nUnits: 95" }
    ],
    hiddenTestCases: [
      { input: "Ravi\n150", expectedOutput: "Customer: Ravi\nUnits: 150" },
      { input: "Sita\n220", expectedOutput: "Customer: Sita\nUnits: 220" },
      { input: "Akhil\n95", expectedOutput: "Customer: Akhil\nUnits: 95" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q8',
    title: 'Problem 8: Employee Information',
    difficulty: 'Medium',
    description: "Read employee name, ID and basic salary. Display all details.",
    inputFormat: "Name, ID and Salary.",
    outputFormat: "Display employee information.",
    sampleInput: "John\n1001\n35000",
    sampleOutput: "Employee: John\nID: 1001\nSalary: 35000",
    testCases: [
      { input: "Riya\n2002\n42000", expectedOutput: "Employee: Riya\nID: 2002\nSalary: 42000" },
      { input: "Kiran\n3003\n28000", expectedOutput: "Employee: Kiran\nID: 3003\nSalary: 28000" }
    ],
    hiddenTestCases: [
      { input: "John\n1001\n35000", expectedOutput: "Employee: John\nID: 1001\nSalary: 35000" },
      { input: "Riya\n2002\n42000", expectedOutput: "Employee: Riya\nID: 2002\nSalary: 42000" },
      { input: "Kiran\n3003\n28000", expectedOutput: "Employee: Kiran\nID: 3003\nSalary: 28000" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q9',
    title: 'Problem 9: Product Receipt',
    difficulty: 'Hard',
    description: "Declare a constant GST percentage. Read product name and price, then display product details along with GST percentage.",
    inputFormat: "Product name and price.",
    outputFormat: "Display product and GST percentage.",
    sampleInput: "Laptop\n50000",
    sampleOutput: "Product: Laptop\nPrice: 50000\nGST: 18%",
    testCases: [
      { input: "Mouse\n800", expectedOutput: "Product: Mouse\nPrice: 800\nGST: 18%" },
      { input: "Keyboard\n1500", expectedOutput: "Product: Keyboard\nPrice: 1500\nGST: 18%" }
    ],
    hiddenTestCases: [
      { input: "Laptop\n50000", expectedOutput: "Product: Laptop\nPrice: 50000\nGST: 18%" },
      { input: "Mouse\n800", expectedOutput: "Product: Mouse\nPrice: 800\nGST: 18%" },
      { input: "Keyboard\n1500", expectedOutput: "Product: Keyboard\nPrice: 1500\nGST: 18%" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't27_q10',
    title: 'Problem 10: Bank Account Summary',
    difficulty: 'Hard',
    description: "Declare a constant bank name. Read account holder name, account number and balance, then display the account summary.",
    inputFormat: "Name, Account Number and Balance.",
    outputFormat: "Display account summary.",
    sampleInput: "Likitha\n123456\n25000",
    sampleOutput: "Bank: CPL Bank\nName: Likitha\nAccount No: 123456\nBalance: 25000",
    testCases: [
      { input: "Rahul\n789654\n50000", expectedOutput: "Bank: CPL Bank\nName: Rahul\nAccount No: 789654\nBalance: 50000" },
      { input: "Anjali\n456123\n18000", expectedOutput: "Bank: CPL Bank\nName: Anjali\nAccount No: 456123\nBalance: 18000" }
    ],
    hiddenTestCases: [
      { input: "Likitha\n123456\n25000", expectedOutput: "Bank: CPL Bank\nName: Likitha\nAccount No: 123456\nBalance: 25000" },
      { input: "Rahul\n789654\n50000", expectedOutput: "Bank: CPL Bank\nName: Rahul\nAccount No: 789654\nBalance: 50000" },
      { input: "Anjali\n456123\n18000", expectedOutput: "Bank: CPL Bank\nName: Anjali\nAccount No: 456123\nBalance: 18000" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
