export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand functions and modular programming.', 'Learn function declaration, definition and function call.', 'Understand return types and void functions.', 'Learn parameters and arguments.', 'Understand call by value and call by reference.', 'Learn recursion.', 'Learn function pointers.', 'Learn storage classes used with functions.', 'Pass arrays, strings and structures to functions.', 'Return values, pointers and structures from functions.', 'Understand stack memory during function calls.'] },
    
    { type: 'h2', content: 'Why Functions?' },
    { type: 'text', content: 'Functions divide a large program into small reusable modules, improve readability, reduce duplication, simplify debugging, testing and maintenance.' },
    
    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A function is a named block of code that performs a specific task and can be called whenever required.' },
    
    { type: 'h2', content: 'Parts of a Function' },
    { type: 'list', items: ['1. Function Prototype (Declaration)', '2. Function Definition', '3. Function Call'] },

    { type: 'h3', content: 'Function Prototype' },
    { type: 'text', content: 'Syntax:' },
    { type: 'code', language: 'c', code: 'return_type functionName(parameter_list);' },
    { type: 'text', content: 'Example:' },
    { type: 'code', language: 'c', code: 'int add(int,int);' },

    { type: 'h3', content: 'Function Definition' },
    { type: 'code', language: 'c', code: 'int add(int a,int b)\n{\n    return a+b;\n}' },

    { type: 'h3', content: 'Function Call' },
    { type: 'code', language: 'c', code: 'result = add(10,20);' },

    { type: 'h2', content: 'Types of Functions' },
    { type: 'list', items: ['Library Functions (printf, scanf, strlen, sqrt, etc.)', 'User-defined Functions'] },
    { type: 'text', content: 'Based on parameters and return value:' },
    { type: 'list', items: ['1. No arguments, no return value', '2. Arguments, no return value', '3. No arguments, return value', '4. Arguments and return value'] },

    { type: 'h2', content: 'Parameters vs Arguments' },
    { type: 'text', content: '• Parameters are variables in the function definition.\n• Arguments are actual values supplied during the function call.' },

    { type: 'h2', content: 'Return Statement' },
    { type: 'text', content: 'The return statement sends control and optionally a value back to the caller.\nNote: void functions do not return a value.' },

    { type: 'h2', content: 'Call by Value vs Call by Reference' },
    { type: 'h3', content: 'Call by Value' },
    { type: 'text', content: 'A copy of the variable is passed. Changes inside the function do not affect the original variable.' },
    { type: 'h3', content: 'Call by Reference' },
    { type: 'text', content: 'The address is passed using pointers. Changes inside the function affect the original variable.' },

    { type: 'h2', content: 'Recursion' },
    { type: 'text', content: 'Recursion is when a function calls itself.' },
    { type: 'text', content: 'Components:' },
    { type: 'list', items: ['Base case (termination condition)', 'Recursive case'] },
    { type: 'text', content: 'Classic Examples:' },
    { type: 'list', items: ['Factorial', 'Fibonacci', 'GCD', 'Tower of Hanoi'] },

    { type: 'h2', content: 'Passing Structures & Arrays' },
    { type: 'h3', content: 'Passing Arrays' },
    { type: 'text', content: 'Arrays decay to pointers when passed to functions.' },
    { type: 'code', language: 'c', code: 'void display(int arr[], int n);' },
    { type: 'h3', content: 'Passing Strings' },
    { type: 'text', content: 'Strings are passed as character arrays.' },
    { type: 'code', language: 'c', code: 'void display(char str[]);' },
    { type: 'h3', content: 'Passing Structures' },
    { type: 'text', content: 'Structures can be passed by value or by pointer.' },

    { type: 'h2', content: 'Returning Values' },
    { type: 'text', content: 'A function can return:' },
    { type: 'list', items: ['int, float, double, char', 'pointer', 'structure'] },
    { type: 'note', title: 'Note', content: 'Arrays cannot be returned directly (must return a pointer to the array).' },

    { type: 'h2', content: 'Function Pointers' },
    { type: 'code', language: 'c', code: 'int (*ptr)(int,int);' },
    { type: 'text', content: 'Used in callbacks, menu systems and dynamic dispatch.' },

    { type: 'h2', content: 'Storage Classes & Scope' },
    { type: 'h3', content: 'Storage Classes' },
    { type: 'list', items: ['auto (default local)', 'register (hints CPU register storage)', 'static (preserves value between calls)', 'extern (global variable defined elsewhere)'] },
    { type: 'h3', content: 'Scope' },
    { type: 'list', items: ['Local variables', 'Global variables', 'Block scope', 'Function scope', 'File scope'] },

    { type: 'h2', content: 'Inline Functions' },
    { type: 'text', content: "C99 doesn't have strict C++-style inline semantics everywhere, but the inline keyword can suggest inlining (code replacement) to the compiler to reduce function call overhead." },

    { type: 'h2', content: 'Memory During Function Calls' },
    { type: 'text', content: 'Call Stack:' },
    { type: 'flow', items: ['main()', 'add()', 'return'] },
    { type: 'note', title: 'Stack Frame', content: 'Each function gets its own stack frame (local variables, arguments, return address) pushed onto the Call Stack.' },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Code reuse', 'Easy debugging', 'Better maintenance', 'Modular programming', 'Improved readability'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Function call overhead', 'Deep recursion may cause stack overflow'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Missing prototype.\n• Wrong return type.\n• Missing return statement.\n• Confusing call by value with call by reference.\n• Infinite recursion.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Keep functions small.\n• Give meaningful names.\n• Use const where appropriate.\n• Avoid global variables.\n• Write one function for one task.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a function?', 'Prototype vs Definition?', 'Call by value vs reference?', 'What is recursion?', 'What is a base case?', 'Can main() call itself?', 'What are function pointers?', 'Can a function return multiple values?', 'Can arrays be returned directly?', 'What is stack overflow?', 'Explain static in functions.', 'Explain extern.'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'int fun(int x){return x*x;}\nprintf("%d",fun(5));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 5', 'B. 10', 'C. 25', 'D. Error'], answer: 'C. 25' },

    { type: 'text', content: 'Question 2: Output? (Call by value)' },
    { type: 'code', language: 'c', code: 'void fun(int x){x=20;}\nint a=10; fun(a); printf("%d",a);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 10', 'B. 20', 'C. 0', 'D. Error'], answer: 'A. 10' },

    { type: 'text', content: 'Question 3: Output? (Call by reference)' },
    { type: 'code', language: 'c', code: 'void fun(int *x){*x=20;}\nint a=10; fun(&a); printf("%d",a);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 10', 'B. 20', 'C. 0', 'D. Error'], answer: 'B. 20' },

    { type: 'text', content: 'Question 4: Output?' },
    { type: 'code', language: 'c', code: 'int fact(int n){\n if(n==1) return 1;\n return n*fact(n-1);\n}\nprintf("%d", fact(5));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 24', 'B. 120', 'C. 600', 'D. 125'], answer: 'B. 120' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Why does recursion require a base case?', options: ['A. For syntax correctness', 'B. To optimize memory', 'C. To stop infinite recursive calls', 'D. It is not required'], answer: 'C. To stop infinite recursive calls' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Can two functions have the same name in C?', options: ['A. Yes, always', 'B. Yes, if return types differ', 'C. No. C does not support function overloading.', 'D. Yes, if they have different number of arguments'], answer: 'C. No. C does not support function overloading.' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Function fundamentals\n• Prototype, definition, call\n• Parameters & arguments\n• Return values\n• Call by value/reference\n• Recursion\n• Arrays, strings & structures with functions\n• Function pointers\n• Storage classes\n• Scope\n• Stack memory\n• Best practices\n• Interview preparation' }
  ]
};
