export default {
  blocks: [
    { type: 'h2', content: '1. Basic malloc' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to dynamically allocate memory for a single integer using malloc(), assign a value to it, print it, and then free the memory.' },

    { type: 'h2', content: '2. Basic calloc' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to allocate memory for an array of 5 integers using calloc(). Print the default values initialized by calloc().' },

    { type: 'h2', content: '3. Array via malloc' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that asks the user for the number of elements (N), dynamically allocates an array of N integers using malloc(), reads values into it, and prints them.' },

    { type: 'h2', content: '4. Null Check' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that attempts to allocate a very large block of memory. Check if the returned pointer is NULL and print an error message if allocation fails.' },

    { type: 'h2', content: '5. Dynamic Sum' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to dynamically allocate an array of N integers. Read the integers from the user, compute their sum, print the sum, and free the memory.' },

    { type: 'h2', content: '6. Using realloc' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to allocate an array of 3 integers using malloc(). Later, use realloc() to resize the array to hold 5 integers. Populate and print the expanded array.' },

    { type: 'h2', content: '7. String Allocation' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to dynamically allocate exact memory for a string entered by the user. (Hint: Use a temporary large buffer, get the length, then allocate the exact size using malloc).' },

    { type: 'h2', content: '8. 2D Array Allocation' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to dynamically allocate a 2D array (matrix) of size rows x cols using pointers to pointers. Populate and print it.' },

    { type: 'h2', content: '9. Structure Allocation' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to dynamically allocate memory for a structure (e.g., Book). Take input for the structure members using the -> operator and print them.' },

    { type: 'h2', content: '10. Array of Structures' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to dynamically allocate an array of N structures. Read the data for each structure in a loop, print them, and finally free the allocated block.' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
