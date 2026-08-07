export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand structures and user-defined data types.', 'Create and access structures.', 'Use arrays, pointers and functions with structures.', 'Learn nested structures and self-referential structures.', 'Compare structures with arrays and unions.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'A structure is a user-defined data type that groups variables of different data types under a single name.' },
    
    { type: 'h2', content: 'Why Do We Need Structures?' },
    { type: 'list', items: ['Store related data together.', 'Represent real-world entities (Student, Employee, Book).', 'Improve code organization.', 'Build advanced data structures.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A structure is a collection of variables of different data types grouped together under one name.' },
    
    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'struct Student\n{\n    int id;\n    char name[30];\n    float marks;\n};' },

    { type: 'h2', content: 'Declaring Structure Variables' },
    { type: 'code', language: 'c', code: 'struct Student s1, s2;' },

    { type: 'h2', content: 'Initializing Structures' },
    { type: 'code', language: 'c', code: 'struct Student s1={101,"Alice",95.5};' },

    { type: 'h2', content: 'Accessing Members' },
    { type: 'text', content: 'Use the dot (.) operator.' },
    { type: 'code', language: 'c', code: 'printf("%d", s1.id);' },

    { type: 'h2', content: 'Memory Representation' },
    { type: 'text', content: 'Each member occupies memory sequentially. The total size may include padding for memory alignment.' },

    { type: 'h2', content: 'Array of Structures' },
    { type: 'code', language: 'c', code: 'struct Student s[100];' },

    { type: 'h2', content: 'Pointer to Structure' },
    { type: 'code', language: 'c', code: 'struct Student *ptr=&s1;\nprintf("%d", ptr->id);' },

    { type: 'h2', content: 'Arrow (->) Operator' },
    { type: 'text', content: 'Used to access members through a structure pointer.' },
    { type: 'code', language: 'c', code: 'ptr->marks;' },

    { type: 'h2', content: 'Nested Structures' },
    { type: 'text', content: 'A structure can contain another structure as a member.' },

    { type: 'h2', content: 'Self-Referential Structure' },
    { type: 'text', content: 'A structure containing a pointer to the same structure type. This forms the basis of Linked Lists, Trees, and Graphs.' },

    { type: 'h2', content: 'Passing & Returning Structures' },
    { type: 'text', content: 'Structures can be passed to functions by value or by pointer. A function can also return an entire structure.' },

    { type: 'h2', content: 'Comparisons' },
    { type: 'h3', content: 'Structures vs Arrays' },
    { type: 'table', headers: ['Array', 'Structure'], rows: [['Same data type only', 'Different data types under one name']] },
    { type: 'h3', content: 'Structures vs Unions' },
    { type: 'table', headers: ['Structure', 'Union'], rows: [['Each member has separate memory', 'All members share the same memory']] },

    { type: 'h2', content: 'typedef with Structures' },
    { type: 'code', language: 'c', code: 'typedef struct\n{\n    int id;\n    char name[20];\n} Student;' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Student Management Systems', 'Employee Records', 'Banking Systems', 'Hospital Management', 'Linked Lists', 'Trees', 'File Records'] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Organizes related data.', 'Supports complex records.', 'Easy to pass as function arguments.', 'Improves readability.'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Slight memory overhead due to padding.', 'Cannot directly compare two structures using ==.'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful member names.\n• Use typedef for readability.\n• Pass large structures by pointer (to save memory and time).\n• Initialize members before use.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting the struct keyword (when not using typedef).\n• Using . instead of -> with pointers.\n• Comparing entire structures with ==.\n• Accessing uninitialized members.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a structure?', 'Difference between structure and union?', 'Difference between array and structure?', 'What is padding?', 'What is structure alignment?', 'What is a nested structure?', 'What is a self-referential structure?', 'Why use typedef?', 'Difference between . and -> ?', 'Can a function return a structure?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'struct Student{int id;};\nstruct Student s={101};\nprintf("%d",s.id);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 1', 'B. 101', 'C. Error', 'D. Garbage value'], answer: 'B. 101' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'struct Student{int id;};\nstruct Student s={10};\nstruct Student *p=&s;\nprintf("%d",p->id);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Address of s', 'B. Error', 'C. 10', 'D. Garbage value'], answer: 'C. 10' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which operator accesses members through a pointer?', options: ['A. .', 'B. ->', 'C. *', 'D. &'], answer: 'B. ->' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Can a structure contain another structure?', options: ['A. Yes', 'B. No', 'C. Only if it is the same structure type', 'D. Only in C++'], answer: 'A. Yes' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Why can\'t structures generally be compared using ==?', options: ['A. Because == only compares addresses.', 'B. C does not define member-wise comparison for structures.', 'C. Because structures do not have sizes.', 'D. Because padding bits make them identical.'], answer: 'B. C does not define member-wise comparison for structures.' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Which keyword creates an alias for a structure type?', options: ['A. struct', 'B. alias', 'C. define', 'D. typedef'], answer: 'D. typedef' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Structure basics\n• Declaration and initialization\n• Member access\n• Arrays of structures\n• Structure pointers\n• Nested and self-referential structures\n• Passing and returning structures\n• typedef\n• Comparison with arrays and unions\n• Best practices and interview preparation' }
  ]
};
