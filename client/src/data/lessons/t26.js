export const t26 = [
  {
    id: 't26_q1',
    title: 'Problem 1: Student Age',
    difficulty: 'Easy',
    description: "A school wants to store the age of each student. Read the student's age and display it.",
    inputFormat: "A single integer representing the student's age.",
    outputFormat: "Print: Student Age: <age>",
    sampleInput: "20",
    sampleOutput: "Student Age: 20",
    testCases: [
      { input: "18", expectedOutput: "Student Age: 18" },
      { input: "25", expectedOutput: "Student Age: 25" }
    ],
    hiddenTestCases: [
      { input: "20", expectedOutput: "Student Age: 20" },
      { input: "18", expectedOutput: "Student Age: 18" },
      { input: "25", expectedOutput: "Student Age: 25" }
    ]
  },
  {
    id: 't26_q2',
    title: 'Problem 2: Student Percentage',
    difficulty: 'Easy',
    description: "Read a student's percentage and display it with two decimal places.",
    inputFormat: "A floating-point number.",
    outputFormat: "Print: Percentage: <value>",
    sampleInput: "89.75",
    sampleOutput: "Percentage: 89.75",
    testCases: [
      { input: "92.50", expectedOutput: "Percentage: 92.50" },
      { input: "75.25", expectedOutput: "Percentage: 75.25" }
    ],
    hiddenTestCases: [
      { input: "89.75", expectedOutput: "Percentage: 89.75" },
      { input: "92.50", expectedOutput: "Percentage: 92.50" },
      { input: "75.25", expectedOutput: "Percentage: 75.25" }
    ]
  },
  {
    id: 't26_q3',
    title: 'Problem 3: Employee Salary',
    difficulty: 'Easy',
    description: "Read an employee's monthly salary and display it.",
    inputFormat: "A decimal number.",
    outputFormat: "Print: Salary: <salary>",
    sampleInput: "35000.50",
    sampleOutput: "Salary: 35000.50",
    testCases: [
      { input: "42000.75", expectedOutput: "Salary: 42000.75" },
      { input: "28500.00", expectedOutput: "Salary: 28500.00" }
    ],
    hiddenTestCases: [
      { input: "35000.50", expectedOutput: "Salary: 35000.50" },
      { input: "42000.75", expectedOutput: "Salary: 42000.75" },
      { input: "28500.00", expectedOutput: "Salary: 28500.00" }
    ]
  },
  {
    id: 't26_q4',
    title: 'Problem 4: Display Character',
    difficulty: 'Easy',
    description: "A keyboard testing application needs to verify whether a character entered by the user is received correctly. Write a C program that reads a single character and displays it.",
    inputFormat: "A single character.",
    outputFormat: "Print:\n\nCharacter: <character>",
    sampleInput: "A",
    sampleOutput: "Character: A",
    testCases: [
      { input: "Z", expectedOutput: "Character: Z" },
      { input: "k", expectedOutput: "Character: k" }
    ],
    hiddenTestCases: [
      { input: "A", expectedOutput: "Character: A" },
      { input: "Z", expectedOutput: "Character: Z" },
      { input: "k", expectedOutput: "Character: k" }
    ]
  },
  {
    id: 't26_q5',
    title: 'Problem 5: Student Details',
    difficulty: 'Medium',
    description: "A college wants to maintain basic student records. Write a C program that reads a student's name, age, and percentage, then displays the information in a formatted manner.",
    inputFormat: "Student Name\nAge\nPercentage",
    outputFormat: "Print:\n\nName: <name>\nAge: <age>\nPercentage: <percentage>",
    sampleInput: "Likitha\n20\n91.50",
    sampleOutput: "Name: Likitha\nAge: 20\nPercentage: 91.50",
    testCases: [
      { input: "Rahul\n21\n84.25", expectedOutput: "Name: Rahul\nAge: 21\nPercentage: 84.25" },
      { input: "Anjali\n19\n95.75", expectedOutput: "Name: Anjali\nAge: 19\nPercentage: 95.75" }
    ],
    hiddenTestCases: [
      { input: "Likitha\n20\n91.50", expectedOutput: "Name: Likitha\nAge: 20\nPercentage: 91.50" },
      { input: "Rahul\n21\n84.25", expectedOutput: "Name: Rahul\nAge: 21\nPercentage: 84.25" },
      { input: "Anjali\n19\n95.75", expectedOutput: "Name: Anjali\nAge: 19\nPercentage: 95.75" }
    ]
  },
  {
    id: 't26_q6',
    title: 'Problem 6: Product Details',
    difficulty: 'Medium',
    description: "A shopping application stores product information before generating a bill. Write a C program that reads the product name, quantity, and price and displays them.",
    inputFormat: "Product Name\nQuantity\nPrice",
    outputFormat: "Print:\n\nProduct: <name>\nQuantity: <quantity>\nPrice: <price>",
    sampleInput: "Laptop\n5\n45000.00",
    sampleOutput: "Product: Laptop\nQuantity: 5\nPrice: 45000.00",
    testCases: [
      { input: "Mouse\n12\n750.50", expectedOutput: "Product: Mouse\nQuantity: 12\nPrice: 750.50" },
      { input: "Keyboard\n8\n1200.00", expectedOutput: "Product: Keyboard\nQuantity: 8\nPrice: 1200.00" }
    ],
    hiddenTestCases: [
      { input: "Laptop\n5\n45000.00", expectedOutput: "Product: Laptop\nQuantity: 5\nPrice: 45000.00" },
      { input: "Mouse\n12\n750.50", expectedOutput: "Product: Mouse\nQuantity: 12\nPrice: 750.50" },
      { input: "Keyboard\n8\n1200.00", expectedOutput: "Product: Keyboard\nQuantity: 8\nPrice: 1200.00" }
    ]
  },
  {
    id: 't26_q7',
    title: 'Problem 7: Book Information',
    difficulty: 'Medium',
    description: "A library management system stores information about books. Write a C program that reads the book title, number of pages, and price, then displays the information.",
    inputFormat: "Book Title\nNumber of Pages\nPrice",
    outputFormat: "Print:\n\nTitle: <title>\nPages: <pages>\nPrice: <price>",
    sampleInput: "C Programming\n350\n499.00",
    sampleOutput: "Title: C Programming\nPages: 350\nPrice: 499.00",
    testCases: [
      { input: "Data Structures\n420\n650.00", expectedOutput: "Title: Data Structures\nPages: 420\nPrice: 650.00" },
      { input: "Operating Systems\n500\n799.00", expectedOutput: "Title: Operating Systems\nPages: 500\nPrice: 799.00" }
    ],
    hiddenTestCases: [
      { input: "C Programming\n350\n499.00", expectedOutput: "Title: C Programming\nPages: 350\nPrice: 499.00" },
      { input: "Data Structures\n420\n650.00", expectedOutput: "Title: Data Structures\nPages: 420\nPrice: 650.00" },
      { input: "Operating Systems\n500\n799.00", expectedOutput: "Title: Operating Systems\nPages: 500\nPrice: 799.00" }
    ]
  },
  {
    id: 't26_q8',
    title: 'Problem 8: Vehicle Details',
    difficulty: 'Medium',
    description: "A transport office records vehicle information for registration. Write a C program that reads the vehicle number, model year, and mileage and displays the details.",
    inputFormat: "Vehicle Number\nModel Year\nMileage",
    outputFormat: "Print:\n\nVehicle Number: <number>\nYear: <year>\nMileage: <mileage>",
    sampleInput: "AP39AB1234\n2022\n18.50",
    sampleOutput: "Vehicle Number: AP39AB1234\nYear: 2022\nMileage: 18.50",
    testCases: [
      { input: "TS09CD5678\n2024\n22.80", expectedOutput: "Vehicle Number: TS09CD5678\nYear: 2024\nMileage: 22.80" },
      { input: "KA01EF9999\n2021\n20.10", expectedOutput: "Vehicle Number: KA01EF9999\nYear: 2021\nMileage: 20.10" }
    ],
    hiddenTestCases: [
      { input: "AP39AB1234\n2022\n18.50", expectedOutput: "Vehicle Number: AP39AB1234\nYear: 2022\nMileage: 18.50" },
      { input: "TS09CD5678\n2024\n22.80", expectedOutput: "Vehicle Number: TS09CD5678\nYear: 2024\nMileage: 22.80" },
      { input: "KA01EF9999\n2021\n20.10", expectedOutput: "Vehicle Number: KA01EF9999\nYear: 2021\nMileage: 20.10" }
    ]
  },
  {
    id: 't26_q9',
    title: 'Problem 9: Cricket Player Profile',
    difficulty: 'Hard',
    description: "A cricket academy stores player information for its records. Write a C program that reads the player's name, jersey number, and batting average and displays the profile.",
    inputFormat: "Player Name\nJersey Number\nBatting Average",
    outputFormat: "Print:\n\nPlayer: <name>\nJersey Number: <number>\nBatting Average: <average>",
    sampleInput: "Virat\n18\n57.85",
    sampleOutput: "Player: Virat\nJersey Number: 18\nBatting Average: 57.85",
    testCases: [
      { input: "Rohit\n45\n49.30", expectedOutput: "Player: Rohit\nJersey Number: 45\nBatting Average: 49.30" },
      { input: "Gill\n77\n52.40", expectedOutput: "Player: Gill\nJersey Number: 77\nBatting Average: 52.40" }
    ],
    hiddenTestCases: [
      { input: "Virat\n18\n57.85", expectedOutput: "Player: Virat\nJersey Number: 18\nBatting Average: 57.85" },
      { input: "Rohit\n45\n49.30", expectedOutput: "Player: Rohit\nJersey Number: 45\nBatting Average: 49.30" },
      { input: "Gill\n77\n52.40", expectedOutput: "Player: Gill\nJersey Number: 77\nBatting Average: 52.40" }
    ]
  },
  {
    id: 't26_q10',
    title: 'Problem 10: Hospital Patient Record',
    difficulty: 'Hard',
    description: "A hospital maintains patient records for every admission. Write a C program that reads the patient's name, age, weight, and blood group and displays the complete patient record.",
    inputFormat: "Patient Name\nAge\nWeight\nBlood Group",
    outputFormat: "Print:\n\nPatient: <name>\nAge: <age>\nWeight: <weight>\nBlood Group: <group>",
    sampleInput: "Likitha\n20\n52.5\nO+",
    sampleOutput: "Patient: Likitha\nAge: 20\nWeight: 52.5\nBlood Group: O+",
    testCases: [
      { input: "Rahul\n24\n68.0\nB+", expectedOutput: "Patient: Rahul\nAge: 24\nWeight: 68.0\nBlood Group: B+" },
      { input: "Anjali\n19\n49.5\nA+", expectedOutput: "Patient: Anjali\nAge: 19\nWeight: 49.5\nBlood Group: A+" }
    ],
    hiddenTestCases: [
      { input: "Likitha\n20\n52.5\nO+", expectedOutput: "Patient: Likitha\nAge: 20\nWeight: 52.5\nBlood Group: O+" },
      { input: "Rahul\n24\n68.0\nB+", expectedOutput: "Patient: Rahul\nAge: 24\nWeight: 68.0\nBlood Group: B+" },
      { input: "Anjali\n19\n49.5\nA+", expectedOutput: "Patient: Anjali\nAge: 19\nWeight: 49.5\nBlood Group: A+" }
    ]
  }
];

// Add starter code to all problems
t26.forEach(p => {
  p.starterCode = '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}';
});
