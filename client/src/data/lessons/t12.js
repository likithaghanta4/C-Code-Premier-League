export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand arrays and their advantages.', 'Declare, initialize and access arrays.', 'Work with one-dimensional and two-dimensional arrays.', 'Learn multidimensional arrays.', 'Traverse arrays using loops.', 'Pass arrays to functions.', 'Understand memory representation and common mistakes.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'An array is a collection of elements of the same data type stored in contiguous memory locations. Instead of creating many variables with the same purpose, an array allows us to store multiple values under one name.' },
    
    { type: 'h2', content: 'Why Do We Need Arrays?' },
    { type: 'list', items: ['Store multiple values using one variable.', 'Reduce code duplication.', 'Easy data processing using loops.', 'Efficient memory organization.', 'Useful in searching, sorting and matrices.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'An array is a collection of similar data elements stored in consecutive memory locations and accessed using an index.' },
    
    { type: 'h2', content: 'Characteristics' },
    { type: 'list', items: ['Stores same data type.', 'Fixed size.', 'Index starts from 0.', 'Stored in contiguous memory.', 'Faster access using index.'] },

    { type: 'h2', content: 'Types of Arrays' },
    { type: 'list', items: ['One-Dimensional Array', 'Two-Dimensional Array', 'Multidimensional Array'] },

    { type: 'h2', content: '1. One-Dimensional Array' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'data_type array_name[size];' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'int marks[5];' },
    { type: 'h3', content: 'Initialization' },
    { type: 'code', language: 'c', code: 'int marks[5]={85,90,75,88,95};' },
    { type: 'h3', content: 'Accessing Elements' },
    { type: 'code', language: 'c', code: 'printf("%d",marks[2]);' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '75' },
    { type: 'h3', content: 'Memory Representation' },
    { type: 'code', language: 'text', code: 'Index :  0    1    2    3    4\nValue : 85   90   75   88   95' },

    { type: 'h3', content: 'Traversing an Array' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main()\n{\n    int a[5]={10,20,30,40,50};\n\n    for(int i=0;i<5;i++)\n        printf("%d ",a[i]);\n\n    return 0;\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: '10 20 30 40 50' },

    { type: 'h3', content: 'Reading Array Elements' },
    { type: 'code', language: 'c', code: 'for(int i=0;i<5;i++)\n{\n    scanf("%d",&a[i]);\n}' },

    { type: 'h2', content: '2. Two-Dimensional Array' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'data_type array[row][column];' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'int matrix[2][3];' },
    { type: 'h3', content: 'Initialization' },
    { type: 'code', language: 'c', code: 'int matrix[2][3]={\n{1,2,3},\n{4,5,6}\n};' },
    { type: 'h3', content: 'Traversal' },
    { type: 'code', language: 'c', code: 'for(int i=0;i<2;i++)\n{\n    for(int j=0;j<3;j++)\n        printf("%d ",matrix[i][j]);\n}' },
    { type: 'h3', content: 'Memory Layout' },
    { type: 'code', language: 'text', code: '1 2 3\n4 5 6' },

    { type: 'h2', content: '3. Multidimensional Arrays' },
    { type: 'text', content: 'Arrays having more than two dimensions.' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'int data[2][3][4];' },

    { type: 'h2', content: 'Array Operations' },
    { type: 'h3', content: 'Searching' },
    { type: 'list', items: ['Linear Search', 'Binary Search (sorted arrays)'] },
    { type: 'h3', content: 'Sorting' },
    { type: 'list', items: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'] },
    { type: 'h3', content: 'Common Processing' },
    { type: 'list', items: ['Sum of elements', 'Average', 'Maximum', 'Minimum', 'Reverse', 'Copy', 'Merge'] },

    { type: 'h2', content: 'Passing Arrays to Functions' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'void display(int arr[],int size);' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: 'void display(int arr[],int size)\n{\n    for(int i=0;i<size;i++)\n        printf("%d ",arr[i]);\n}' },

    { type: 'h2', content: 'Array vs Variables' },
    { type: 'table', headers: ['Variables', 'Arrays'], rows: [['One value', 'Multiple values'], ['Separate names', 'Single name'], ['Difficult for large data', 'Easy for large data']] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Easy data management.', 'Fast element access.', 'Works efficiently with loops.', 'Required for many algorithms.'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Fixed size.', 'Stores same data type only.', 'Insertion/deletion is expensive.'] },

    { type: 'h2', content: 'Complete Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main()\n{\n    int marks[5];\n    int sum=0;\n\n    for(int i=0;i<5;i++)\n        scanf("%d",&marks[i]);\n\n    for(int i=0;i<5;i++)\n        sum+=marks[i];\n\n    printf("Total=%d",sum);\n\n    return 0;\n}' },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Index starts from 0.', 'Array size is fixed.', 'Same data type only.', 'Stored in contiguous memory.', 'Access using index.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Accessing index out of bounds.\n• Using wrong loop limits.\n• Forgetting array size.\n• Confusing index with value.\n• Uninitialized arrays.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful names.\n• Validate indices.\n• Avoid magic numbers.\n• Use loops for traversal.\n• Initialize arrays whenever possible.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is an array?', 'Why does indexing start at 0?', 'Difference between 1D and 2D arrays?', 'What are multidimensional arrays?', 'Can arrays store different data types?', 'What happens when an index exceeds array size?', 'How are arrays stored in memory?', 'Difference between array and pointer?', 'How are arrays passed to functions?', 'What are the limitations of arrays?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'int a[5]={10,20,30,40,50};\nprintf("%d",a[3]);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 30', 'B. 40', 'C. 50', 'D. Error'], answer: 'B. 40' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'int a[3]={1,2,3};\nprintf("%d",a[0]+a[2]);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], answer: 'B. 4' },

    { type: 'text', content: 'Question 3: Output?' },
    { type: 'code', language: 'c', code: 'int a[2][2]={{1,2},{3,4}};\nprintf("%d",a[1][0]);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], answer: 'C. 3' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'What happens if you access a[10] in an array of size 5?', options: ['A. Returns 0', 'B. Compilation Error', 'C. Undefined behavior (out-of-bounds access)', 'D. Automatically resizes array'], answer: 'C. Undefined behavior (out-of-bounds access)' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which searching algorithm requires a sorted array?', options: ['A. Linear Search', 'B. Binary Search', 'C. Bubble Search', 'D. Selection Search'], answer: 'B. Binary Search' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Arrays\n• One-dimensional arrays\n• Two-dimensional arrays\n• Multidimensional arrays\n• Traversal\n• Input/output\n• Memory representation\n• Array operations\n• Passing arrays to functions\n• Advantages and limitations' }
  ]
};
