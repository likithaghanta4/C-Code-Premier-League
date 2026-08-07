export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand command line arguments.', 'Learn argc and argv.', 'Pass values from the command line.', 'Build programs using user-supplied arguments.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Command line arguments allow values to be passed to a C program when it is executed, without using scanf().' },
    
    { type: 'h2', content: 'Why Use Command Line Arguments?' },
    { type: 'list', items: ['Automate program execution.', 'Pass filenames and options.', 'Useful for scripts and utilities.', 'Avoid interactive input.'] },

    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'int main(int argc, char *argv[])\n{\n    // code\n}' },

    { type: 'h2', content: 'Parameters' },
    { type: 'h3', content: 'argc (Argument Count)' },
    { type: 'list', items: ['Stores the total number of command-line arguments.', 'Includes the program name.'] },
    { type: 'h3', content: 'argv (Argument Vector)' },
    { type: 'list', items: ['Array of strings.', 'argv[0] is the program name.'] },

    { type: 'h2', content: 'Example 1 — Display Number of Arguments' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main(int argc,char *argv[])\n{\n    printf("Total Arguments = %d",argc);\n    return 0;\n}' },
    { type: 'text', content: 'Run:' },
    { type: 'code', language: 'bash', code: 'program.exe A B C' },
    { type: 'text', content: 'Output:' },
    { type: 'code', language: 'text', code: 'Total Arguments = 4' },

    { type: 'h2', content: 'Example 2 — Display All Arguments' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main(int argc,char *argv[])\n{\n    int i;\n    for(i=0;i<argc;i++)\n        printf("%s\\n",argv[i]);\n    return 0;\n}' },

    { type: 'h2', content: 'Example 3 — Add Two Numbers' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main(int argc,char *argv[])\n{\n    int a=atoi(argv[1]);\n    int b=atoi(argv[2]);\n    printf("Sum = %d",a+b);\n    return 0;\n}' },
    { type: 'text', content: 'Run:' },
    { type: 'code', language: 'bash', code: 'program.exe 10 20' },
    { type: 'text', content: 'Output:' },
    { type: 'code', language: 'text', code: 'Sum = 30' },

    { type: 'h2', content: 'Useful Conversion Functions' },
    { type: 'list', items: ['atoi() — String to Integer', 'atof() — String to Float', 'atol() — String to Long'] },

    { type: 'h2', content: 'Advantages' },
    { type: 'list', items: ['Fast input', 'Automation', 'File name passing', 'Batch processing'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Check argc before accessing argv to prevent crashes.\n• Validate input before using it.\n• Use conversion functions carefully (check for valid numbers).' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Accessing argv[1] when no argument exists (causes segmentation fault).\n• Forgetting argv[0] is the program name.\n• Not validating numeric input.' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['File utilities', 'Compilers', 'Backup tools', 'System commands'] },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What are command line arguments?', 'What is argc?', 'What is argv?', 'Why is argv[0] special?', 'What does atoi() do?', 'Difference between scanf() and command line arguments?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'What does argc stand for?', options: ['A. Argument Character', 'B. Array Count', 'C. Argument Count', 'D. Argument Constant'], answer: 'C. Argument Count' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'What does argv store?', options: ['A. Array of integers', 'B. Array of strings', 'C. Array of characters', 'D. Array of floats'], answer: 'B. Array of strings' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which header file provides the atoi() function?', options: ['A. <stdio.h>', 'B. <string.h>', 'C. <stdlib.h>', 'D. <math.h>'], answer: 'C. <stdlib.h>' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which element of argv stores the program name?', options: ['A. argv[1]', 'B. argv[0]', 'C. argv[argc]', 'D. argv[-1]'], answer: 'B. argv[0]' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which function converts a string to an integer?', options: ['A. atof()', 'B. itoa()', 'C. atoi()', 'D. atol()'], answer: 'C. atoi()' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• argc (Argument Count)\n• argv (Argument Vector)\n• Passing arguments to main()\n• Conversion functions (atoi, atof)\n• Best practices and pitfalls' }
  ]
};
