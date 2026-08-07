export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand dynamic memory allocation.', 'Learn heap memory.', 'Use malloc(), calloc(), realloc(), and free().', 'Prevent memory leaks.', 'Build programs using dynamic memory.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'Dynamic Memory Allocation (DMA) allows memory to be allocated during program execution instead of compile time.' },
    
    { type: 'h2', content: 'Why Dynamic Memory Allocation?' },
    { type: 'list', items: ['Allocate memory only when needed.', 'Save memory.', 'Handle variable-sized data.', 'Build dynamic data structures.'] },

    { type: 'h2', content: 'Static vs Dynamic Memory' },
    { type: 'table', headers: ['Static Memory', 'Dynamic Memory'], rows: [['Fixed size', 'Variable size'], ['Stack', 'Heap'], ['Compile time', 'Run time']] },

    { type: 'h2', content: 'Header File' },
    { type: 'code', language: 'c', code: '#include <stdlib.h>' },

    { type: 'h2', content: 'malloc()' },
    { type: 'text', content: 'Allocates memory but does not initialize it (contains garbage values).' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'ptr = (int*)malloc(n * sizeof(int));' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main()\n{\n    int *p=(int*)malloc(sizeof(int));\n    *p=100;\n    printf("%d",*p);\n    free(p);\n    return 0;\n}' },

    { type: 'h2', content: 'calloc()' },
    { type: 'text', content: 'Allocates memory and initializes it to zero.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'ptr = (int*)calloc(n, sizeof(int));' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main()\n{\n    int *p=(int*)calloc(5,sizeof(int));\n    printf("%d",p[0]);\n    free(p);\n    return 0;\n}' },

    { type: 'h2', content: 'realloc()' },
    { type: 'text', content: 'Changes the size of previously allocated memory.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'ptr = realloc(ptr, newSize);' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main()\n{\n    int *p=(int*)malloc(2*sizeof(int));\n    p=(int*)realloc(p,5*sizeof(int));\n    free(p);\n    return 0;\n}' },

    { type: 'h2', content: 'free()' },
    { type: 'text', content: 'Releases dynamically allocated memory back to the system.' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main()\n{\n    int *p=(int*)malloc(sizeof(int));\n    free(p);\n    p=NULL;\n    return 0;\n}' },

    { type: 'h2', content: 'Complete Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<stdlib.h>\n\nint main()\n{\n    int n,i;\n    printf("Enter size: ");\n    scanf("%d",&n);\n\n    int *a=(int*)malloc(n*sizeof(int));\n\n    for(i=0;i<n;i++)\n        scanf("%d",&a[i]);\n\n    printf("Elements:\\n");\n\n    for(i=0;i<n;i++)\n        printf("%d ",a[i]);\n\n    free(a);\n    return 0;\n}' },

    { type: 'h2', content: 'Memory Leak' },
    { type: 'text', content: 'A memory leak occurs when dynamically allocated memory is never released using free().' },
    { type: 'code', language: 'c', code: 'int *p=(int*)malloc(sizeof(int));\n// Missing free(p);' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Dynamic arrays', 'Linked lists', 'Stacks', 'Queues', 'Trees', 'Graphs'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Check if allocation returns NULL.\n• Always call free().\n• Set pointers to NULL after free().\n• Use calloc() when zero initialization is required.\n• Use realloc() carefully.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting free()\n• Using memory after free()\n• Ignoring NULL\n• Memory leaks\n• Double free()' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is Dynamic Memory Allocation?', 'Difference between stack and heap?', 'Difference between malloc() and calloc()?', 'Purpose of realloc()?', 'Why use free()?', 'What is a memory leak?', 'What is a dangling pointer?', 'Why check malloc() for NULL?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'Which function initializes memory to zero?', options: ['A. malloc()', 'B. calloc()', 'C. realloc()', 'D. free()'], answer: 'B. calloc()' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'Which function changes memory size?', options: ['A. malloc()', 'B. calloc()', 'C. realloc()', 'D. new()'], answer: 'C. realloc()' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which function releases memory?', options: ['A. free()', 'B. delete()', 'C. clear()', 'D. release()'], answer: 'A. free()' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Where is dynamic memory allocated?', options: ['A. Stack', 'B. Data Segment', 'C. Code Segment', 'D. Heap'], answer: 'D. Heap' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which header file is required for DMA functions?', options: ['A. <stdio.h>', 'B. <stdlib.h>', 'C. <string.h>', 'D. <math.h>'], answer: 'B. <stdlib.h>' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Dynamic Memory Allocation\n• Heap memory\n• malloc()\n• calloc()\n• realloc()\n• free()\n• Memory leaks\n• Best practices' }
  ]
};
