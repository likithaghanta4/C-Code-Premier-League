export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand unions and memory sharing.', 'Declare, initialize and access unions.', 'Compare unions with structures.', 'Learn pointers, arrays and functions with unions.', 'Understand memory layout, applications and limitations.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'A union is a user-defined data type that allows different data members to share the same memory location. At any given time, only one member contains a meaningful value.' },
    
    { type: 'h2', content: 'Why Do We Need Unions?' },
    { type: 'list', items: ['Save memory.', 'Store one of several data types at a time.', 'Represent variant data.', 'Useful in embedded systems, hardware programming and communication protocols.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A union is a collection of different data members that occupy the same memory location.' },
    
    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'union Student\n{\n    int id;\n    float marks;\n    char grade;\n};' },

    { type: 'h2', content: 'Declaring Union Variables' },
    { type: 'code', language: 'c', code: 'union Student s1, s2;' },

    { type: 'h2', content: 'Initializing a Union' },
    { type: 'code', language: 'c', code: 'union Student u={101};' },
    { type: 'text', content: 'Only the first member is initialized directly.' },

    { type: 'h2', content: 'Accessing Members' },
    { type: 'text', content: 'Use the dot (.) operator.' },
    { type: 'code', language: 'c', code: 'u.id=101;\nprintf("%d",u.id);' },

    { type: 'h2', content: 'Memory Representation' },
    { type: 'code', language: 'c', code: 'union Data\n{\n    int i;\n    float f;\n    char c;\n};' },
    { type: 'text', content: 'All members share the same memory. Union size = size of the largest member (plus alignment if required).' },

    { type: 'h2', content: 'Working Example' },
    { type: 'code', language: 'c', code: 'union Data d;\n\nd.i=100;\nprintf("%d\\n",d.i);\n\nd.f=25.5;\nprintf("%f\\n",d.f);' },
    { type: 'note', title: 'Important', content: 'After assigning d.f, the previous integer value in d.i is overwritten.' },

    { type: 'h2', content: 'Union with Arrays' },
    { type: 'code', language: 'c', code: 'union Example\n{\n    int numbers[5];\n    char text[20];\n};' },

    { type: 'h2', content: 'Pointer to Union' },
    { type: 'code', language: 'c', code: 'union Student *ptr=&s1;\nprintf("%d",ptr->id);' },

    { type: 'h2', content: 'Arrow (->) Operator' },
    { type: 'text', content: 'Used to access union members through a pointer.' },
    { type: 'code', language: 'c', code: 'ptr->grade;' },

    { type: 'h2', content: 'Passing & Returning Unions' },
    { type: 'text', content: 'Unions can be passed to functions by value or by pointer. Functions can also return unions just like structures.' },

    { type: 'h2', content: 'Nested Unions & Bit Fields' },
    { type: 'h3', content: 'Nested Unions' },
    { type: 'text', content: 'A union can contain a structure, and a structure can contain a union.' },
    { type: 'h3', content: 'Anonymous Unions' },
    { type: 'text', content: 'Modern C standards support anonymous unions in some implementations, allowing direct access to members without a union variable name.' },
    { type: 'h3', content: 'Bit Fields with Unions' },
    { type: 'text', content: 'Bit fields are often combined with unions for low-level memory and hardware register manipulation.' },

    { type: 'h2', content: 'Comparisons' },
    { type: 'h3', content: 'Union vs Structure' },
    { type: 'table', headers: ['Structure', 'Union'], rows: [['Separate memory for every member', 'Shared memory for all members'], ['Members can store values simultaneously', 'Only one meaningful value at a time'], ['Size ≈ sum of members (+padding)', 'Size = largest member (+alignment)']] },
    { type: 'h3', content: 'Union vs Enumeration' },
    { type: 'table', headers: ['Union', 'Enumeration'], rows: [['Stores actual data variables', 'Defines named integer constants']] },

    { type: 'h2', content: 'typedef with Union' },
    { type: 'code', language: 'c', code: 'typedef union\n{\n    int id;\n    float marks;\n} StudentData;' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Memory optimization', 'Embedded systems', 'Device drivers', 'Network packets', 'Protocol parsing', 'Compiler design', 'Variant records', 'Hardware register access'] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Saves memory.', 'Efficient for mutually exclusive data.', 'Useful in low-level programming.'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Only one member should be used at a time.', 'Overwriting one member changes the shared memory.', 'More difficult to debug than structures.'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Track which member is currently valid (e.g., using a tagged enum).\n• Use unions only when memory sharing is strictly intended.\n• Initialize before use.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Expecting all members to hold values simultaneously.\n• Reading a different member than the one last written.\n• Confusing unions with structures.\n• Forgetting shared memory behavior.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a union?', 'Difference between structure and union?', 'Why do unions save memory?', 'What determines the size of a union?', 'Can a union contain arrays?', 'Can a union contain structures?', 'Difference between union and enum?', 'When should unions be used?', 'How do you access union members?', 'What is a tagged union?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'union Data{int i; char c;};\nunion Data d;\nd.i=65;\nprintf("%c",d.c);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Error', 'B. Garbage value', 'C. 65', 'D. Implementation-dependent, often A'], answer: 'D. Implementation-dependent, often A' },

    { type: 'text', content: 'Question 2:' },
    { type: 'code', language: 'c', code: 'union U{int x; float y;};\n// Assign value to y' },
    { type: 'quiz', question: 'Which member remains valid after assigning y?', options: ['A. x', 'B. y', 'C. Both', 'D. None'], answer: 'B. y' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'What is the size of `union U{char c; int i;};`?', options: ['A. sizeof(char)', 'B. sizeof(int) + sizeof(char)', 'C. Typically sizeof(int), subject to alignment', 'D. 0'], answer: 'C. Typically sizeof(int), subject to alignment' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which operator accesses members using a pointer?', options: ['A. .', 'B. ->', 'C. *', 'D. &'], answer: 'B. ->' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Why is a union generally smaller than a structure with the same members?', options: ['A. Unions compress data.', 'B. All members share the same memory location.', 'C. Unions do not use padding.', 'D. Unions only store integers.'], answer: 'B. All members share the same memory location.' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Name one real-world use of unions.', options: ['A. Embedded systems / Memory optimization', 'B. Storing completely unrelated large objects', 'C. Replacing linked lists', 'D. Sorting algorithms'], answer: 'A. Embedded systems / Memory optimization' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Union fundamentals\n• Declaration and initialization\n• Memory sharing\n• Arrays and pointers with unions\n• Passing and returning unions\n• Nested unions\n• Bit fields\n• typedef\n• Union vs Structure\n• Applications\n• Best practices\n• Interview preparation' }
  ]
};
