export default {
  id: "t25_q7",
  title: "Problem 7: Fee Receipt",
  difficulty: "Medium",
  description: "Read student name and paid fee amount and generate a receipt.",
  inputFormat: "Student name and fee amount.",
  outputFormat: "Display receipt.",
  sampleInput: "Likitha\\n25000",
  sampleOutput: "Student : Likitha\\nFee Paid : 25000",
  testCases: [
  {
    "input": "Rahul\\n18000",
    "expectedOutput": "Student : Rahul\\nFee Paid : 18000"
  },
  {
    "input": "Priya\\n30000",
    "expectedOutput": "Student : Priya\\nFee Paid : 30000"
  }
],
  hiddenTestCases: [],
  starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}"
};
