export default {
  blocks: [
    {
      type: 'h2',
      content: 'Learning Objectives',
    },
    {
      type: 'list',
      items: [
        'Trace the origins and evolution of the C programming language.',
        'Understand the relationship between C and the UNIX operating system.',
        'Identify the predecessor languages that influenced C.',
      ],
    },
    {
      type: 'h2',
      content: 'The Origins of C',
    },
    {
      type: 'text',
      content: 'The C programming language was developed between 1969 and 1973 by Dennis Ritchie at Bell Labs. It was created to overcome the limitations of earlier languages and to write utilities for the newly developed UNIX operating system.',
    },
    {
      type: 'h3',
      content: 'The Predecessors: BCPL and B',
    },
    {
      type: 'text',
      content: 'Before C, there were two significant languages:\n\n1. BCPL (Basic Combined Programming Language): Developed in 1967 by Martin Richards.\n2. B: Developed in 1970 by Ken Thompson (co-creator of UNIX). The B language was largely based on BCPL.\n\nBoth BCPL and B were "typeless" languages. This meant that they dealt with only one data type (the machine word). While this was simple, it proved inefficient for the new PDP-11 computer, which supported different data sizes (bytes vs. words).',
    },
    {
      type: 'tip',
      content: 'Dennis Ritchie added data types (like char and int) to the B language. Because it was the successor to B, he named the new language "C".',
    },
    {
      type: 'h2',
      content: 'C and the UNIX Operating System',
    },
    {
      type: 'text',
      content: 'By 1973, C had become powerful enough that most of the UNIX operating system kernel, originally written in assembly language, was rewritten in C. This was a revolutionary step; it was one of the first operating system kernels implemented in a high-level language.',
    },
    {
      type: 'keypoint',
      title: 'Portability',
      content: 'Rewriting UNIX in C made the operating system highly portable. Instead of rewriting the entire OS in assembly for every new computer architecture, developers only needed to write a new C compiler for the target machine, and then recompile the UNIX source code.',
    },
    {
      type: 'h2',
      content: 'Standardization',
    },
    {
      type: 'text',
      content: 'As C became wildly popular in the 1980s, different compiler vendors added their own features, leading to compatibility issues. To resolve this, standard committees were formed:',
    },
    {
      type: 'table',
      headers: ['Year', 'Standard', 'Description'],
      rows: [
        ['1978', 'K&R C', 'Published by Brian Kernighan and Dennis Ritchie. Served as the informal standard.'],
        ['1989', 'ANSI C (C89)', 'First official standard by the American National Standards Institute.'],
        ['1990', 'ISO C (C90)', 'Adopted internationally by the ISO. Technically identical to C89.'],
        ['1999', 'C99', 'Introduced inline functions, new data types (long long), and variable-length arrays.'],
        ['2011', 'C11', 'Added multi-threading support and improved security features.'],
        ['2018', 'C18', 'The current standard, primarily fixing defects in C11 without adding major new features.']
      ]
    },
    {
      type: 'h2',
      content: 'Summary',
    },
    {
      type: 'text',
      content: 'C was born out of necessity to build the UNIX operating system. By introducing data types to the B language, Dennis Ritchie created a fast, portable, and immensely powerful tool that completely changed the software industry. Today, C continues to be standardized and remains highly relevant.'
    }
  ]
};
