export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand input and output operations.', 'Use printf() to display output.', 'Use scanf() to accept user input.', 'Use format specifiers correctly.', 'Write simple interactive C programs.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Input and Output (I/O) are fundamental operations in every programming language. In C, input allows users to provide data, while output displays information on the screen.' },
    
    { type: 'h2', content: 'Why Do We Need Input and Output?' },
    { type: 'list', items: ['Communicate with users.', 'Accept user data.', 'Display program results.', 'Make programs interactive.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'Input: Data entered by the user.\n\nOutput: Information displayed by the program.' },
    
    { type: 'h2', content: 'printf() Function' },
    { type: 'text', content: 'The printf() function is used to display output on the screen.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'printf("message");' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'printf("Welcome to C Programming");' },

    { type: 'h2', content: 'scanf() Function' },
    { type: 'text', content: 'The scanf() function is used to read input from the keyboard.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'scanf("format_specifier", &variable);' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'scanf("%d", &age);' },

    { type: 'h2', content: 'Common Format Specifiers' },
    { type: 'table', headers: ['Data Type', 'Specifier'], rows: [['int', '%d'], ['float', '%f'], ['char', '%c'], ['double', '%lf'], ['string', '%s']] },

    { type: 'h2', content: 'Example Program' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    int age;\n\n    printf("Enter your age: ");\n    scanf("%d", &age);\n\n    printf("Your age is %d", age);\n\n    return 0;\n}' },

    { type: 'h2', content: 'Sample Output' },
    { type: 'code', language: 'text', code: 'Enter your age: 20\nYour age is 20' },
    
    { type: 'h2', content: 'Explanation' },
    { type: 'list', items: ['printf() displays a message.', 'scanf() reads the value entered by the user.', '&age passes the memory address of the variable.', 'The final printf() displays the entered value.'] },

    { type: 'h2', content: "Why is '&' Used in scanf()?" },
    { type: 'text', content: "The & (address-of operator) gives the memory address of a variable so that scanf() can store the user's input in that location." },
    { type: 'code', language: 'c', code: 'scanf("%d", &age);' },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['printf() is used for output.', 'scanf() is used for input.', 'Use the correct format specifier.', 'Use & with variables in scanf() (except character arrays/strings).'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting & in scanf().\n• Using the wrong format specifier.\n• Missing quotation marks in printf().\n• Using %d for float values.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Display meaningful prompts before taking input.\n• Match variables with correct format specifiers.\n• Validate user input where possible.\n• Keep input and output messages clear.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is input and output?', 'What is the difference between printf() and scanf()?', 'Why is & used in scanf()?', 'What is a format specifier?', 'Which format specifier is used for double?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Which function is used to display output?', options: ['A. scanf()', 'B. printf()', 'C. gets()', 'D. puts()'], answer: 'B. printf()' },
    { type: 'quiz', question: 'Which operator is generally used with variables in scanf()?', options: ['A. *', 'B. &', 'C. %', 'D. #'], answer: 'B. &' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Input and Output concepts.\n• printf() function.\n• scanf() function.\n• Format specifiers.\n• Address operator (&).\n• Writing interactive programs.' }
  ]
};
