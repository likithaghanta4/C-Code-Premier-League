export default {
  blocks: [
    { type: 'h2', content: '1. Basic Structure' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to define a structure named Student with members: roll_no (int) and name (string). Create a variable, assign values, and print them.' },

    { type: 'h2', content: '2. Basic Union' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to define a union named Data with members: i (int) and f (float). Assign an integer, print it, then assign a float and print it.' },

    { type: 'h2', content: '3. Size Comparison' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that defines a structure and a union with identical members (int, char, float). Print the size of both using sizeof().' },

    { type: 'h2', content: '4. Array of Structures' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to declare an array of 3 Employee structures (id, name, salary). Read data for all 3 and print them.' },

    { type: 'h2', content: '5. Nested Structures' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program where a Student structure contains a nested Date structure for their Date of Birth (day, month, year). Assign and print the details.' },

    { type: 'h2', content: '6. Structure Pointers' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to declare a pointer to a Book structure. Access and print the structure members using the arrow operator (->).' },

    { type: 'h2', content: '7. Passing Structure to Function' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a function that takes a structure as an argument (by value) and prints its members.' },

    { type: 'h2', content: '8. Passing Structure by Reference' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a function that takes a structure by reference (pointer) and modifies its members inside the function.' },

    { type: 'h2', content: '9. Union Data Overwriting' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to demonstrate that modifying one member of a union overwrites the other members. Assign a value to member A, then to member B, and print A to see the corrupted data.' },

    { type: 'h2', content: '10. Typedef with Structures' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that uses typedef to create an alias for a complex structure, and use this alias to create and print multiple variables.' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
