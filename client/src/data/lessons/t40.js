export default {
  blocks: [
    { type: 'h2', content: '1. Basic #define' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that uses #define to create a constant for PI (3.14). Calculate and print the area of a circle with radius 5.' },

    { type: 'h2', content: '2. Macro with Arguments' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that defines a macro SQUARE(x) to compute the square of a number. Test it with an integer.' },

    { type: 'h2', content: '3. #include Usage' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that uses #include to bring in stdio.h and math.h. Use the sqrt() function to print the square root of 16.' },

    { type: 'h2', content: '4. Stringizing Operator' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that uses the stringizing operator (#) in a macro to convert a passed argument into a string literal and print it.' },

    { type: 'h2', content: '5. Conditional Compilation (#ifdef)' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that defines a macro DEBUG. Use #ifdef and #endif to conditionally print a debug message.' },

    { type: 'h2', content: '6. Using #undef' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that defines a macro LIMIT as 100. Print it, then use #undef LIMIT, redefine it as 200, and print it again.' },

    { type: 'h2', content: '7. Predefined Macros' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to print the current file name, date, time, and line number using the predefined macros __FILE__, __DATE__, __TIME__, and __LINE__.' },

    { type: 'h2', content: '8. Nested Conditional Compilation' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that uses #if, #elif, #else, and #endif to check the value of a defined OS macro (e.g., WINDOWS vs LINUX) and print the OS name.' },

    { type: 'h2', content: '9. Token Pasting Operator' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that uses the token pasting operator (##) in a macro to concatenate two tokens (like \'var\' and \'1\') to form a variable name, and assign it a value.' },

    { type: 'h2', content: '10. Guarding Header Files' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a mock C header file (e.g., myheader.h) that implements an Include Guard using #ifndef, #define, and #endif to prevent double inclusion.' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
