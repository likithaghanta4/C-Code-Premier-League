export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand the basic structure of a C program.', 'Identify the different sections of a C program.', 'Explain the purpose of each section.', 'Write a simple C program using the correct structure.', 'Understand the execution flow of a C program.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Every C program follows a specific structure. Understanding this structure is the first step toward writing correct and organized programs.\n\nA C program is divided into several sections, and each section has a specific purpose. Some sections are mandatory, while others are optional.\n\nOnce you understand the structure, reading and writing C programs becomes much easier.' },
    
    { type: 'h2', content: 'Why Do We Need a Program Structure?' },
    { type: 'text', content: 'A proper program structure helps to:' },
    { type: 'list', items: ['Improve readability.', 'Organize code logically.', 'Make debugging easier.', 'Improve maintenance.', 'Follow programming standards.'] },

    { type: 'h2', content: 'Structure of a C Program' },
    { type: 'text', content: 'A basic C program consists of the following sections:' },
    { type: 'list', items: ['1. Documentation Section', '2. Link Section', '3. Definition Section', '4. Global Declaration Section', '5. main() Function', '6. User-defined Functions'] },
    
    { type: 'h2', content: 'Program Structure Diagram' },
    { type: 'flow', items: ['Documentation Section', 'Header Files', 'Macro Definitions', 'Global Variables', 'main()\n{\n    Local Variables\n\n    Executable Statements\n\n    return 0;\n}', 'User Defined Functions'] },

    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'Documentation Section\n\n#include<stdio.h>\n\n#define MAX 100\n\nGlobal Declaration\n\nint main()\n{\n    // Local Variables\n\n    // Executable Statements\n\n    return 0;\n}\n\n// User Defined Functions' },

    { type: 'h2', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main()\n{\n    printf("Welcome to C Programming");\n\n    return 0;\n}' },

    { type: 'h2', content: 'Output' },
    { type: 'code', language: 'text', code: 'Welcome to C Programming' },
    
    { type: 'h2', content: 'Explanation' },
    { type: 'note', title: 'Documentation Section', content: 'Contains comments describing the program.\n\nExample:\n// Program to print a message\n\nPurpose:\nHelps programmers understand the purpose of the program.' },
    { type: 'note', title: 'Link Section', content: 'Example:\n#include<stdio.h>\n\nPurpose:\nProvides library functions like printf() and scanf().' },
    { type: 'note', title: 'Definition Section', content: 'Example:\n#define PI 3.14\n\nPurpose:\nDefines constants using macros.' },
    { type: 'note', title: 'Global Declaration Section', content: 'Example:\nint count;\n\nPurpose:\nVariables declared here can be accessed throughout the program.' },
    { type: 'note', title: 'main() Function', content: 'Example:\nint main()\n{\nprintf("Hello");\n\nreturn 0;\n\n}\n\nPurpose:\nExecution of every C program starts from the main() function.' },
    { type: 'note', title: 'Local Variables', content: 'Example:\nint age;\n\nPurpose:\nVariables declared inside main() are accessible only within that function.' },
    { type: 'note', title: 'Executable Statements', content: 'Example:\nprintf("Hello");\n\nPurpose:\nThese are the instructions executed by the computer.' },
    { type: 'note', title: 'return 0;', content: 'Purpose:\nEnds the program successfully and returns control to the operating system.' },

    { type: 'h2', content: 'Execution Flow' },
    { type: 'flow', items: ['Program Starts', 'Documentation', 'Header Files', 'main()', 'Statements Execute', 'return 0', 'Program Ends'] },

    { type: 'h2', content: 'Real-Life Analogy' },
    { type: 'text', content: 'Think of a C program like building a house.\n\nDocumentation → Blueprint\n\nHeader Files → Construction Tools\n\nGlobal Variables → Shared Materials\n\nmain() → Main Entrance\n\nFunctions → Individual Rooms\n\nJust as every house follows a proper design, every C program follows a proper structure.' },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Every C program starts execution from main().', 'Header files provide library functions.', 'Comments improve readability.', 'return 0; indicates successful program termination.', 'User-defined functions improve modular programming.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting to include header files.\n\n• Omitting the main() function.\n\n• Missing braces { }\n\n• Forgetting semicolons.\n\n• Writing statements outside functions.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful comments.\n\n• Include only required header files.\n\n• Keep the main() function simple.\n\n• Divide large programs into functions.\n\n• Maintain proper indentation.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is the structure of a C program?', 'Which function is the starting point of every C program?', 'What is the purpose of #include<stdio.h>?', 'What is the role of return 0;?', 'What is the difference between global variables and local variables?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Question 1\nWhich function is the entry point of every C program?', options: ['A. start()', 'B. begin()', 'C. main()', 'D. init()'], answer: 'C. main()' },
    { type: 'quiz', question: 'Question 2\nWhich header file provides printf()?', options: ['A. math.h', 'B. string.h', 'C. stdio.h', 'D. conio.h'], answer: 'C. stdio.h' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students have learned:\n\n• The structure of a C program.\n\n• Purpose of each section.\n\n• Importance of the main() function.\n\n• Role of header files.\n\n• Purpose of return 0.\n\n• Program execution flow.' }
  ]
};
