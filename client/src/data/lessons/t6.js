export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand what a data type is.', 'Explain why data types are important.', 'Identify different categories of data types in C.', 'Use basic data types correctly.', 'Choose the appropriate data type.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'In C programming, every variable must have a data type. A data type tells the compiler what kind of data a variable can store and how much memory should be allocated.' },
    
    { type: 'h2', content: 'Why Do We Need Data Types?' },
    { type: 'list', items: ['Allocate memory efficiently.', 'Store different kinds of values.', 'Improve performance.', 'Prevent type-related errors.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A data type specifies the type of value a variable can hold and the memory required to store it.' },
    
    { type: 'h2', content: 'Categories of Data Types' },
    { type: 'list', items: ['Basic (Primary)', 'Derived', 'User-defined', 'Void'] },

    { type: 'h2', content: 'Basic Data Types' },
    { type: 'table', headers: ['Data Type', 'Description', 'Example'], rows: [['int', 'Whole numbers', '10'], ['float', 'Decimal numbers', '10.5'], ['char', 'Single character', "'A'"], ['double', 'High precision decimal', '3.14159']] },

    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'int age;\nfloat salary;\nchar grade;\ndouble pi;' },

    { type: 'h2', content: 'Example Program' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main(){\n int age=20;\n float marks=95.5;\n char grade=\'A\';\n double pi=3.14159265;\n printf("Age=%d\\n",age);\n printf("Marks=%.1f\\n",marks);\n printf("Grade=%c\\n",grade);\n printf("PI=%lf",pi);\n return 0;\n}' },

    { type: 'h2', content: 'Output' },
    { type: 'code', language: 'text', code: 'Age=20\nMarks=95.5\nGrade=A\nPI=3.141593' },
    
    { type: 'h2', content: 'Explanation' },
    { type: 'list', items: ['int stores whole numbers.', 'float stores decimal values.', 'char stores a single character.', 'double stores high precision decimal values.'] },

    { type: 'h2', content: 'Format Specifiers' },
    { type: 'table', headers: ['Data Type', 'Specifier'], rows: [['int', '%d'], ['float', '%f'], ['char', '%c'], ['double', '%lf']] },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Every variable requires a data type.', 'Data types determine memory usage.', 'Choose suitable data types.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Wrong format specifier.\n• Using int for decimal values.\n• Forgetting single quotes for char.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful names.\n• Match format specifiers correctly.\n• Use double for higher precision.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a data type?', 'Difference between int and float?', 'Difference between float and double?', 'Why is char used?', 'What are format specifiers?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Which data type stores decimal values?', options: ['A. int', 'B. float', 'C. char', 'D. void'], answer: 'B. float' },
    { type: 'quiz', question: 'Which specifier is used for char?', options: ['A. %d', 'B. %f', 'C. %c', 'D. %s'], answer: 'C. %c' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned the meaning, categories, syntax, examples and format specifiers of C data types.' }
  ]
};
