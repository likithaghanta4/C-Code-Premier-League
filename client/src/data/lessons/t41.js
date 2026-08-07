export default {
  blocks: [
    { type: 'h2', content: '1. Print Argument Count' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that prints the total number of command line arguments passed to it (argc).' },

    { type: 'h2', content: '2. Print Program Name' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that prints its own name (argv[0]).' },

    { type: 'h2', content: '3. Print First Argument' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that prints the first command line argument passed to it (argv[1]). Add a check to ensure at least one argument was passed before printing.' },

    { type: 'h2', content: '4. Print All Arguments' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that uses a loop to print all the command line arguments passed to it.' },

    { type: 'h2', content: '5. String to Integer (atoi)' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that takes a single number as a command line argument, converts it to an integer using atoi(), and prints its square.' },

    { type: 'h2', content: '6. Sum of Two Arguments' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that takes two numbers as command line arguments, adds them together, and prints the result.' },

    { type: 'h2', content: '7. String to Float (atof)' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that takes a floating-point number as a command line argument, converts it using atof(), and prints half of its value.' },

    { type: 'h2', content: '8. Average of N Arguments' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that takes N numbers as command line arguments, computes their average, and prints it.' },

    { type: 'h2', content: '9. Command Line Calculator' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that acts as a calculator. It should take three command line arguments: two numbers and an operator (+, -, x, /), and print the result. (Use \'x\' instead of \'*\' to avoid shell wildcard expansion).' },

    { type: 'h2', content: '10. Maximum of N Arguments' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that takes an arbitrary number of integers as command line arguments, finds the maximum among them, and prints it.' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
