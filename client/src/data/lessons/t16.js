export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand pointers and memory addresses.', 'Declare, initialize and use pointers.', 'Perform pointer arithmetic.', 'Work with arrays, strings and functions using pointers.', 'Learn dynamic memory allocation.', 'Identify common pointer errors.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Pointers are variables that store memory addresses instead of actual values. They provide direct access to memory and are one of the most powerful features of C.' },
    
    { type: 'h2', content: 'Why Do We Need Pointers?' },
    { type: 'list', items: ['Efficient memory access.', 'Dynamic memory allocation.', 'Pass by reference.', 'Efficient array/string processing.', 'Build data structures (Linked List, Stack, Queue, Tree, Graph).', 'System programming and embedded development.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A pointer is a variable that stores the address of another variable.' },
    
    { type: 'h2', content: 'Memory Addresses' },
    { type: 'text', content: 'Every variable occupies memory and has a unique address.' },
    { type: 'code', language: 'c', code: 'int a=10;' },
    { type: 'text', content: '&a gives the address of a.' },

    { type: 'h2', content: 'Pointer Declaration' },
    { type: 'h3', content: 'Syntax:' },
    { type: 'code', language: 'c', code: 'data_type *pointer_name;' },
    { type: 'h3', content: 'Example:' },
    { type: 'code', language: 'c', code: 'int *ptr;' },

    { type: 'h2', content: 'Pointer Initialization' },
    { type: 'code', language: 'c', code: 'int a=10;\nint *ptr=&a;' },

    { type: 'h2', content: 'Address-of (&) Operator' },
    { type: 'text', content: 'Returns the memory address of a variable.' },
    { type: 'code', language: 'c', code: 'ptr = &a;' },

    { type: 'h2', content: 'Dereference (*) Operator' },
    { type: 'text', content: 'Accesses the value stored at the address.' },
    { type: 'code', language: 'c', code: 'printf("%d", *ptr);' },

    { type: 'h2', content: 'Memory Representation' },
    { type: 'code', language: 'text', code: 'Variable   Value   Address\na          10      1000\nptr        1000    2000' },
    { type: 'text', content: '*ptr gives the value 10 (the value stored at the address ptr points to).' },

    { type: 'h2', content: 'Special Pointers' },
    { type: 'h3', content: 'NULL Pointer' },
    { type: 'text', content: 'A pointer that points to nothing.' },
    { type: 'code', language: 'c', code: 'int *ptr = NULL;' },
    { type: 'h3', content: 'Void Pointer' },
    { type: 'text', content: 'A generic pointer that can hold the address of any data type.' },
    { type: 'code', language: 'c', code: 'void *vp;' },
    { type: 'h3', content: 'Wild Pointer' },
    { type: 'text', content: 'A pointer declared but not initialized. Accessing it causes undefined behavior.' },
    { type: 'h3', content: 'Dangling Pointer' },
    { type: 'text', content: 'A pointer referring to memory that has already been freed or gone out of scope.' },

    { type: 'h2', content: 'Pointer Arithmetic' },
    { type: 'text', content: 'Supported operations:' },
    { type: 'list', items: ['++', '--', '+ integer', '- integer', 'Difference between pointers'] },
    { type: 'note', title: 'Note', content: 'Pointer arithmetic moves according to the size of the data type it points to.' },

    { type: 'h2', content: 'Pointers and Arrays' },
    { type: 'text', content: 'Array name acts like a pointer to the first element. arr[i] is equivalent to *(arr+i).' },

    { type: 'h2', content: 'Pointers and Strings' },
    { type: 'text', content: 'Strings are character arrays.' },
    { type: 'code', language: 'c', code: 'char *str="Hello";\nchar name[]="Hello";' },

    { type: 'h2', content: 'Pointers to Pointers (Double Pointers)' },
    { type: 'text', content: 'Stores the address of another pointer.' },
    { type: 'code', language: 'c', code: 'int **pp;' },

    { type: 'h2', content: 'Pointers and Functions' },
    { type: 'text', content: 'Pointers enable call by reference. Passing addresses allows a function to modify original variables.' },
    { type: 'code', language: 'c', code: 'void swap(int *a,int *b);' },

    { type: 'h2', content: 'Returning Pointers' },
    { type: 'text', content: 'Functions may return pointers but must NOT return pointers to local variables (as they go out of scope and become dangling pointers).' },

    { type: 'h2', content: 'Function Pointers' },
    { type: 'text', content: 'Used for callbacks and dynamic function selection.' },
    { type: 'code', language: 'c', code: 'int (*fp)(int,int);' },

    { type: 'h2', content: 'Array of Pointers vs Pointer to Array' },
    { type: 'h3', content: 'Array of Pointers' },
    { type: 'code', language: 'c', code: 'char *names[]={"Ram","Sam","Tom"};' },
    { type: 'h3', content: 'Pointer to Array' },
    { type: 'code', language: 'c', code: 'int (*p)[5];' },

    { type: 'h2', content: 'Dynamic Memory Allocation' },
    { type: 'text', content: 'Functions in <stdlib.h> allocate and release memory during runtime:' },
    { type: 'list', items: ['malloc()', 'calloc()', 'realloc()', 'free()'] },

    { type: 'h2', content: 'const with Pointers' },
    { type: 'list', items: ['const int *ptr (Pointer to constant integer)', 'int *const ptr (Constant pointer to integer)', 'const int *const ptr (Constant pointer to constant integer)'] },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'File handling', 'Dynamic memory', 'Operating systems', 'Compilers'] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Fast memory access', 'Efficient parameter passing', 'Supports dynamic memory', 'Essential for advanced data structures'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Difficult to debug', 'Memory leaks', 'Dangling pointers', 'Segmentation faults'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Initialize pointers (often to NULL).\n• Check for NULL before dereferencing.\n• Free allocated memory.\n• Avoid wild pointers.\n• Don\'t return local addresses.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Using uninitialized pointers.\n• Dereferencing NULL.\n• Forgetting free().\n• Out-of-bounds pointer arithmetic.\n• Returning address of local variable.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a pointer?', 'Difference between * and &?', 'NULL vs Wild pointer?', 'Dangling pointer?', 'Void pointer?', 'Pointer arithmetic?', 'Array vs pointer?', 'Function pointer?', 'malloc vs calloc?', 'calloc vs realloc?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'int a=10; int *p=&a;\nprintf("%d",*p);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Address of a', 'B. 10', 'C. Compilation Error', 'D. Garbage Value'], answer: 'B. 10' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'int a=5; int *p=&a;\n(*p)++;\nprintf("%d",a);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 5', 'B. 6', 'C. Address of a', 'D. Error'], answer: 'B. 6' },

    { type: 'text', content: 'Question 3: Output?' },
    { type: 'code', language: 'c', code: 'int arr[]={10,20,30};\nprintf("%d",*(arr+2));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 10', 'B. 20', 'C. 30', 'D. 0'], answer: 'C. 30' },

    { type: 'text', content: 'Question 4: Output?' },
    { type: 'code', language: 'c', code: 'int a=100;\nint *p=&a;\nint **q=&p;\nprintf("%d",**q);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 100', 'B. Address of p', 'C. Address of a', 'D. Error'], answer: 'A. 100' },

    { type: 'text', content: 'Question 5: Why is this dangerous?' },
    { type: 'code', language: 'c', code: 'int *p;\nprintf("%d",*p);' },
    { type: 'quiz', question: 'Select the reason:', options: ['A. Syntax Error', 'B. Memory leak', 'C. Wild pointer (undefined behavior)', 'D. NULL pointer exception'], answer: 'C. Wild pointer (undefined behavior)' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Which function releases dynamically allocated memory?', options: ['A. delete()', 'B. release()', 'C. clear()', 'D. free()'], answer: 'D. free()' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Pointer fundamentals\n• Address and dereference operators\n• NULL, void, wild and dangling pointers\n• Pointer arithmetic\n• Arrays, strings and functions with pointers\n• Double pointers\n• Function pointers\n• Dynamic memory allocation\n• Best practices\n• Interview preparation' }
  ]
};
