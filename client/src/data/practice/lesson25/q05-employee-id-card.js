export default {
  id: "t25_q5",
  title: "Problem 5: Employee ID Card",
  difficulty: "Medium",
  description: "Read employee name, employee ID and department and generate an ID card.",
  inputFormat: "Name, ID and Department.",
  outputFormat: "Display employee details.",
  sampleInput: "Rahul\\n5001\\nHR",
  sampleOutput: "Employee : Rahul\\nID : 5001\\nDepartment : HR",
  testCases: [
  {
    "input": "Anu\\n5002\\nFinance",
    "expectedOutput": "Employee : Anu\\nID : 5002\\nDepartment : Finance"
  },
  {
    "input": "Vijay\\n5003\\nIT",
    "expectedOutput": "Employee : Vijay\\nID : 5003\\nDepartment : IT"
  }
],
  hiddenTestCases: [],
  starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}"
};
