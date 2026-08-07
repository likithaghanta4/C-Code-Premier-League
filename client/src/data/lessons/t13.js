export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand strings and character arrays.', 'Declare, initialize, read, and print strings.', 'Learn standard string functions from <string.h>.', 'Compare strings safely.', 'Understand memory representation.', 'Pass strings to functions.', 'Avoid common mistakes.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'A string in C is a sequence of characters terminated by the null character (\\0). Internally, a string is stored as a character array.' },
    { type: 'h3', content: 'Example:' },
    { type: 'code', language: 'c', code: 'char name[] = "Likitha";' },
    { type: 'h3', content: 'Memory Representation:' },
    { type: 'code', language: 'text', code: 'Index : 0 1 2 3 4 5 6  7\nValue : L i k i t h a \\0' },

    { type: 'h2', content: 'Why Strings?' },
    { type: 'list', items: ['Store names and text.', 'Process user input.', 'Build menus.', 'File handling.', 'Password validation.', 'Text manipulation.'] },

    { type: 'h2', content: 'Characteristics' },
    { type: 'list', items: ['Stored as char arrays.', 'Ends with \\0.', 'Index starts at 0.', 'Mutable when stored in a character array.'] },

    { type: 'h2', content: 'Declaration & Initialization' },
    { type: 'h3', content: 'Declaration' },
    { type: 'code', language: 'c', code: 'char name[20];\nchar city[30];' },
    { type: 'h3', content: 'Initialization' },
    { type: 'code', language: 'c', code: 'char name[] = "C Language";\nchar word[6] = {\'H\',\'e\',\'l\',\'l\',\'o\',\'\\0\'};' },

    { type: 'h2', content: 'Reading Strings' },
    { type: 'h3', content: 'Using scanf()' },
    { type: 'code', language: 'c', code: 'scanf("%s", name);' },
    { type: 'note', title: 'Limitation', content: 'Reads only up to the first space.' },
    { type: 'h3', content: 'Using fgets()' },
    { type: 'code', language: 'c', code: 'fgets(name, sizeof(name), stdin);' },
    { type: 'tip', title: 'Recommendation', content: 'Recommended because it safely reads spaces and prevents buffer overflows.' },

    { type: 'h2', content: 'Displaying Strings' },
    { type: 'code', language: 'c', code: 'printf("%s", name);\nputs(name);' },

    { type: 'h2', content: 'String Library <string.h>' },
    { type: 'text', content: 'To use standard string functions, you must include the header file:' },
    { type: 'code', language: 'c', code: '#include <string.h>' },

    { type: 'h2', content: 'Common String Functions' },
    { type: 'h3', content: '1. strlen()' },
    { type: 'text', content: 'Returns the length of a string (excluding \\0).' },
    { type: 'code', language: 'c', code: 'strlen(name);' },
    { type: 'h3', content: '2. strcpy()' },
    { type: 'text', content: 'Copies one string to another.' },
    { type: 'code', language: 'c', code: 'strcpy(destination, source);' },
    { type: 'h3', content: '3. strncpy()' },
    { type: 'text', content: 'Copies a specified number of characters.' },
    { type: 'code', language: 'c', code: 'strncpy(dest, src, n);' },
    { type: 'h3', content: '4. strcat()' },
    { type: 'text', content: 'Concatenates two strings.' },
    { type: 'code', language: 'c', code: 'strcat(first, second);' },
    { type: 'h3', content: '5. strncat()' },
    { type: 'text', content: 'Concatenates n characters.' },
    { type: 'h3', content: '6. strcmp()' },
    { type: 'text', content: 'Compares two strings. Returns:\n0 → equal\n<0 → first is smaller\n>0 → first is greater' },
    { type: 'code', language: 'c', code: 'strcmp(s1, s2);' },
    { type: 'h3', content: 'Other Important Functions' },
    { type: 'list', items: ['strncmp() - Compares first n characters.', 'strchr() - Finds the first occurrence of a character.', 'strrchr() - Finds the last occurrence.', 'strstr() - Finds a substring.', 'strtok() - Splits a string into tokens.', 'memset() - Fills memory with a value.', 'memcpy() - Copies memory.', 'memmove() - Copies memory safely when regions overlap.', 'memcmp() - Compares memory blocks.'] },

    { type: 'h2', content: 'Traversing a String' },
    { type: 'code', language: 'c', code: 'for(int i=0; name[i]!=\'\\0\'; i++)\n{\n    printf("%c ", name[i]);\n}' },

    { type: 'h2', content: 'Passing Strings to Functions' },
    { type: 'code', language: 'c', code: 'void display(char str[])\n{\n    printf("%s", str);\n}' },

    { type: 'h2', content: 'String vs Character Array' },
    { type: 'table', headers: ['Character', 'String'], rows: [['One character', 'Collection of characters'], ['char ch=\'A\';', 'char name[]="ABC";']] },

    { type: 'h2', content: 'String vs Character Pointer' },
    { type: 'code', language: 'c', code: 'char name[]="Hello";\nchar *ptr="Hello";' },
    { type: 'note', title: 'Difference', content: 'Array contents can be modified. String literals pointed to by pointers should not be modified (often causes segmentation fault).' },

    { type: 'h2', content: 'Complete Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char first[20]="Hello";\n    char second[]=" World";\n\n    strcat(first, second);\n\n    printf("%s\\n", first);\n    printf("Length = %zu\\n", strlen(first));\n\n    return 0;\n}' },
    { type: 'h3', content: 'Output' },
    { type: 'code', language: 'text', code: 'Hello World\nLength = 11' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Login systems', 'Search engines', 'Text editors', 'Compilers', 'Chat applications', 'File processing', 'DNA sequence analysis'] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Easy text processing.', 'Rich standard library.', 'Efficient storage.'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Fixed array size.', 'Buffer overflow if not handled properly.', 'Manual memory management in many cases.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting the null character (\\0).\n• Comparing strings with ==.\n• Writing beyond array bounds.\n• Not allocating enough space.\n• Ignoring newline from fgets().' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Prefer fgets() over scanf("%s") for input.\n• Check array size before copying.\n• Use strcmp() instead of == for comparison.\n• Avoid unsafe functions like gets().' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a string in C?', 'Why is \\0 important?', 'Difference between char[] and char*?', 'Difference between strlen() and sizeof()?', 'Difference between strcpy() and strncpy()?', 'Difference between strcmp() and ==?', 'Why is fgets() preferred?', 'Explain strtok().', 'Explain memcpy() vs memmove().', 'How are strings passed to functions?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1: Output?' },
    { type: 'code', language: 'c', code: 'char s[]="Hello";\nprintf("%zu",strlen(s));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 4', 'B. 5', 'C. 6', 'D. Error'], answer: 'B. 5' },

    { type: 'text', content: 'Question 2: Output?' },
    { type: 'code', language: 'c', code: 'char a[]="ABC";\nchar b[]="ABC";\nprintf("%d",strcmp(a,b));' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. 1', 'B. -1', 'C. 0', 'D. 3'], answer: 'C. 0' },

    { type: 'text', content: 'Question 3: Output?' },
    { type: 'code', language: 'c', code: 'char s[10]="Hi";\nstrcat(s," C");\nprintf("%s",s);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. HiC', 'B. Hi C', 'C. C Hi', 'D. Error'], answer: 'B. Hi C' },

    { type: 'text', content: 'Question 4: Output?' },
    { type: 'code', language: 'c', code: 'char s[]="Programming";\nprintf("%c",s[6]);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. g', 'B. r', 'C. a', 'D. m'], answer: 'D. m' },

    { type: 'text', content: 'Question 5: Why does the following fail?' },
    { type: 'code', language: 'c', code: 'if(name=="Admin")' },
    { type: 'quiz', question: 'Select the correct reason:', options: ['A. Strings cannot be compared', 'B. == compares addresses, not string contents', 'C. Missing header file', 'D. Admin is not a string'], answer: 'B. == compares addresses, not string contents' },

    { type: 'text', content: 'Question 6: Is this a valid C string?' },
    { type: 'code', language: 'c', code: 'char s[]={\'A\',\'B\',\'C\'};\nprintf("%s",s);' },
    { type: 'quiz', question: 'Select the correct output:', options: ['A. Prints ABC', 'B. Compilation Error', 'C. Prints ABC followed by garbage values (no \\0)', 'D. Prints 3'], answer: 'C. Prints ABC followed by garbage values (no \\0)' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• String fundamentals\n• Character arrays\n• Declaration and initialization\n• Input/output\n• Memory representation\n• String traversal\n• Standard library functions\n• Passing strings to functions\n• String comparison' }
  ]
};
