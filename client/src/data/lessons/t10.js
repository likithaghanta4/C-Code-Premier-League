export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand decision making in C.', 'Use all conditional statements correctly.', 'Compare if, if-else, else-if ladder, nested if and switch.', 'Select the most suitable conditional statement.', 'Avoid common logical mistakes.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Conditional statements allow a program to make decisions. They execute different blocks of code depending on whether a condition is true or false.' },
    
    { type: 'h2', content: 'Why Conditional Statements?' },
    { type: 'list', items: ['Decision making', 'Validation', 'Menu-driven applications', 'Authentication', 'Grading systems', 'Banking and business logic'] },

    { type: 'h2', content: 'Types of Conditional Statements' },
    { type: 'list', items: ['if', 'if-else', 'Nested if', 'else-if ladder', 'switch statement'] },

    { type: 'h2', content: '1. if Statement' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'if(condition)\n{\n    // statements\n}' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'if(age >= 18)\n{\n    printf("Eligible to Vote");\n}' },

    { type: 'h2', content: '2. if-else Statement' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'if(condition)\n{\n    // true block\n}\nelse\n{\n    // false block\n}' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'if(num%2==0)\n    printf("Even");\nelse\n    printf("Odd");' },

    { type: 'h2', content: '3. else-if Ladder' },
    { type: 'text', content: 'Used when multiple conditions need to be checked.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'if(condition1)\n{\n\n}\nelse if(condition2)\n{\n\n}\nelse if(condition3)\n{\n\n}\nelse\n{\n\n}' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'if(marks>=90)\n    printf("Grade A");\nelse if(marks>=75)\n    printf("Grade B");\nelse if(marks>=50)\n    printf("Grade C");\nelse\n    printf("Fail");' },

    { type: 'h2', content: '4. Nested if' },
    { type: 'text', content: 'An if statement inside another if statement.' },
    { type: 'code', language: 'c', code: 'if(age>=18)\n{\n    if(citizen==1)\n        printf("Eligible");\n}' },
    { type: 'note', title: 'Usage', content: 'Use when one condition depends on another.' },

    { type: 'h2', content: '5. The Switch Statement (Comprehensive Guide)' },
    { type: 'h3', content: 'Introduction to Switch Statement' },
    { type: 'text', content: 'The switch statement is a multi-way branch statement. It provides an easy way to dispatch execution to different parts of code based on the value of a single expression.' },
    { type: 'list', items: ['What is a switch statement?: A control flow statement that tests the value of an expression against multiple cases.', 'Why do we use switch?: To avoid long, complex else-if ladders and improve code readability, especially for menu-driven programs.', 'Difference between if-else and switch: if-else evaluates logical expressions (e.g. >, <) while switch evaluates discrete constant values (e.g. 1, \'A\').'] },

    { type: 'h3', content: 'Syntax' },
    { type: 'text', content: 'A switch statement evaluates an expression and executes the corresponding case block.' },
    { type: 'code', language: 'c', code: 'switch(expression)\n{\ncase constant1:\n    // statements\n    break;\n\ncase constant2:\n    // statements\n    break;\n\ndefault:\n    // default statements\n}' },

    { type: 'h3', content: 'Flow of Execution' },
    { type: 'list', items: ['How control enters: The expression inside switch() is evaluated once.', 'Matching: The result is compared against each case label sequentially.', 'Role of break: When a match is found, the block executes. The break statement forces control to exit the switch block immediately.', 'Fall-through: If break is omitted, execution continues sequentially into the next case(s) until a break is encountered or the switch ends.', 'Role of default: If no cases match, the default block is executed (similar to the final else).'] },

    { type: 'h3', content: 'Rules of Switch Statement' },
    { type: 'list', items: ['Case labels must be unique.', 'Case labels must be constant expressions (integers or characters, not variables or floats).', 'Break statement is optional (but usually required to prevent fall-through).', 'Default case is optional and can be placed anywhere.', 'Nested switch statements are allowed.'] },

    { type: 'h3', content: 'Example Programs' },
    
    { type: 'text', content: '1. Display day of the week using numbers (1–7):' },
    { type: 'code', language: 'c', code: 'int day = 3;\nswitch(day)\n{\ncase 1: printf("Monday"); break;\ncase 2: printf("Tuesday"); break;\ncase 3: printf("Wednesday"); break;\ncase 4: printf("Thursday"); break;\ncase 5: printf("Friday"); break;\ncase 6: printf("Saturday"); break;\ncase 7: printf("Sunday"); break;\ndefault: printf("Invalid Day");\n}' },

    { type: 'text', content: '2. Simple calculator using switch:' },
    { type: 'code', language: 'c', code: 'char op = \'+\';\nint a = 10, b = 5;\nswitch(op)\n{\ncase \'+\': printf("%d", a + b); break;\ncase \'-\': printf("%d", a - b); break;\ncase \'*\': printf("%d", a * b); break;\ncase \'/\': printf("%d", a / b); break;\ndefault: printf("Invalid Operator");\n}' },

    { type: 'text', content: '3. Display month name using month number:' },
    { type: 'code', language: 'c', code: 'int month = 1;\nswitch(month)\n{\ncase 1: printf("January"); break;\n// ... cases 2 to 11\ncase 12: printf("December"); break;\ndefault: printf("Invalid Month");\n}' },

    { type: 'text', content: '4. Menu-driven arithmetic operations:' },
    { type: 'code', language: 'c', code: 'int choice = 2;\nswitch(choice)\n{\ncase 1:\n    printf("Addition Logic");\n    break;\ncase 2:\n    printf("Subtraction Logic");\n    break;\ncase 3:\n    printf("Exit");\n    break;\ndefault:\n    printf("Invalid Choice");\n}' },

    { type: 'text', content: '5. Grade evaluation using switch:' },
    { type: 'code', language: 'c', code: 'char grade = \'B\';\nswitch(grade)\n{\ncase \'A\': printf("Excellent"); break;\ncase \'B\': printf("Good"); break;\ncase \'C\': printf("Fair"); break;\ncase \'F\': printf("Fail"); break;\ndefault: printf("Invalid Grade");\n}' },

    { type: 'text', content: '6. Nested switch example:' },
    { type: 'code', language: 'c', code: 'int type = 1, size = 2;\nswitch(type)\n{\ncase 1:\n    switch(size)\n    {\n        case 1: printf("Small Coffee"); break;\n        case 2: printf("Large Coffee"); break;\n    }\n    break;\ncase 2:\n    printf("Tea"); break;\n}' },

    { type: 'h3', content: 'Advantages of Switch Statement' },
    { type: 'list', items: ['Cleaner and more readable than deep else-if ladders.', 'Faster execution in many compilers due to jump tables.', 'Easier to debug and maintain.'] },

    { type: 'h3', content: 'Limitations of Switch Statement' },
    { type: 'list', items: ['Cannot evaluate floats or strings.', 'Cannot evaluate ranges (e.g., marks > 90) directly without compiler extensions.', 'Cannot check logical expressions (e.g., x > 5 && x < 10).'] },

    { type: 'h2', content: 'Comparison Table' },
    { type: 'table', headers: ['Feature', 'if', 'if-else', 'else-if ladder', 'switch statement'], rows: [['Condition Type', 'Any expression', 'Any expression', 'Any expression', 'Constant integral/char value'], ['Use Case', 'Single condition check', 'Two distinct paths', 'Multiple conditions', 'Multiple discrete value matching'], ['Readability', 'Good', 'Good', 'Can become messy', 'Very clean for menus'], ['Speed', 'Normal evaluation', 'Normal evaluation', 'Sequential check (slower)', 'Jump table (faster)']] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Write readable conditions.\n• Use braces even for single statements.\n• Prefer switch for menu selections.\n• Avoid deeply nested if statements.\n• Always include a default case in a switch statement.\n• Do not forget the break statement unless intentional fall-through is required.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: "• Using '=' instead of '=='.\n• Forgetting break in switch (causes fall-through).\n• Missing the default case.\n• Incorrect nesting.\n• Trying to use floats or strings in switch." },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a conditional statement?', 'Difference between if and if-else?', 'Difference between else-if ladder and nested if?', 'When should switch be used over an else-if ladder?', 'Why is break important?', 'What happens if break is omitted?', 'Can switch use float values?', 'Can relational operators be used inside switch cases?', 'Explain fall-through in switch.', 'Which statement is better for checking ranges?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    
    { type: 'text', content: 'Question 1: What is the output and why?' },
    { type: 'code', language: 'c', code: 'int x=10;\n\nif(x=5)\n    printf("True");\nelse\n    printf("False");' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. True', 'B. False', 'C. Compilation Error', 'D. Runtime Error'], answer: 'A. True' },
    { type: 'note', title: 'Explanation', content: 'Because assignment (=) assigns 5 to x, and any non-zero value evaluates to true.' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'int x=5;\n\nif(x>3)\n    if(x<10)\n        printf("A");\n    else\n        printf("B");' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. A', 'B. B', 'C. Compilation Error', 'D. No Output'], answer: 'A. A' },

    { type: 'text', content: 'Question 3: Output?' },
    { type: 'code', language: 'c', code: 'int n=2;\n\nswitch(n)\n{\ncase 1:\ncase 2:\ncase 3:\n    printf("Hello");\n}' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Hello', 'B. HelloHello', 'C. Compilation Error', 'D. No Output'], answer: 'A. Hello' },

    { type: 'text', content: 'Question 4: Output?' },
    { type: 'code', language: 'c', code: 'int n=1;\n\nswitch(n)\n{\ncase 1:\n    printf("A");\n\ncase 2:\n    printf("B");\n\ndefault:\n    printf("C");\n}' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. A', 'B. ABC', 'C. AC', 'D. Error'], answer: 'B. ABC' },
    { type: 'note', title: 'Explanation', content: 'ABC because of fall-through (the break statement is missing).' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which statement is better for checking marks between 0 and 100?', options: ['A. switch', 'B. if-else ladder', 'C. nested if', 'D. ternary operator'], answer: 'B. if-else ladder' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• if, if-else, else-if ladder, and nested if\n• The structure and flow of the switch statement\n• Advanced switch concepts: fall-through, break, default, and nesting\n• Comparisons, best practices, and pitfalls in conditional logic' }
  ]
};
