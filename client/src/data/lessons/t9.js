export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand operators and operands.', 'Learn all major operators in C.', 'Use operators correctly in programs.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Operators are special symbols that perform operations on variables and values.' },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'int sum = a + b;' },
    { type: 'text', content: 'Here + is the operator and a, b are operands.' },
    
    { type: 'h2', content: 'Types of Operators in C' },
    { type: 'list', items: ['Arithmetic Operators', 'Relational Operators', 'Logical Operators', 'Assignment Operators', 'Increment & Decrement Operators', 'Bitwise Operators', 'Conditional (Ternary) Operator', 'sizeof Operator', 'Comma Operator', 'Pointer Operators', 'Member Access Operators'] },

    { type: 'h2', content: '1. Arithmetic Operators' },
    { type: 'table', headers: ['Operator', 'Meaning', 'Example'], rows: [['+', 'Addition', 'a+b'], ['-', 'Subtraction', 'a-b'], ['*', 'Multiplication', 'a*b'], ['/', 'Division', 'a/b'], ['%', 'Modulus', 'a%b']] },

    { type: 'h2', content: '2. Relational Operators' },
    { type: 'table', headers: ['Operator', 'Meaning'], rows: [['==', 'Equal to'], ['!=', 'Not Equal to'], ['>', 'Greater than'], ['<', 'Less than'], ['>=', 'Greater than or Equal'], ['<=', 'Less than or Equal']] },

    { type: 'h2', content: '3. Logical Operators' },
    { type: 'table', headers: ['Operator', 'Meaning'], rows: [['&&', 'Logical AND'], ['||', 'Logical OR'], ['!', 'Logical NOT']] },

    { type: 'h2', content: '4. Assignment Operators' },
    { type: 'table', headers: ['Operator', 'Example'], rows: [['=', 'a=5'], ['+=', 'a+=2'], ['-=', 'a-=2'], ['*=', 'a*=2'], ['/=', 'a/=2'], ['%=', 'a%=2']] },

    { type: 'h2', content: '5. Increment & Decrement' },
    { type: 'table', headers: ['Operator', 'Meaning'], rows: [['++', 'Increment by 1'], ['--', 'Decrement by 1']] },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'i++;\n--j;' },

    { type: 'h2', content: '6. Bitwise Operators' },
    { type: 'table', headers: ['Operator', 'Meaning'], rows: [['&', 'Bitwise AND'], ['|', 'Bitwise OR'], ['^', 'Bitwise XOR'], ['~', "One's Complement"], ['<<', 'Left Shift'], ['>>', 'Right Shift']] },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'int a=5,b=3;\nprintf("%d",a&b);' },

    { type: 'h2', content: '7. Conditional (Ternary) Operator' },
    { type: 'text', content: 'Syntax:' },
    { type: 'code', language: 'c', code: 'condition ? expression1 : expression2;' },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'max = (a>b) ? a : b;' },

    { type: 'h2', content: '8. sizeof Operator' },
    { type: 'text', content: 'Returns the size of a data type or variable.' },
    { type: 'code', language: 'c', code: 'printf("%zu", sizeof(int));' },

    { type: 'h2', content: '9. Comma Operator' },
    { type: 'text', content: 'Allows multiple expressions.' },
    { type: 'code', language: 'c', code: 'int a,b;\na=10,b=20;' },

    { type: 'h2', content: '10. Pointer Operators' },
    { type: 'table', headers: ['Operator', 'Meaning'], rows: [['&', 'Address of variable'], ['*', 'Value stored at an address (Dereference)']] },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'int x=10;\nint *p=&x;\nprintf("%d",*p);' },

    { type: 'h2', content: '11. Member Access Operators' },
    { type: 'table', headers: ['Operator', 'Purpose'], rows: [['.', 'Access structure member'], ['->', 'Access structure member using pointer']] },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'student.age;\nptr->age;' },

    { type: 'h2', content: 'Complete Example Program' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main()\n{\n    int a=10,b=5;\n\n    printf("Addition=%d\\n",a+b);\n    printf("Greater=%d\\n",a>b);\n    printf("AND=%d\\n",(a>b)&&(b>0));\n    printf("Bitwise AND=%d\\n",a&b);\n    printf("Size=%zu\\n",sizeof(int));\n\n    return 0;\n}' },

    { type: 'h2', content: 'Output' },
    { type: 'code', language: 'text', code: 'Addition=15\nGreater=1\nAND=1\nBitwise AND=0\nSize=4' },

    { type: 'h2', content: 'Operator Precedence' },
    { type: 'text', content: 'When multiple operators appear in one expression, C follows operator precedence and associativity rules. Parentheses can be used to improve readability and control evaluation order.' },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Operators perform operations on operands.', 'Use the correct operator for the required task.', 'Understand precedence before writing complex expressions.', 'Parentheses improve readability.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Using = instead of ==.\n• Forgetting precedence.\n• Using % with floating-point numbers.\n• Confusing & (address) with && (logical AND).' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is an operator?', 'Name all operator categories in C.', 'Difference between = and ==?', 'Difference between & and &&?', 'What is the ternary operator?', 'What does sizeof return?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Which operator returns the size of a data type?', options: ['A. length', 'B. size', 'C. sizeof', 'D. getsize'], answer: 'C. sizeof' },
    { type: 'quiz', question: 'Which operator is used for bitwise XOR?', options: ['A. ^', 'B. ~', 'C. &', 'D. |'], answer: 'A. ^' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned all major operators in C including arithmetic, relational, logical, assignment, increment/decrement, bitwise, conditional, sizeof, comma, pointer, and member access operators.' }
  ]
};
