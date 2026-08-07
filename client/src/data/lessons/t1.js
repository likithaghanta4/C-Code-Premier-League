export default {
  blocks: [
    {
      type: 'h2',
      content: 'Learning Objectives',
    },
    {
      type: 'list',
      items: [
        'Understand what C programming is and its significance.',
        'Learn the basic structure of a C program.',
        'Write, compile, and run your first "Hello, World!" program.',
      ],
    },
    {
      type: 'h2',
      content: 'Introduction',
    },
    {
      type: 'text',
      content: 'C is a powerful, general-purpose programming language created in the early 1970s by Dennis Ritchie at Bell Labs. Despite its age, C remains one of the most widely used programming languages in the world. It is the foundation for many modern languages like C++, Java, and Python.',
    },
    {
      type: 'keypoint',
      title: 'Why learn C?',
      content: 'Learning C gives you a deep understanding of how computers work, including memory management and system-level operations. It is essential for operating systems, embedded systems, and high-performance applications.',
    },
    {
      type: 'h2',
      content: 'Your First C Program',
    },
    {
      type: 'text',
      content: 'Let\'s dive right in and look at the most famous program in computer science: "Hello, World!".',
    },
    {
      type: 'code',
      language: 'c',
      title: 'hello.c',
      code: `#include <stdio.h>

int main() {
    // Print a message to the console
    printf("Hello, World!\\n");
    
    return 0;
}`,
    },
    {
      type: 'h3',
      content: 'Code Explanation',
    },
    {
      type: 'list',
      items: [
        '#include <stdio.h>: This is a preprocessor command that tells the compiler to include the Standard Input/Output library before compiling. We need this to use the printf function.',
        'int main(): This is the main function where the execution of a C program begins. Every C program must have exactly one main() function.',
        '// ... : This is a comment. It is ignored by the compiler and used to write notes in the code.',
        'printf("..."): This is a built-in library function used to print output to the screen. \\n is an escape sequence that moves the cursor to the next line.',
        'return 0;: This statement terminates the main() function and returns the value 0 to the calling process (usually the operating system). A return value of 0 generally indicates successful execution.',
      ],
    },
    {
      type: 'h2',
      content: 'Syntax Rules',
    },
    {
      type: 'text',
      content: 'When writing C code, there are a few strict rules you must follow:',
    },
    {
      type: 'list',
      items: [
        'Case Sensitivity: C is highly case-sensitive. main and Main are treated differently.',
        'Semicolons: Every statement in C must end with a semicolon (;). It acts as a statement terminator.',
        'Braces: Curly braces {} define a block of code, such as the body of a function.',
      ],
    },
    {
      type: 'mistake',
      content: 'Forgetting the semicolon at the end of a statement is the most common error for beginners. The compiler will usually throw an error on the NEXT line, confusing new programmers.',
    },
    {
      type: 'h2',
      content: 'Interview Questions',
    },
    {
      type: 'note',
      title: 'Common Question',
      content: 'Q: What is the purpose of the main() function in C?\nA: The main() function is the entry point of a C program. Execution starts from the beginning of main(). Without it, the program will not compile into an executable.',
    },
    {
      type: 'h2',
      content: 'Summary',
    },
    {
      type: 'text',
      content: 'In this lesson, you learned that C is a foundational language used for system programming. You examined the basic structure of a C program and understood the role of #include, main(), printf(), and return 0. In the next lesson, we will explore the fascinating history of C and why it was created.',
    },
  ],
};
