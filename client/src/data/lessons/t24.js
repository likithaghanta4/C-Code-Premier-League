export default {
  blocks: [
    { type: 'h2', content: 'Assessment Objectives' },
    { type: 'text', content: 'This final assessment covers every topic from Module 6 (Lessons 1-23): Structure of a C Program, Variables, Data Types, Constants, Input/Output, Operators, Conditional Statements, Loops, Arrays, Strings, Functions, Recursion, Pointers, Structures, Unions, File Handling, Dynamic Memory Allocation, Storage Classes, Preprocessor Directives, and Command Line Arguments.' },
    
    { type: 'h2', content: 'Section A — Multiple Choice Questions (20 × 1 = 20 Marks)' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'Which function prints output to the screen?', options: ['A. scanf()', 'B. printf()', 'C. puts()', 'D. getch()'], answer: 'B. printf()' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'Which keyword declares a constant?', options: ['A. static', 'B. extern', 'C. const', 'D. final'], answer: 'C. const' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which data type stores decimal numbers?', options: ['A. int', 'B. char', 'C. float', 'D. void'], answer: 'C. float' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which loop executes at least once?', options: ['A. for', 'B. while', 'C. do-while', 'D. None of the above'], answer: 'C. do-while' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which operator returns the remainder?', options: ['A. /', 'B. %', 'C. *', 'D. &'], answer: 'B. %' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Which function reads formatted input?', options: ['A. printf()', 'B. gets()', 'C. scanf()', 'D. fgetc()'], answer: 'C. scanf()' },

    { type: 'text', content: 'Question 7:' },
    { type: 'quiz', question: 'Which storage class preserves values between function calls?', options: ['A. auto', 'B. register', 'C. extern', 'D. static'], answer: 'D. static' },

    { type: 'text', content: 'Question 8:' },
    { type: 'quiz', question: 'Which function allocates dynamic memory?', options: ['A. malloc()', 'B. free()', 'C. alloc()', 'D. memset()'], answer: 'A. malloc()' },

    { type: 'text', content: 'Question 9:' },
    { type: 'quiz', question: 'Which function releases allocated memory?', options: ['A. delete()', 'B. free()', 'C. clear()', 'D. remove()'], answer: 'B. free()' },

    { type: 'text', content: 'Question 10:' },
    { type: 'quiz', question: 'Which keyword defines a structure?', options: ['A. structure', 'B. struct', 'C. type', 'D. def'], answer: 'B. struct' },

    { type: 'text', content: 'Question 11:' },
    { type: 'quiz', question: 'Which keyword defines a union?', options: ['A. union', 'B. struct', 'C. link', 'D. shared'], answer: 'A. union' },

    { type: 'text', content: 'Question 12:' },
    { type: 'quiz', question: 'What does a pointer store?', options: ['A. Character', 'B. Floating-point value', 'C. Memory address', 'D. Integer'], answer: 'C. Memory address' },

    { type: 'text', content: 'Question 13:' },
    { type: 'quiz', question: 'Which function opens a file?', options: ['A. fileopen()', 'B. open()', 'C. fopen()', 'D. fcreate()'], answer: 'C. fopen()' },

    { type: 'text', content: 'Question 14:' },
    { type: 'quiz', question: 'Which file mode appends data?', options: ['A. r', 'B. w', 'C. a', 'D. a+'], answer: 'C. a' },

    { type: 'text', content: 'Question 15:' },
    { type: 'quiz', question: 'Which function writes binary data?', options: ['A. fprintf()', 'B. fwrite()', 'C. fputs()', 'D. fputc()'], answer: 'B. fwrite()' },

    { type: 'text', content: 'Question 16:' },
    { type: 'quiz', question: 'Which directive includes header files?', options: ['A. #define', 'B. #import', 'C. #include', 'D. #insert'], answer: 'C. #include' },

    { type: 'text', content: 'Question 17:' },
    { type: 'quiz', question: 'Which macro defines symbolic constants?', options: ['A. #const', 'B. #define', 'C. #macro', 'D. #set'], answer: 'B. #define' },

    { type: 'text', content: 'Question 18:' },
    { type: 'quiz', question: 'What does argc represent?', options: ['A. Array Count', 'B. Argument Character', 'C. Argument Constant', 'D. Argument Count'], answer: 'D. Argument Count' },

    { type: 'text', content: 'Question 19:' },
    { type: 'quiz', question: 'Which array stores command-line arguments?', options: ['A. argv', 'B. argc', 'C. args', 'D. cmd'], answer: 'A. argv' },

    { type: 'text', content: 'Question 20:' },
    { type: 'quiz', question: 'Which function converts a string to an integer?', options: ['A. itoa()', 'B. atoi()', 'C. atof()', 'D. strint()'], answer: 'B. atoi()' },

    { type: 'h2', content: 'Section B — Fill in the Blanks (10 × 1 = 10 Marks)' },
    { type: 'list', items: ['1. _____ is the entry point of a C program. (Answer: main)', '2. The address operator is _____. (Answer: &)', '3. The string terminator is _____. (Answer: \\0)', '4. _____ is used to close a file. (Answer: fclose)', '5. Memory allocated by malloc() is stored in the _____. (Answer: Heap)', '6. _____ storage class has program lifetime. (Answer: static / extern)', '7. _____ directive removes a macro definition. (Answer: #undef)', '8. _____ reads one character from a file. (Answer: fgetc)', '9. _____ converts a string into an integer. (Answer: atoi)', '10. Arrays start with index _____. (Answer: 0)'] },

    { type: 'h2', content: 'Section C — True or False (10 × 1 = 10 Marks)' },
    { type: 'list', items: ['1. Every C program starts from main(). (True)', '2. A pointer stores a memory address. (True)', '3. Strings end with \\0. (True)', '4. malloc() initializes memory to zero. (False)', '5. calloc() initializes memory to zero. (True)', '6. free() releases memory. (True)', '7. static variables retain their values. (True)', '8. fopen() opens a file. (True)', '9. argv is an array of strings. (True)', '10. #include is a preprocessor directive. (True)'] },

    { type: 'h2', content: 'Section D — Short Answer Questions (10 × 2 = 20 Marks)' },
    { type: 'list', items: ['1. Explain variables.', '2. Difference between array and string.', '3. Explain recursion.', '4. What is a pointer?', '5. Difference between structure and union.', '6. Explain malloc() and free().', '7. Explain file handling.', '8. Explain static storage class.', '9. What are preprocessor directives?', '10. Explain argc and argv.'] },

    { type: 'h2', content: 'Section E — Programming Questions (4 × 10 = 40 Marks)' },
    { type: 'list', items: ['1. Read and print student details using a structure.', '2. Reverse a string using a function.', '3. Store and read student records from a file.', '4. Allocate memory for n integers using malloc(), read values and display them.'] },

    { type: 'h2', content: 'Practical Mini Project' },
    { type: 'text', content: 'Develop a Student Record Management System using Structures, Functions, File Handling, and Dynamic Memory Allocation.' },
    { type: 'list', items: ['Features required:', 'Add Record', 'Display Records', 'Search Record', 'Update Record', 'Delete Record'] },

    { type: 'h2', content: 'Evaluation Rubric' },
    { type: 'table', headers: ['Section', 'Marks'], rows: [['MCQs', '20'], ['Fill in the Blanks', '10'], ['True/False', '10'], ['Short Answers', '20'], ['Programming', '40'], ['Total', '100']] },

    { type: 'h2', content: 'Summary' },
    { type: 'note', title: 'Course Completed!', content: '🎉 Congratulations! You have successfully completed the C Programming Module. Proceed to the next module to continue your journey.' }
  ]
};
