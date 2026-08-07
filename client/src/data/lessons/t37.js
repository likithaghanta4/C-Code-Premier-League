export default {
  blocks: [
    { type: 'h2', content: '1. Open and Close File' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program to open a file named "test.txt" in write mode ("w") and immediately close it using fclose().' },

    { type: 'h2', content: '2. Write Character to File' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that opens a file in write mode, writes the character \'A\' using fputc(), and closes it.' },

    { type: 'h2', content: '3. Write String to File' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that asks the user for a string and writes it to a file using fputs().' },

    { type: 'h2', content: '4. Read Character from File' },
    { type: 'note', title: 'Difficulty: Easy', content: 'Write a C program that opens an existing text file in read mode ("r"), reads the first character using fgetc(), and prints it to the console.' },

    { type: 'h2', content: '5. Read Entire File' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program to read and print the entire contents of a text file character by character using a while loop and fgetc() until EOF is reached.' },

    { type: 'h2', content: '6. Append to File' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that opens an existing file in append mode ("a") and appends a new sentence to the end of the file.' },

    { type: 'h2', content: '7. Copy File Contents' },
    { type: 'note', title: 'Difficulty: Medium', content: 'Write a C program that copies the contents of one text file (source.txt) to another text file (destination.txt).' },

    { type: 'h2', content: '8. Write Structure to Binary File' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to define a Student structure, take input for one student, and write the structure to a binary file using fwrite().' },

    { type: 'h2', content: '9. Read Structure from Binary File' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program to read the Student structure data from the binary file created in the previous problem using fread() and print the details.' },

    { type: 'h2', content: '10. Error Handling in Files' },
    { type: 'note', title: 'Difficulty: Hard', content: 'Write a C program that attempts to open a non-existent file in read mode. If the FILE pointer is NULL, print a descriptive error message instead of crashing.' },

    { type: 'note', title: 'Practice Complete!', content: 'Congratulations! You have completed this practice set.' }
  ]
};
