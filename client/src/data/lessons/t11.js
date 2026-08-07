export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand why loops are used.', 'Learn while, do-while, and for loops.', 'Understand nested loops.', 'Learn break and continue.', 'Compare different loop types.', 'Avoid infinite loops.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Loops execute a block of code repeatedly until a condition becomes false. They reduce code duplication and make programs efficient.' },
    
    { type: 'h2', content: 'Why Do We Need Loops?' },
    { type: 'list', items: ['Repeat tasks automatically.', 'Process arrays and strings.', 'Generate patterns.', 'Perform calculations.', 'Reduce repetitive code.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A loop is a control structure that repeatedly executes a block of statements while a specified condition is true.' },
    
    { type: 'h2', content: 'Types of Loops' },
    { type: 'list', items: ['while Loop', 'do-while Loop', 'for Loop', 'Nested Loops'] },

    { type: 'h2', content: '1. while Loop' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'while(condition)\n{\n    // statements\n}' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'int i=1;\nwhile(i<=5)\n{\n    printf("%d ",i);\n    i++;\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '1 2 3 4 5' },

    { type: 'h2', content: '2. do-while Loop' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'do\n{\n    // statements\n}while(condition);' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'int i=1;\ndo\n{\n    printf("%d ",i);\n    i++;\n}while(i<=5);' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '1 2 3 4 5' },
    { type: 'note', title: 'Note', content: 'A do-while loop executes at least once even if the condition is false.' },

    { type: 'h2', content: '3. for Loop' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'for(initialization; condition; increment/decrement)\n{\n    // statements\n}' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=5;i++)\n{\n    printf("%d ",i);\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '1 2 3 4 5' },

    { type: 'h2', content: '4. Nested Loops' },
    { type: 'text', content: 'A loop inside another loop.' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=3;i++)\n{\n    for(int j=1;j<=3;j++)\n    {\n        printf("* ");\n    }\n    printf("\\n");\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '* * *\n* * *\n* * *' },

    { type: 'h2', content: 'break Statement' },
    { type: 'text', content: 'Terminates the loop immediately.' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=10;i++)\n{\n    if(i==5)\n        break;\n    printf("%d ",i);\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '1 2 3 4' },

    { type: 'h2', content: 'continue Statement' },
    { type: 'text', content: 'Skips the current iteration.' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=5;i++)\n{\n    if(i==3)\n        continue;\n    printf("%d ",i);\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '1 2 4 5' },

    { type: 'h2', content: 'Difference Between Loops' },
    { type: 'table', headers: ['Feature', 'while', 'do-while', 'for'], rows: [['Condition Check', 'Before', 'After', 'Before'], ['Executes At Least Once', 'No', 'Yes', 'No'], ['Best Use', 'Unknown iterations', 'Menu/input', 'Known iterations']] },

    { type: 'h2', content: 'Flow of a for Loop' },
    { type: 'flow', items: ['Initialization', 'Condition', 'True → Statements', 'Increment', 'Condition Again', 'False → Exit Loop'] },

    { type: 'h2', content: 'Common Infinite Loop Example' },
    { type: 'code', language: 'c', code: 'int i=1;\nwhile(i<=5)\n{\n    printf("%d",i);\n}' },
    { type: 'note', title: 'Reason', content: 'i is never incremented.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful loop variables.\n• Avoid infinite loops.\n• Use for when iteration count is known.\n• Keep nested loops simple.\n• Use break and continue only when necessary.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Missing increment/decrement.\n• Incorrect loop condition.\n• Semicolon after loop condition.\n• Off-by-one errors.\n• Infinite loops.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a loop?', 'Difference between while and do-while?', 'Difference between for and while?', 'What is a nested loop?', 'What is an infinite loop?', 'Difference between break and continue?', 'When should you use a for loop?', 'Can a for loop be written without initialization?', 'Can all three expressions in a for loop be omitted?', 'Which loop always executes at least once?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=5;i++);\nprintf("Hello");' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Prints "Hello" 5 times', 'B. Prints "Hello" once', 'C. Compilation Error', 'D. Infinite Loop'], answer: 'B. Prints "Hello" once' },
    { type: 'note', title: 'Explanation', content: 'Prints "Hello" once because the semicolon ends the loop immediately.' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'int i=5;\nwhile(i>0)\n{\n    printf("%d ",i);\n    i--;\n}' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 1 2 3 4 5', 'B. 5 4 3 2 1', 'C. 5 4 3 2', 'D. Error'], answer: 'B. 5 4 3 2 1' },

    { type: 'text', content: 'Question 3: Output?' },
    { type: 'code', language: 'c', code: 'int i=1;\ndo{\n    printf("%d ",i);\n    i++;\n}while(i<1);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. No Output', 'B. 1 2', 'C. 1', 'D. Infinite Loop'], answer: 'C. 1' },

    { type: 'text', content: 'Question 4: Output?' },
    { type: 'code', language: 'c', code: 'for(int i=1;i<=3;i++)\n{\n    for(int j=1;j<=2;j++)\n        printf("%d%d ",i,j);\n}' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 11 12 21 22 31 32', 'B. 11 22 33', 'C. 12 21', 'D. Error'], answer: 'A. 11 12 21 22 31 32' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'What is the difference between break and continue?', options: ['A. break skips the iteration; continue exits the loop', 'B. break exits the loop; continue skips the current iteration', 'C. They are the same', 'D. break is only for switch'], answer: 'B. break exits the loop; continue skips the current iteration' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• while loop\n• do-while loop\n• for loop\n• nested loops\n• break\n• continue\n• loop comparison\n• infinite loops\n• loop flow' }
  ]
};
