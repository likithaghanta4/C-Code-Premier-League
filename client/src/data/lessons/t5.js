export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand what a variable is.', 'Explain why variables are used.', 'Declare and initialize variables.', 'Follow variable naming rules.', 'Differentiate between local and global variables.', 'Understand how variables are stored in memory.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'A variable is a named memory location used to store data. Instead of writing fixed values throughout a program, programmers store values in variables so they can be changed, reused, and processed easily.' },
    
    { type: 'h2', content: 'Why Do We Need Variables?' },
    { type: 'list', items: ['Store data temporarily.', 'Perform calculations.', 'Accept user input.', 'Reuse values.', 'Make programs dynamic.'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'A variable is a named location in memory used to store a value that can change during program execution.' },
    
    { type: 'h2', content: 'Memory Representation' },
    { type: 'table', headers: ['Variable Name', 'Value'], rows: [['age', '20'], ['salary', '25000.50'], ['grade', 'A']] },

    { type: 'h2', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'data_type variable_name;\n\nint age;\nfloat salary;\nchar grade;' },

    { type: 'h2', content: 'Variable Declaration' },
    { type: 'code', language: 'c', code: 'int marks;' },

    { type: 'h2', content: 'Variable Initialization' },
    { type: 'code', language: 'c', code: 'int marks = 90;' },

    { type: 'h2', content: 'Declaration and Initialization Together' },
    { type: 'code', language: 'c', code: 'int age = 20;\nfloat salary = 35000.75;\nchar grade = \'A\';' },

    { type: 'h2', content: 'Variable Naming Rules' },
    { type: 'list', items: ['Use letters, digits and underscore.', 'Do not start with a digit.', 'No spaces.', 'Keywords cannot be variable names.', 'Use meaningful names.'] },
    
    { type: 'table', headers: ['Valid', 'Invalid'], rows: [['age', '2age'], ['studentName', 'total marks'], ['total_marks', 'int']] },

    { type: 'h2', content: 'Example Program' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\n\nint main()\n{\n    int age = 20;\n    printf("Age = %d", age);\n    return 0;\n}' },

    { type: 'h2', content: 'Output' },
    { type: 'code', language: 'text', code: 'Age = 20' },
    
    { type: 'h2', content: 'Explanation' },
    { type: 'list', items: ['int age = 20; declares and initializes a variable.', 'printf() prints the value.', 'return 0; ends the program.'] },

    { type: 'h2', content: 'Local and Global Variables' },
    { type: 'text', content: 'Variables declared inside a function are known as Local variables, whereas those declared outside of any function are called Global variables.' },
    { type: 'code', language: 'c', title: 'Local Variable', code: 'int main()\n{\n    int age = 20;\n}' },
    { type: 'code', language: 'c', title: 'Global Variable', code: '#include<stdio.h>\n\nint count = 0;\n\nint main()\n{\n    printf("%d", count);\n    return 0;\n}' },

    { type: 'h2', content: 'Memory Diagram' },
    { type: 'code', language: 'text', code: '+-----------+\n| age = 20  |\n+-----------+' },

    { type: 'h2', content: 'Key Points' },
    { type: 'list', items: ['Variables store data.', 'Every variable has a data type.', 'Variables can change during execution.', 'Scope determines accessibility.'] },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting initialization.\n• Invalid variable names.\n• Using variables before assigning values.' },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Use meaningful names.\n• Initialize variables.\n• Keep scope minimal.' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is a variable?', 'Difference between declaration and initialization?', 'What is scope?', 'Difference between local and global variables?', 'Rules for variable naming?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check' },
    { type: 'quiz', question: 'Which statement declares an integer variable?', options: ['A. int age;', 'B. age int;', 'C. integer age;', 'D. age = int;'], answer: 'A. int age;' },
    { type: 'quiz', question: 'Which is a valid variable name?', options: ['A. 2marks', 'B. total marks', 'C. total_marks', 'D. int'], answer: 'C. total_marks' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• Variables\n• Declaration\n• Initialization\n• Naming rules\n• Local vs Global variables\n• Memory representation' }
  ]
};
