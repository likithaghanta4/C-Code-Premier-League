const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client/src/data/practice/lesson25');

const problems = [
  {
    id: 't25_q1',
    title: 'Problem 1: Welcome Student',
    difficulty: 'Easy',
    description: "A college portal greets every student after login. Read the student's name and print a personalized welcome message.",
    inputFormat: "A single line containing the student's name.",
    outputFormat: "Print: Welcome, <Student_Name>!",
    sampleInput: "Likitha",
    sampleOutput: "Welcome, Likitha!",
    testCases: [
      { input: "Rahul", expectedOutput: "Welcome, Rahul!" },
      { input: "Anjali", expectedOutput: "Welcome, Anjali!" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q01-welcome-student.js'
  },
  {
    id: 't25_q2',
    title: 'Problem 2: Student Information',
    difficulty: 'Easy',
    description: "Read a student's name and roll number and display them in a formatted way.",
    inputFormat: "Name on first line, roll number on second line.",
    outputFormat: "Display the student's name and roll number.",
    sampleInput: "Likitha\\n101",
    sampleOutput: "Student Name : Likitha\\nRoll Number  : 101",
    testCases: [
      { input: "Rahul\\n205", expectedOutput: "Student Name : Rahul\\nRoll Number  : 205" },
      { input: "Priya\\n320", expectedOutput: "Student Name : Priya\\nRoll Number  : 320" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q02-student-information.js'
  },
  {
    id: 't25_q3',
    title: 'Problem 3: College Details',
    difficulty: 'Easy',
    description: "Read the college name and branch and display both neatly.",
    inputFormat: "College name and branch.",
    outputFormat: "Display college and branch.",
    sampleInput: "SRKR\\nCSIT",
    sampleOutput: "College : SRKR\\nBranch  : CSIT",
    testCases: [
      { input: "ABC College\\nECE", expectedOutput: "College : ABC College\\nBranch  : ECE" },
      { input: "XYZ College\\nAIML", expectedOutput: "College : XYZ College\\nBranch  : AIML" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q03-college-details.js'
  },
  {
    id: 't25_q4',
    title: 'Problem 4: Address Card',
    difficulty: 'Easy',
    description: "Read a person's name, city and state and print an address card.",
    inputFormat: "Name, City and State on separate lines.",
    outputFormat: "Display the address card.",
    sampleInput: "Likitha\\nEluru\\nAP",
    sampleOutput: "Name : Likitha\\nCity : Eluru\\nState: AP",
    testCases: [
      { input: "Rahul\\nHyderabad\\nTS", expectedOutput: "Name : Rahul\\nCity : Hyderabad\\nState: TS" },
      { input: "Anjali\\nVijayawada\\nAP", expectedOutput: "Name : Anjali\\nCity : Vijayawada\\nState: AP" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q04-address-card.js'
  },
  {
    id: 't25_q5',
    title: 'Problem 5: Employee ID Card',
    difficulty: 'Medium',
    description: "Read employee name, employee ID and department and generate an ID card.",
    inputFormat: "Name, ID and Department.",
    outputFormat: "Display employee details.",
    sampleInput: "Rahul\\n5001\\nHR",
    sampleOutput: "Employee : Rahul\\nID : 5001\\nDepartment : HR",
    testCases: [
      { input: "Anu\\n5002\\nFinance", expectedOutput: "Employee : Anu\\nID : 5002\\nDepartment : Finance" },
      { input: "Vijay\\n5003\\nIT", expectedOutput: "Employee : Vijay\\nID : 5003\\nDepartment : IT" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q05-employee-id-card.js'
  },
  {
    id: 't25_q6',
    title: 'Problem 6: Library Card',
    difficulty: 'Medium',
    description: "Read student name and borrowed book name and print a library card.",
    inputFormat: "Student name and book title.",
    outputFormat: "Display library card.",
    sampleInput: "Likitha\\nC Programming",
    sampleOutput: "Student : Likitha\\nBook : C Programming",
    testCases: [
      { input: "Rahul\\nData Structures", expectedOutput: "Student : Rahul\\nBook : Data Structures" },
      { input: "Anjali\\nOperating Systems", expectedOutput: "Student : Anjali\\nBook : Operating Systems" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q06-library-card.js'
  },
  {
    id: 't25_q7',
    title: 'Problem 7: Fee Receipt',
    difficulty: 'Medium',
    description: "Read student name and paid fee amount and generate a receipt.",
    inputFormat: "Student name and fee amount.",
    outputFormat: "Display receipt.",
    sampleInput: "Likitha\\n25000",
    sampleOutput: "Student : Likitha\\nFee Paid : 25000",
    testCases: [
      { input: "Rahul\\n18000", expectedOutput: "Student : Rahul\\nFee Paid : 18000" },
      { input: "Priya\\n30000", expectedOutput: "Student : Priya\\nFee Paid : 30000" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q07-fee-receipt.js'
  },
  {
    id: 't25_q8',
    title: 'Problem 8: Bus Pass',
    difficulty: 'Medium',
    description: "Read passenger name and destination and print a bus pass.",
    inputFormat: "Passenger name and destination.",
    outputFormat: "Display bus pass.",
    sampleInput: "Likitha\\nBhimavaram",
    sampleOutput: "Passenger : Likitha\\nDestination : Bhimavaram",
    testCases: [
      { input: "Rahul\\nEluru", expectedOutput: "Passenger : Rahul\\nDestination : Eluru" },
      { input: "Anjali\\nRajahmundry", expectedOutput: "Passenger : Anjali\\nDestination : Rajahmundry" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q08-bus-pass.js'
  },
  {
    id: 't25_q9',
    title: 'Problem 9: Event Registration',
    difficulty: 'Hard',
    description: "Read participant name and event name and print a registration slip.",
    inputFormat: "Participant name and event.",
    outputFormat: "Display registration details.",
    sampleInput: "Anjali\\nCoding Contest",
    sampleOutput: "Participant : Anjali\\nEvent : Coding Contest",
    testCases: [
      { input: "Vijay\\nDebug Challenge", expectedOutput: "Participant : Vijay\\nEvent : Debug Challenge" },
      { input: "Sneha\\nHackathon", expectedOutput: "Participant : Sneha\\nEvent : Hackathon" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q09-event-registration.js'
  },
  {
    id: 't25_q10',
    title: 'Problem 10: Profile Card',
    difficulty: 'Hard',
    description: "Read name, age, branch and college and display a profile card.",
    inputFormat: "Name, Age, Branch and College.",
    outputFormat: "Display profile card.",
    sampleInput: "Likitha\\n20\\nCSIT\\nSRKR",
    sampleOutput: "Name : Likitha\\nAge : 20\\nBranch : CSIT\\nCollege : SRKR",
    testCases: [
      { input: "Rahul\\n21\\nAIML\\nABC College", expectedOutput: "Name : Rahul\\nAge : 21\\nBranch : AIML\\nCollege : ABC College" },
      { input: "Priya\\n19\\nECE\\nXYZ College", expectedOutput: "Name : Priya\\nAge : 19\\nBranch : ECE\\nCollege : XYZ College" }
    ],
    hiddenTestCases: [],
    starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
    filename: 'q10-profile-card.js'
  }
];

problems.forEach(p => {
  const fileContent = `export default {
  id: ${JSON.stringify(p.id)},
  title: ${JSON.stringify(p.title)},
  difficulty: ${JSON.stringify(p.difficulty)},
  description: ${JSON.stringify(p.description)},
  inputFormat: ${JSON.stringify(p.inputFormat)},
  outputFormat: ${JSON.stringify(p.outputFormat)},
  sampleInput: ${JSON.stringify(p.sampleInput)},
  sampleOutput: ${JSON.stringify(p.sampleOutput)},
  testCases: ${JSON.stringify(p.testCases, null, 2)},
  hiddenTestCases: ${JSON.stringify(p.hiddenTestCases, null, 2)},
  starterCode: ${JSON.stringify(p.starterCode)}
};
`;
  fs.writeFileSync(path.join(dir, p.filename), fileContent);
});

console.log("Files updated with proper testCases arrays!");
