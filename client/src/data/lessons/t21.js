export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand storage classes.', 'Learn auto, register, static, and extern.', 'Know scope, lifetime, and default values.', 'Choose the appropriate storage class.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Storage classes define the scope, lifetime, visibility, and storage location of variables in a C program.' },
    
    { type: 'h2', content: 'Why Storage Classes?' },
    { type: 'list', items: ['Control variable lifetime.', 'Share variables across files.', 'Preserve values between function calls.', 'Improve program organization.'] },

    { type: 'h2', content: 'Types of Storage Classes' },
    { type: 'list', items: ['auto', 'register', 'static', 'extern'] },

    { type: 'h2', content: 'Comparison Table' },
    { type: 'table', headers: ['Storage Class', 'Scope', 'Lifetime', 'Default Value'], rows: [['auto', 'Local', 'Function execution', 'Garbage'], ['register', 'Local', 'Function execution', 'Garbage'], ['static', 'Local/Global', 'Entire program', '0'], ['extern', 'Global', 'Entire program', '0']] },

    { type: 'h2', content: 'auto' },
    { type: 'text', content: 'The default storage class for local variables.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'auto int x;' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    auto int x=10;\n    printf("%d",x);\n    return 0;\n}' },

    { type: 'h2', content: 'register' },
    { type: 'text', content: 'Suggests storing a variable in a CPU register for faster access.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'register int i;' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    register int i;\n    for(i=1;i<=5;i++)\n        printf("%d ",i);\n    return 0;\n}' },

    { type: 'h2', content: 'static' },
    { type: 'text', content: 'A static variable retains its value between function calls.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'static int count;' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nvoid display()\n{\n    static int count=0;\n    count++;\n    printf("%d\\n",count);\n}\n\nint main()\n{\n    display();\n    display();\n    display();\n    return 0;\n}' },

    { type: 'h2', content: 'extern' },
    { type: 'text', content: 'Used to access a global variable declared in another file.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'extern int x;' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint x=100;\n\nint main()\n{\n    extern int x;\n    printf("%d",x);\n    return 0;\n}' },

    { type: 'h2', content: 'Scope & Lifetime' },
    { type: 'h3', content: 'Scope' },
    { type: 'list', items: ['Local Scope: Variable is accessible only within the block it is defined.', 'Global Scope: Variable is accessible throughout the program.'] },
    { type: 'h3', content: 'Lifetime' },
    { type: 'list', items: ['Automatic Lifetime: Exists only during the execution of a specific block/function.', 'Entire Program Lifetime: Exists for the entire duration of the program.'] },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Function call counters', 'Shared configuration', 'Large multi-file projects', 'Performance optimization'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use auto only when needed (it is the default).\n• Use register for frequently accessed loop variables.\n• Use static to preserve values between function calls.\n• Use extern for shared global variables.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Confusing scope with lifetime.\n• Overusing global variables.\n• Forgetting static retains its value.\n• Incorrect use of extern across files.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a storage class?', 'Name the four storage classes.', 'Difference between auto and static?', 'Difference between static and extern?', 'What is the default storage class?', 'What is the purpose of register?', 'Can we take the address of a register variable?', 'What is the lifetime of a static variable?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'What is the default storage class for local variables?', options: ['A. static', 'B. extern', 'C. auto', 'D. register'], answer: 'C. auto' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'Which storage class retains its value between function calls?', options: ['A. register', 'B. auto', 'C. extern', 'D. static'], answer: 'D. static' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which storage class is used to share variables across multiple files?', options: ['A. extern', 'B. static', 'C. auto', 'D. register'], answer: 'A. extern' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which storage class suggests storing a variable in CPU registers?', options: ['A. auto', 'B. static', 'C. register', 'D. extern'], answer: 'C. register' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'What is the default value of an uninitialized static variable?', options: ['A. Garbage value', 'B. -1', 'C. 1', 'D. 0'], answer: 'D. 0' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Storage classes overview\n• Scope vs Lifetime\n• auto\n• register\n• static\n• extern\n• Best practices' }
  ]
};
