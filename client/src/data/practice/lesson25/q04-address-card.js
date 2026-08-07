export default {
  id: "t25_q4",
  title: "Problem 4: Address Card",
  difficulty: "Easy",
  description: "Read a person's name, city and state and print an address card.",
  inputFormat: "Name, City and State on separate lines.",
  outputFormat: "Display the address card.",
  sampleInput: "Likitha\\nEluru\\nAP",
  sampleOutput: "Name : Likitha\\nCity : Eluru\\nState: AP",
  testCases: [
  {
    "input": "Rahul\\nHyderabad\\nTS",
    "expectedOutput": "Name : Rahul\\nCity : Hyderabad\\nState: TS"
  },
  {
    "input": "Anjali\\nVijayawada\\nAP",
    "expectedOutput": "Name : Anjali\\nCity : Vijayawada\\nState: AP"
  }
],
  hiddenTestCases: [],
  starterCode: "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}"
};
