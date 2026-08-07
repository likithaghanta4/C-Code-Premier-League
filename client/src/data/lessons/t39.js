export default {
  blocks: [
    { type: 'h2', content: '1. Auto Variable' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that declares an auto variable inside a function. Print its value and observe its block scope.' },

    { type: 'h2', content: '2. Register Variable' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program using a register variable in a loop (e.g., as the loop counter). Print the loop iterations.' },

    { type: 'h2', content: '3. Static Variable Default Value' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that declares an uninitialized static variable. Print its value to prove it defaults to 0.' },

    { type: 'h2', content: '4. Extern Variable Declaration' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that declares a global variable at the top, and uses the extern keyword inside main to access it.' },

    { type: 'h2', content: '5. Static Variable Lifetime' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program with a function containing a static integer that increments each time the function is called. Call the function 3 times from main and print the results.' },

    { type: 'h2', content: '6. Auto vs Static' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a function that declares both an auto variable and a static variable. Increment both. Call the function multiple times to observe the difference in their lifetimes.' },

    { type: 'h2', content: '7. Multi-file Extern (Simulation)' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that declares a global variable outside main, and creates a separate function that accesses it via the extern keyword.' },

    { type: 'h2', content: '8. Shadowing Variables' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that declares a global variable x. Inside main, declare a local variable x. Print both (using a separate function to print the global one) to demonstrate variable shadowing.' },

    { type: 'h2', content: '9. Static Function' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that defines a static function. Call it from within the same file to demonstrate that its scope is limited to the file it was declared in.' },

    { type: 'h2', content: '10. Register Address Error' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that declares a register variable and attempts to print its memory address using the & operator. Observe the compiler error. (Keep the error code commented out for submission).' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
