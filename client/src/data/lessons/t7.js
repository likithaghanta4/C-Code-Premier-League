export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand what a constant is.', 'Explain the importance of constants.', 'Differentiate between variables and constants.', 'Declare constants using the const keyword.', 'Define constants using the #define preprocessor directive.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'A constant is a fixed value that does not change during the execution of a program. Unlike variables, constants remain the same throughout the program.' },
    
    { type: 'h2', content: 'Why Do We Need Constants?' },
    { type: 'list', items: ['Prevent accidental modification of fixed values.', 'Improve code readability.', 'Make programs easier to maintain.', 'Avoid repeating the same value multiple times.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A constant is a value that cannot be changed once it is defined.' },
    
    { type: 'h2', content: 'Types of Constants' },
    { type: 'list', items: ['Integer Constants', 'Floating-Point Constants', 'Character Constants', 'String Constants'] },
    { type: 'note', title: 'Examples', content: "100\n25.5\n'A'\n\"Hello\"" },

    { type: 'h2', content: 'Declaring Constants using const' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'const data_type variable_name = value;' },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'const int MAX = 100;' },

    { type: 'h2', content: 'Defining Constants using #define' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: '#define CONSTANT_NAME value' },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: '#define PI 3.14159' },

    { type: 'h2', content: 'Example Program' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\n#define PI 3.14159\n\nint main()\n{\n    const int MAX = 100;\n\n    printf("Maximum = %d\\n", MAX);\n    printf("PI = %.5f", PI);\n\n    return 0;\n}' },

    { type: 'h2', content: 'Output' },
    { type: 'code', language: 'text', code: 'Maximum = 100\nPI = 3.14159' },
    
    { type: 'h2', content: 'Explanation' },
    { type: 'list', items: ['const int MAX = 100; creates a constant integer.', '#define PI 3.14159 defines a symbolic constant before compilation.', 'Constants cannot be modified after they are defined.'] },

    { type: 'h2', content: 'Difference Between Variable and Constant' },
    { type: 'table', headers: ['Variable', 'Constant'], rows: [['Value can change', 'Value cannot change'], ['Declared using data type', 'Declared using const or #define'], ['Used for changing data', 'Used for fixed values']] },

    { type: 'h2', content: 'Real-Life Examples' },
    { type: 'list', items: ['Number of days in a week = 7', 'Value of PI = 3.14159', 'Speed of light (fixed value)'] },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Constants store fixed values.', 'Constants improve readability.', 'const creates typed constants.', '#define creates symbolic constants.', 'Constants should not be modified.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Trying to change a constant value.\n• Forgetting to initialize a const variable.\n• Using incorrect syntax with #define.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use const for typed constants.\n• Use meaningful constant names.\n• Write macro names in uppercase.\n• Use constants instead of hard-coded values.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a constant?', 'Difference between variable and constant?', 'Difference between const and #define?', 'Why are constants used?', 'Can a constant value be modified?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Which keyword is used to declare a constant?', options: ['A. final', 'B. static', 'C. const', 'D. fixed'], answer: 'C. const' },
    { type: 'quiz', question: 'Which directive is used to define symbolic constants?', options: ['A. #include', 'B. #define', 'C. #ifdef', 'D. #endif'], answer: 'B. #define' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Meaning of constants.\n• Types of constants.\n• const keyword.\n• #define directive.\n• Difference between variables and constants.\n• Benefits of using constants.' }
  ]
};
