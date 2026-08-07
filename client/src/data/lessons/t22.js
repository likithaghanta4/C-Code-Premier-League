export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand the C preprocessor.', 'Learn common preprocessor directives.', 'Use header files and macros.', 'Write conditional compilation directives.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'The C Preprocessor processes source code before compilation. Its commands begin with the # symbol and are called preprocessor directives.' },
    
    { type: 'h2', content: 'Why Use Preprocessor Directives?' },
    { type: 'list', items: ['Include header files', 'Create constants using macros', 'Write reusable code', 'Enable conditional compilation', 'Improve readability'] },

    { type: 'h2', content: 'Common Preprocessor Directives' },
    { type: 'list', items: ['#include', '#define', '#undef', '#ifdef', '#ifndef', '#if', '#elif', '#else', '#endif', '#error', '#pragma'] },

    { type: 'h2', content: '#include' },
    { type: 'text', content: 'Includes a header file.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n#include "myheader.h"' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n\nint main()\n{\n    printf("Hello World");\n    return 0;\n}' },

    { type: 'h2', content: '#define' },
    { type: 'text', content: 'Defines a macro.' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: '#define PI 3.14159' },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n#define PI 3.14\n\nint main()\n{\n    printf("%.2f", PI);\n    return 0;\n}' },

    { type: 'h2', content: 'Macro with Arguments' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n#define SQUARE(x) ((x)*(x))\n\nint main()\n{\n    printf("%d", SQUARE(5));\n    return 0;\n}' },

    { type: 'h2', content: '#undef' },
    { type: 'text', content: 'Removes a macro definition.' },
    { type: 'code', language: 'c', code: '#define MAX 100\n#undef MAX' },

    { type: 'h2', content: '#ifdef' },
    { type: 'text', content: 'Compiles code if a macro is defined.' },
    { type: 'code', language: 'c', code: '#define DEBUG\n\n#ifdef DEBUG\nprintf("Debug Mode");\n#endif' },

    { type: 'h2', content: '#ifndef' },
    { type: 'text', content: 'Compiles code if a macro is NOT defined (often used for Include Guards).' },
    { type: 'code', language: 'c', code: '#ifndef VALUE\n#define VALUE 10\n#endif' },

    { type: 'h2', content: '#if, #elif, and #else' },
    { type: 'code', language: 'c', code: '#define AGE 18\n\n#if AGE >= 18\nprintf("Eligible");\n#endif' },
    { type: 'code', language: 'c', code: '#define MARKS 75\n\n#if MARKS >= 90\nprintf("A");\n#elif MARKS >= 60\nprintf("B");\n#else\nprintf("C");\n#endif' },

    { type: 'h2', content: '#endif' },
    { type: 'text', content: 'Ends a conditional directive.' },
    { type: 'code', language: 'c', code: '#ifdef TEST\nprintf("Testing");\n#endif' },

    { type: 'h2', content: '#error & #pragma' },
    { type: 'h3', content: '#error' },
    { type: 'text', content: 'Displays a compilation error.' },
    { type: 'code', language: 'c', code: '#error Compiler not supported' },
    { type: 'h3', content: '#pragma' },
    { type: 'text', content: 'Provides compiler-specific instructions.' },
    { type: 'code', language: 'c', code: '#pragma once' },

    { type: 'h2', content: 'Header Files' },
    { type: 'h3', content: 'Standard Header Files' },
    { type: 'list', items: ['stdio.h', 'stdlib.h', 'string.h', 'math.h', 'ctype.h', 'time.h'] },
    { type: 'h3', content: 'User Defined Header File' },
    { type: 'text', content: 'myheader.h' },
    { type: 'code', language: 'c', code: '#define MESSAGE "Welcome"' },
    { type: 'text', content: 'main.c' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n#include "myheader.h"\n\nint main()\n{\n    printf("%s", MESSAGE);\n    return 0;\n}' },

    { type: 'h2', content: 'Advantages' },
    { type: 'list', items: ['Reusable code', 'Easy maintenance', 'Faster development', 'Conditional compilation', 'Better organization'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use uppercase macro names (e.g., PI, MAX).\n• Parenthesize macro arguments to avoid precedence issues (e.g., `((x)*(x))`).\n• Prefer const for typed constants.\n• Avoid unnecessary macros.\n• Protect header files using include guards (`#ifndef`, `#define`, `#endif`).' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Missing parentheses in macros.\n• Redefining macros accidentally.\n• Forgetting include guards.\n• Incorrect conditional directives.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is the C preprocessor?', 'What is a preprocessor directive?', 'Difference between <file.h> and "file.h"?', 'What is a macro?', 'Difference between #define and const?', 'What is #ifdef?', 'Purpose of #pragma?', 'Why use include guards?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'Which symbol starts a preprocessor directive?', options: ['A. @', 'B. $', 'C. #', 'D. %'], answer: 'C. #' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'Which directive includes header files?', options: ['A. #import', 'B. #include', 'C. #define', 'D. #insert'], answer: 'B. #include' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which directive defines constants?', options: ['A. #const', 'B. #define', 'C. #macro', 'D. #set'], answer: 'B. #define' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'Which directive removes a macro definition?', options: ['A. #delete', 'B. #remove', 'C. #undef', 'D. #clear'], answer: 'C. #undef' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which directive ends conditional compilation?', options: ['A. #end', 'B. #stop', 'C. #endif', 'D. #close'], answer: 'C. #endif' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Preprocessor basics\n• Header files\n• Macros\n• Conditional compilation\n• Include guards\n• Compiler directives' }
  ]
};
