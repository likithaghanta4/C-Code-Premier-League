export const lesson24Assessment = {
  id: 'lesson24',
  title: 'Final Assessment',
  duration: 90, // minutes
  totalMarks: 100,
  passingMarks: 70,
  rules: [
    'Duration is 90 minutes.',
    'Do not refresh the page.',
    'Your answers are automatically saved.',
    'Programming questions will open in the CPL Online Compiler.',
    'Once a section is submitted it cannot be edited again.',
    'Complete every section.',
    'Passing marks are 70.'
  ],
  objective: {
    totalMarks: 40,
    mcqs: [
      {
        id: 1,
        question: "Which function prints output to the screen?",
        options: ["scanf()", "printf()", "gets()", "fopen()"],
        answer: 1 // index of correct option
      },
      {
        id: 2,
        question: "Which keyword declares a constant?",
        options: ["define", "const", "auto", "static"],
        answer: 1
      },
      {
        id: 3,
        question: "Which data type stores decimal numbers?",
        options: ["int", "char", "float", "short"],
        answer: 2
      },
      {
        id: 4,
        question: "Which loop executes at least once?",
        options: ["while", "for", "do-while", "nested loop"],
        answer: 2
      },
      {
        id: 5,
        question: "Which operator returns the remainder?",
        options: ["/", "%", "*", "+"],
        answer: 1
      },
      {
        id: 6,
        question: "Which function reads formatted input?",
        options: ["scanf()", "printf()", "puts()", "gets()"],
        answer: 0
      },
      {
        id: 7,
        question: "Which storage class preserves values between function calls?",
        options: ["auto", "register", "static", "extern"],
        answer: 2
      },
      {
        id: 8,
        question: "Which function allocates dynamic memory?",
        options: ["malloc()", "fopen()", "fclose()", "free()"],
        answer: 0
      },
      {
        id: 9,
        question: "Which function releases allocated memory?",
        options: ["delete()", "free()", "remove()", "fclose()"],
        answer: 1
      },
      {
        id: 10,
        question: "Which keyword defines a structure?",
        options: ["class", "struct", "union", "typedef"],
        answer: 1
      },
      {
        id: 11,
        question: "Which keyword defines a union?",
        options: ["struct", "union", "class", "typedef"],
        answer: 1
      },
      {
        id: 12,
        question: "A pointer stores",
        options: ["Integer", "Character", "Memory Address", "Float"],
        answer: 2
      },
      {
        id: 13,
        question: "Which function opens a file?",
        options: ["fopen()", "fclose()", "fread()", "fwrite()"],
        answer: 0
      },
      {
        id: 14,
        question: "Which file mode appends data?",
        options: ["r", "w", "a", "rb"],
        answer: 2
      },
      {
        id: 15,
        question: "Which function writes binary data?",
        options: ["fwrite()", "fprintf()", "fscanf()", "fgets()"],
        answer: 0
      },
      {
        id: 16,
        question: "Which directive includes header files?",
        options: ["#define", "#ifdef", "#include", "#undef"],
        answer: 2
      },
      {
        id: 17,
        question: "Which macro defines symbolic constants?",
        options: ["#define", "#include", "#endif", "#error"],
        answer: 0
      },
      {
        id: 18,
        question: "argc represents",
        options: ["Array Count", "Argument Count", "Character Count", "Compiler Count"],
        answer: 1
      },
      {
        id: 19,
        question: "Which array stores command-line arguments?",
        options: ["argc", "argv", "args", "params"],
        answer: 1
      },
      {
        id: 20,
        question: "Which function converts a string into an integer?",
        options: ["atoi()", "atof()", "strlen()", "strcpy()"],
        answer: 0
      }
    ],
    fillInBlanks: [
      { id: 21, question: "_____ is the entry point of a C program.", answer: "main" },
      { id: 22, question: "The address operator is _____.", answer: "&" },
      { id: 23, question: "The string terminator is _____.", answer: "\\0" },
      { id: 24, question: "_____ is used to close a file.", answer: "fclose" },
      { id: 25, question: "Memory allocated using malloc() is stored in the _____.", answer: "heap" },
      { id: 26, question: "_____ storage class has program lifetime.", answer: "static" },
      { id: 27, question: "_____ directive removes a macro definition.", answer: "#undef" },
      { id: 28, question: "_____ reads one character from a file.", answer: "fgetc" },
      { id: 29, question: "_____ converts a string into an integer.", answer: "atoi" },
      { id: 30, question: "Arrays start with index _____.", answer: "0" }
    ],
    trueFalse: [
      { id: 31, question: "Every C program starts from main().", answer: true },
      { id: 32, question: "A pointer stores a memory address.", answer: true },
      { id: 33, question: "Strings end with '\\0'.", answer: true },
      { id: 34, question: "malloc() initializes memory to zero.", answer: false },
      { id: 35, question: "calloc() initializes memory to zero.", answer: true },
      { id: 36, question: "free() releases memory.", answer: true },
      { id: 37, question: "static variables retain values.", answer: true },
      { id: 38, question: "fopen() opens a file.", answer: true },
      { id: 39, question: "argv is an array of strings.", answer: true },
      { id: 40, question: "#include is a preprocessor directive.", answer: true }
    ]
  },
  programming: {
    totalMarks: 40,
    questions: [
      {
        id: 'prog1',
        title: 'Problem 1: Read and print student details using a structure',
        difficulty: 'Medium',
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
          { input: "102\nLikitha", expectedOutput: "Roll Number: 102\nName: Likitha" }
        ],
        starterCode: '#include <stdio.h>\n\nstruct Student {\n    // Define members here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
      },
      {
        id: 'prog2',
        title: 'Problem 2: Reverse a string using a function',
        difficulty: 'Medium',
        description: "Read a string and reverse it using a user-defined function.",
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
          { input: "CPL", expectedOutput: "LPC" }
        ],
        starterCode: '#include <stdio.h>\n#include <string.h>\n\n// Write your function here\n\nint main() {\n    // Write your main code here\n    return 0;\n}'
      },
      {
        id: 'prog3',
        title: 'Problem 3: Store and read student records from a file',
        difficulty: 'Medium',
        description: "Write a program that takes a student roll number and name, writes it to 'student.txt', and then reads it back to display.",
        inputFormat: "Roll number and name.",
        outputFormat: "Print the student record.",
        sampleInput: "101 Rahul",
        sampleOutput: "101 Rahul",
        testCases: [
          { input: "102 Likitha", expectedOutput: "102 Likitha" },
          { input: "103 Anjali", expectedOutput: "103 Anjali" }
        ],
        hiddenTestCases: [
          { input: "101 Rahul", expectedOutput: "101 Rahul" },
          { input: "102 Likitha", expectedOutput: "102 Likitha" }
        ],
        starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
      },
      {
        id: 'prog4',
        title: 'Problem 4: Allocate memory for N integers using malloc(), read values, and display them.',
        difficulty: 'Hard',
        description: "Read N, allocate memory for N integers using malloc, read N integers, and print them in order.",
        inputFormat: "An integer N, followed by N integers.",
        outputFormat: "Print the N integers.",
        sampleInput: "5\n1 2 3 4 5",
        sampleOutput: "1 2 3 4 5",
        testCases: [
          { input: "3\n10 20 30", expectedOutput: "10 20 30" },
          { input: "4\n9 8 7 6", expectedOutput: "9 8 7 6" }
        ],
        hiddenTestCases: [
          { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
          { input: "3\n10 20 30", expectedOutput: "10 20 30" }
        ],
        starterCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
      }
    ]
  },
  project: {
    totalMarks: 20,
    title: 'Student Record Management System',
    problemStatement: 'Develop a Student Record Management System using Structures, Functions, File Handling, and Dynamic Memory Allocation.',
    features: [
      'Add Student',
      'Display Students',
      'Search Student',
      'Update Student',
      'Delete Student'
    ]
  }
};
