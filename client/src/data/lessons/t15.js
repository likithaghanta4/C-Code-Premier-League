export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand recursion and recursive thinking.', 'Learn the structure of recursive functions.', 'Understand base case and recursive case.', 'Trace recursive execution using the call stack.', 'Compare recursion with iteration.', 'Solve common recursive problems.', 'Identify common recursion mistakes and optimize solutions.'] },
    
    { type: 'h2', content: 'What is Recursion?' },
    { type: 'text', content: 'Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. Every recursive solution must have:' },
    { type: 'list', items: ['Base Case – stops recursion.', 'Recursive Case – reduces the problem and calls itself.'] },
    
    { type: 'h2', content: 'Why Recursion?' },
    { type: 'list', items: ['Breaks complex problems into smaller subproblems.', 'Produces elegant solutions.', 'Used in tree and graph algorithms.', 'Used in divide-and-conquer algorithms.', 'Widely used in compilers and operating systems.'] },

    { type: 'h2', content: 'General Syntax' },
    { type: 'code', language: 'c', code: 'return_type function(parameters)\n{\n    if(base_condition)\n        return value;\n\n    return function(smaller_problem);\n}' },

    { type: 'h2', content: 'Execution Flow' },
    { type: 'flow', items: ['Function Call', 'Check Base Case', 'False → Recursive Call', 'Push New Stack Frame', 'Base Case Reached', 'Return Back (Stack Unwinds)'] },

    { type: 'h2', content: 'Call Stack Concept' },
    { type: 'text', content: 'Every recursive call gets its own stack frame containing:' },
    { type: 'list', items: ['Parameters', 'Local variables', 'Return address'] },
    { type: 'note', title: 'Warning', content: 'If recursion becomes too deep, a Stack Overflow may occur.' },

    { type: 'h2', content: 'Example 1: Factorial' },
    { type: 'code', language: 'c', code: 'int fact(int n)\n{\n    if(n<=1)\n        return 1;\n\n    return n*fact(n-1);\n}' },
    { type: 'code', language: 'text', code: 'fact(5)\n= 5 × 4 × 3 × 2 × 1\n= 120' },
    { type: 'h3', content: 'Recursive Trace for fact(4)' },
    { type: 'code', language: 'text', code: 'fact(4)\n→ 4 × fact(3)\n→ 4 × 3 × fact(2)\n→ 4 × 3 × 2 × fact(1)\n→ 4 × 3 × 2 × 1\n= 24' },

    { type: 'h2', content: 'Example 2: Fibonacci' },
    { type: 'code', language: 'c', code: 'int fib(int n)\n{\n    if(n<=1)\n        return n;\n\n    return fib(n-1)+fib(n-2);\n}' },

    { type: 'h2', content: 'Example 3: Sum of First N Numbers' },
    { type: 'code', language: 'c', code: 'int sum(int n)\n{\n    if(n==0)\n        return 0;\n\n    return n+sum(n-1);\n}' },

    { type: 'h2', content: 'Example 4: Power Function' },
    { type: 'code', language: 'c', code: 'int power(int a,int b)\n{\n    if(b==0)\n        return 1;\n\n    return a*power(a,b-1);\n}' },

    { type: 'h2', content: 'Example 5: GCD (Euclidean Algorithm)' },
    { type: 'code', language: 'c', code: 'int gcd(int a,int b)\n{\n    if(b==0)\n        return a;\n\n    return gcd(b,a%b);\n}' },

    { type: 'h2', content: 'Example 6: Reverse a String (Concept)' },
    { type: 'text', content: 'Recursive processing can reverse strings by printing characters during stack unwinding.' },

    { type: 'h2', content: 'Types of Recursion' },
    { type: 'list', items: ['Direct Recursion', 'Indirect (Mutual) Recursion', 'Tail Recursion', 'Non-Tail Recursion', 'Nested Recursion'] },

    { type: 'h2', content: 'Tail vs Non-Tail Recursion' },
    { type: 'h3', content: 'Tail Recursion:' },
    { type: 'text', content: 'The recursive call is the last operation.' },
    { type: 'h3', content: 'Non-Tail Recursion:' },
    { type: 'text', content: 'Additional work remains after the recursive call returns.' },

    { type: 'h2', content: 'Indirect Recursion' },
    { type: 'text', content: 'Function A calls Function B.\nFunction B calls Function A.' },

    { type: 'h2', content: 'Recursion vs Iteration' },
    { type: 'table', headers: ['Recursion', 'Iteration'], rows: [['Uses function calls', 'Uses loops'], ['Uses call stack', 'Less memory'], ['Elegant for recursive problems', 'Usually faster']] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Cleaner code', 'Natural for divide-and-conquer', 'Easier for trees and graphs', 'Reduces complex logic'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Stack overflow', 'Extra memory usage', 'Can be slower than loops', 'Difficult to debug if very deep'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Missing base case\n• Wrong base condition\n• Infinite recursion\n• Not reducing the problem size\n• Excessive recursive depth' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Always define a valid base case.\n• Reduce problem size every call.\n• Prefer iteration for simple repetition.\n• Use tail recursion where suitable.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is recursion?', 'What is a base case?', 'What is a recursive case?', 'Difference between recursion and iteration?', 'What is stack overflow?', 'Explain the call stack.', 'What is tail recursion?', 'What is indirect recursion?', 'Why is Fibonacci recursion inefficient?', 'When should recursion be avoided?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'int fun(int n)\n{\n if(n==0) return 0;\n return n+fun(n-1);\n}\nprintf("%d", fun(4));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 10', 'B. 24', 'C. 16', 'D. Error'], answer: 'A. 10' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'int fun(int n)\n{\n if(n<=1) return 1;\n return n*fun(n-1);\n}\nprintf("%d", fun(5));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 24', 'B. 120', 'C. 600', 'D. 125'], answer: 'B. 120' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'How many active stack frames are required to compute fact(5) at maximum depth (including main)?', options: ['A. 1', 'B. 4', 'C. 5', 'D. 6'], answer: 'D. 6' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which recursion type performs no work after the recursive call?', options: ['A. Non-tail recursion', 'B. Tail recursion', 'C. Direct recursion', 'D. Nested recursion'], answer: 'B. Tail recursion' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'What happens if a recursive function has no base case?', options: ['A. It executes 10 times and stops.', 'B. The compiler fixes it automatically.', 'C. Infinite recursion leading to stack overflow.', 'D. It returns 0.'], answer: 'C. Infinite recursion leading to stack overflow.' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Which is generally more memory efficient for simple counting?', options: ['A. Recursion', 'B. Iteration', 'C. Both are identical', 'D. Nested Recursion'], answer: 'B. Iteration' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Recursion\n• Base and recursive cases\n• Call stack\n• Factorial\n• Fibonacci\n• Sum of N numbers\n• Power\n• GCD\n• Direct, indirect, tail and non-tail recursion\n• Recursion vs iteration\n• Best practices\n• Interview preparation' }
  ]
};
