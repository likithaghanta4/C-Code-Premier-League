export const lesson33Questions = [
  {
    id: 't33_q1',
    title: 'Problem 1: Read and Print a String',
    difficulty: 'Easy',
    description: "Read a string and display it.",
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
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q2',
    title: 'Problem 2: Find String Length',
    difficulty: 'Easy',
    description: "Read a string and find its length using string functions.",
    inputFormat: "A single string.",
    outputFormat: "Print the length.",
    sampleInput: "OpenAI",
    sampleOutput: "Length: 6",
    testCases: [
      { input: "Hello", expectedOutput: "Length: 5" },
      { input: "Arrays", expectedOutput: "Length: 6" }
    ],
    hiddenTestCases: [
      { input: "OpenAI", expectedOutput: "Length: 6" },
      { input: "Hello", expectedOutput: "Length: 5" },
      { input: "Arrays", expectedOutput: "Length: 6" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q3',
    title: 'Problem 3: Copy a String',
    difficulty: 'Easy',
    description: "Read a string, copy it into another string and display the copied string.",
    inputFormat: "A single string.",
    outputFormat: "Print the copied string.",
    sampleInput: "Computer",
    sampleOutput: "Copied String: Computer",
    testCases: [
      { input: "Likitha", expectedOutput: "Copied String: Likitha" },
      { input: "CLanguage", expectedOutput: "Copied String: CLanguage" }
    ],
    hiddenTestCases: [
      { input: "Computer", expectedOutput: "Copied String: Computer" },
      { input: "Likitha", expectedOutput: "Copied String: Likitha" },
      { input: "CLanguage", expectedOutput: "Copied String: CLanguage" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q4',
    title: 'Problem 4: Compare Two Strings',
    difficulty: 'Easy',
    description: "Read two strings and compare them.",
    inputFormat: "Two strings.",
    outputFormat: "Print Equal or Not Equal.",
    sampleInput: "Apple\nApple",
    sampleOutput: "Equal",
    testCases: [
      { input: "Cat\nDog", expectedOutput: "Not Equal" },
      { input: "Code\nCode", expectedOutput: "Equal" }
    ],
    hiddenTestCases: [
      { input: "Apple\nApple", expectedOutput: "Equal" },
      { input: "Cat\nDog", expectedOutput: "Not Equal" },
      { input: "Code\nCode", expectedOutput: "Equal" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q5',
    title: 'Problem 5: Concatenate Two Strings',
    difficulty: 'Medium',
    description: "Read two strings and concatenate them.",
    inputFormat: "Two strings.",
    outputFormat: "Print the concatenated string.",
    sampleInput: "Hello\nWorld",
    sampleOutput: "HelloWorld",
    testCases: [
      { input: "Good\nMorning", expectedOutput: "GoodMorning" },
      { input: "C\nLanguage", expectedOutput: "CLanguage" }
    ],
    hiddenTestCases: [
      { input: "Hello\nWorld", expectedOutput: "HelloWorld" },
      { input: "Good\nMorning", expectedOutput: "GoodMorning" },
      { input: "C\nLanguage", expectedOutput: "CLanguage" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q6',
    title: 'Problem 6: Reverse a String',
    difficulty: 'Medium',
    description: "Read a string and print it in reverse order.",
    inputFormat: "A single string.",
    outputFormat: "Print the reversed string.",
    sampleInput: "Hello",
    sampleOutput: "olleH",
    testCases: [
      { input: "CPL", expectedOutput: "LPC" },
      { input: "Programming", expectedOutput: "gnimmargorP" }
    ],
    hiddenTestCases: [
      { input: "Hello", expectedOutput: "olleH" },
      { input: "CPL", expectedOutput: "LPC" },
      { input: "Programming", expectedOutput: "gnimmargorP" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q7',
    title: 'Problem 7: Count Vowels',
    difficulty: 'Medium',
    description: "Read a string and count the number of vowels.",
    inputFormat: "A single string.",
    outputFormat: "Print vowel count.",
    sampleInput: "Education",
    sampleOutput: "Vowels: 5",
    testCases: [
      { input: "Hello", expectedOutput: "Vowels: 2" },
      { input: "Sky", expectedOutput: "Vowels: 0" }
    ],
    hiddenTestCases: [
      { input: "Education", expectedOutput: "Vowels: 5" },
      { input: "Hello", expectedOutput: "Vowels: 2" },
      { input: "Sky", expectedOutput: "Vowels: 0" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q8',
    title: 'Problem 8: Check Palindrome',
    difficulty: 'Medium',
    description: "Read a string and check whether it is a palindrome.",
    inputFormat: "A single string.",
    outputFormat: "Print Palindrome or Not Palindrome.",
    sampleInput: "madam",
    sampleOutput: "Palindrome",
    testCases: [
      { input: "level", expectedOutput: "Palindrome" },
      { input: "hello", expectedOutput: "Not Palindrome" }
    ],
    hiddenTestCases: [
      { input: "madam", expectedOutput: "Palindrome" },
      { input: "level", expectedOutput: "Palindrome" },
      { input: "hello", expectedOutput: "Not Palindrome" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q9',
    title: 'Problem 9: Convert to Uppercase',
    difficulty: 'Hard',
    description: "Read a lowercase string and convert it to uppercase.",
    inputFormat: "A single string.",
    outputFormat: "Print uppercase string.",
    sampleInput: "hello",
    sampleOutput: "HELLO",
    testCases: [
      { input: "cprogram", expectedOutput: "CPROGRAM" },
      { input: "openai", expectedOutput: "OPENAI" }
    ],
    hiddenTestCases: [
      { input: "hello", expectedOutput: "HELLO" },
      { input: "cprogram", expectedOutput: "CPROGRAM" },
      { input: "openai", expectedOutput: "OPENAI" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 't33_q10',
    title: 'Problem 10: Count Words',
    difficulty: 'Hard',
    description: "Read a sentence and count the number of words.",
    inputFormat: "A sentence.",
    outputFormat: "Print the word count.",
    sampleInput: "I love C",
    sampleOutput: "Words: 3",
    testCases: [
      { input: "Welcome to CPL", expectedOutput: "Words: 3" },
      { input: "ChatGPT helps students", expectedOutput: "Words: 3" }
    ],
    hiddenTestCases: [
      { input: "I love C", expectedOutput: "Words: 3" },
      { input: "Welcome to CPL", expectedOutput: "Words: 3" },
      { input: "ChatGPT helps students", expectedOutput: "Words: 3" }
    ],
    starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  }
];
