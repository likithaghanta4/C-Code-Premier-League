export default {
  id: "t25_q10",
  title: "Problem 10: Profile Card",
  difficulty: "Hard",
  description: "Read name, age, branch and college and display a profile card.",
  inputFormat: "Name, Age, Branch and College.",
  outputFormat: "Display profile card.",
  sampleInput: "Likitha\\n20\\nCSIT\\nSRKR",
  sampleOutput: "Name : Likitha\\nAge : 20\\nBranch : CSIT\\nCollege : SRKR",
  testCases: [
  {
    "input": "Rahul\\n21\\nAIML\\nABC College",
    "expectedOutput": "Name : Rahul\\nAge : 21\\nBranch : AIML\\nCollege : ABC College"
  },
  {
    "input": "Priya\\n19\\nECE\\nXYZ College",
    "expectedOutput": "Name : Priya\\nAge : 19\\nBranch : ECE\\nCollege : XYZ College"
  }
],
  hiddenTestCases: [],
  starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}"
};
