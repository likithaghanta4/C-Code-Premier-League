export default {
  blocks: [
    {
      type: 'h2',
      content: 'Learning Objectives',
    },
    {
      type: 'list',
      items: [
        'Understand the core features that make C a powerful language.',
        'Differentiate between high-level and low-level language traits.',
        'Learn why C is highly portable and efficient.',
      ],
    },
    {
      type: 'h2',
      content: 'Key Features of C',
    },
    {
      type: 'text',
      content: 'C is a robust language whose rich set of built-in functions and operators can be used to write any complex program. The following are the most important features of the C language:',
    },
    {
      type: 'h3',
      content: '1. Simple and Efficient',
    },
    {
      type: 'text',
      content: 'The basic style of the C programming language is simple, easy to learn, and heavily structured. Because it provides fundamental control structures like loops and conditionals, along with powerful data types, it executes incredibly fast.',
    },
    {
      type: 'h3',
      content: '2. Portability (Machine Independent)',
    },
    {
      type: 'text',
      content: 'Unlike assembly language which is tied to specific hardware, C programs are highly portable. A C program written on one machine can be run on a completely different machine with little or no modification, provided a compiler exists for that machine.',
    },
    {
      type: 'h3',
      content: '3. Mid-level Programming Language',
    },
    {
      type: 'text',
      content: 'C is uniquely positioned as a "mid-level" language. It bridges the gap between machine-level languages (like assembly) and high-level languages (like Python or Java).',
    },
    {
      type: 'list',
      items: [
        'Low-level capabilities: You can directly manipulate memory using pointers.',
        'High-level capabilities: It provides human-readable keywords and structured programming constructs.',
      ],
    },
    {
      type: 'h3',
      content: '4. Structured Language',
    },
    {
      type: 'text',
      content: 'C supports structured programming, which means a large, complex problem can be broken down into smaller, manageable blocks or functions. This makes the code easier to test, maintain, and debug.',
    },
    {
      type: 'h3',
      content: '5. Rich Library',
    },
    {
      type: 'text',
      content: 'C provides a vast array of built-in functions that developers can use to solve common problems (like math calculations, input/output, and string manipulation) without writing them from scratch.',
    },
    {
      type: 'h3',
      content: '6. Dynamic Memory Management',
    },
    {
      type: 'text',
      content: 'In C, you have complete control over memory. You can allocate memory at runtime using functions like malloc() and calloc(), and you must explicitly free it using free(). This level of control is what makes C so fast, but it also means the programmer is responsible for preventing memory leaks.',
    },
    {
      type: 'mistake',
      content: 'Forgetting to free() dynamically allocated memory leads to "memory leaks", where a program consumes more and more RAM until it crashes. This is a common pitfall in C programming.',
    },
    {
      type: 'h2',
      content: 'Summary',
    },
    {
      type: 'text',
      content: 'C is a fast, portable, and mid-level language that supports structured programming and dynamic memory allocation. These features are exactly why C remains the language of choice for operating systems, embedded systems, and performance-critical applications.'
    }
  ]
};
