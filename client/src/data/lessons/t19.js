export default {
  blocks: [
    { type: 'h2', content: 'Learning Objectives' },
    { type: 'list', items: ['Understand file handling in C.', 'Create, open, read, write, append and close files.', 'Work with text and binary files.', 'Learn important file handling functions.', 'Handle file errors safely.'] },
    
    { type: 'h2', content: 'Introduction' },
    { type: 'text', content: 'File handling allows a C program to store data permanently in files instead of memory. The data remains available even after the program terminates.' },
    
    { type: 'h2', content: 'Why Do We Need File Handling?' },
    { type: 'list', items: ['Permanent storage', 'Data backup', 'Report generation', 'Log files', 'Configuration files', 'Sharing data between programs'] },

    { type: 'h2', content: 'Definition' },
    { type: 'note', title: 'Definition', content: 'File handling is the process of creating, opening, reading, writing, updating and closing files.' },

    { type: 'h2', content: 'File Types' },
    { type: 'list', items: ['Text Files (.txt, .csv)', 'Binary Files (.dat, .bin)'] },

    { type: 'h2', content: 'Header File & FILE Pointer' },
    { type: 'code', language: 'c', code: '#include <stdio.h>\n\nFILE *fp;' },

    { type: 'h2', content: 'Opening Files - fopen()' },
    { type: 'h3', content: 'Syntax' },
    { type: 'code', language: 'c', code: 'fp = fopen("sample.txt", "w");' },
    { type: 'h3', content: 'File Modes' },
    { type: 'table', headers: ['Mode', 'Description'], rows: [['r', 'Read'], ['w', 'Write (overwrite/create)'], ['a', 'Append'], ['r+', 'Read & Write'], ['w+', 'Read & Write (overwrite)'], ['a+', 'Read & Append'], ['rb', 'Read Binary'], ['wb', 'Write Binary'], ['ab', 'Append Binary'], ['rb+', 'Read/Write Binary'], ['wb+', 'Read/Write Binary'], ['ab+', 'Append/Read Binary']] },
    { type: 'h3', content: 'Example' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","w");\n    if(fp==NULL)\n    {\n        printf("Cannot open file");\n        return 1;\n    }\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'Closing Files - fclose()' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","w");\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'Character I/O Functions' },
    { type: 'h3', content: 'fputc() - Write One Character' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","w");\n    fputc(\'A\',fp);\n    fclose(fp);\n    return 0;\n}' },
    { type: 'h3', content: 'fgetc() - Read One Character' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","r");\n    char ch=fgetc(fp);\n    printf("%c",ch);\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'String I/O Functions' },
    { type: 'h3', content: 'fputs() - Write String' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","w");\n    fputs("Hello C",fp);\n    fclose(fp);\n    return 0;\n}' },
    { type: 'h3', content: 'fgets() - Read String' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("sample.txt","r");\n    char str[20];\n    fgets(str,20,fp);\n    printf("%s",str);\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'Formatted I/O Functions' },
    { type: 'h3', content: 'fprintf() - Formatted Write' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("student.txt","w");\n    fprintf(fp,"%d %s",101,"Likitha");\n    fclose(fp);\n    return 0;\n}' },
    { type: 'h3', content: 'fscanf() - Formatted Read' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("student.txt","r");\n    int id;\n    char name[20];\n    fscanf(fp,"%d%s",&id,name);\n    printf("%d %s",id,name);\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'Binary I/O Functions' },
    { type: 'h3', content: 'fwrite() - Binary Write' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("data.dat","wb");\n    int n=100;\n    fwrite(&n,sizeof(int),1,fp);\n    fclose(fp);\n    return 0;\n}' },
    { type: 'h3', content: 'fread() - Binary Read' },
    { type: 'code', language: 'c', code: '#include<stdio.h>\nint main()\n{\n    FILE *fp=fopen("data.dat","rb");\n    int n;\n    fread(&n,sizeof(int),1,fp);\n    printf("%d",n);\n    fclose(fp);\n    return 0;\n}' },

    { type: 'h2', content: 'File Position Functions' },
    { type: 'h3', content: 'fseek()' },
    { type: 'code', language: 'c', code: 'FILE *fp=fopen("sample.txt","r");\nfseek(fp,0,SEEK_END);\nfclose(fp);' },
    { type: 'h3', content: 'ftell()' },
    { type: 'code', language: 'c', code: 'FILE *fp=fopen("sample.txt","r");\nfseek(fp,0,SEEK_END);\nprintf("%ld",ftell(fp));\nfclose(fp);' },
    { type: 'h3', content: 'rewind()' },
    { type: 'code', language: 'c', code: 'FILE *fp=fopen("sample.txt","r");\nrewind(fp);\nfclose(fp);' },

    { type: 'h2', content: 'EOF and Error Functions' },
    { type: 'h3', content: 'feof()' },
    { type: 'code', language: 'c', code: 'while(!feof(fp))\n{\n    printf("%c",fgetc(fp));\n}' },
    { type: 'h3', content: 'ferror()' },
    { type: 'text', content: 'Checks whether a file error has occurred.' },
    { type: 'h3', content: 'clearerr()' },
    { type: 'text', content: 'Clears the error and EOF indicators.' },
    { type: 'h3', content: 'perror()' },
    { type: 'code', language: 'c', code: 'FILE *fp=fopen("abc.txt","r");\nif(fp==NULL)\n    perror("Error");' },

    { type: 'h2', content: 'Working with Structures' },
    { type: 'code', language: 'c', code: 'struct Student\n{\n    int id;\n    char name[20];\n};' },
    { type: 'code', language: 'c', code: 'fwrite(&student,sizeof(student),1,fp);\nfread(&student,sizeof(student),1,fp);' },

    { type: 'h2', content: 'Applications' },
    { type: 'list', items: ['Student Management', 'Banking Systems', 'Employee Records', 'Log Files', 'Configuration Files', 'Report Generation'] },

    { type: 'h2', content: 'Advantages & Limitations' },
    { type: 'h3', content: 'Advantages' },
    { type: 'list', items: ['Permanent storage', 'Easy retrieval', 'Supports large data', 'Data sharing'] },
    { type: 'h3', content: 'Limitations' },
    { type: 'list', items: ['Slower than RAM', 'Permission issues', 'Error handling required'] },

    { type: 'h2', content: 'Best Practices' },
    { type: 'tip', title: 'Best Practices', content: '• Always check fopen() for NULL.\n• Always close files.\n• Use the correct file mode.\n• Handle errors properly.' },

    { type: 'h2', content: 'Common Mistakes' },
    { type: 'mistake', title: 'Common Mistakes', content: '• Forgetting fclose()\n• Wrong file mode\n• Ignoring NULL\n• Reading before opening' },

    { type: 'h2', content: 'Interview Questions' },
    { type: 'list', items: ['What is file handling?', 'What is FILE *?', 'Difference between text and binary files?', 'Explain fopen() modes.', 'Difference between fprintf() and fwrite()?', 'Difference between fscanf() and fread()?', 'Purpose of fseek(), ftell() and rewind()?', 'Why check fopen() for NULL?', 'What does feof() do?', 'What is the purpose of perror()?'] },
    
    { type: 'h2', content: 'Mini Knowledge Check (Advanced)' },
    
    { type: 'text', content: 'Question 1:' },
    { type: 'quiz', question: 'Which mode appends data to an existing file?', options: ['A. w', 'B. a', 'C. r', 'D. w+'], answer: 'B. a' },

    { type: 'text', content: 'Question 2:' },
    { type: 'quiz', question: 'Which function writes binary data?', options: ['A. fprintf()', 'B. fputs()', 'C. fputc()', 'D. fwrite()'], answer: 'D. fwrite()' },

    { type: 'text', content: 'Question 3:' },
    { type: 'quiz', question: 'Which function reads binary data?', options: ['A. fscanf()', 'B. fread()', 'C. fgets()', 'D. fgetc()'], answer: 'B. fread()' },

    { type: 'text', content: 'Question 4:' },
    { type: 'quiz', question: 'What does fopen() return on failure?', options: ['A. -1', 'B. 0', 'C. NULL', 'D. EOF'], answer: 'C. NULL' },

    { type: 'text', content: 'Question 5:' },
    { type: 'quiz', question: 'Which function returns the current file position?', options: ['A. fseek()', 'B. ftell()', 'C. rewind()', 'D. feof()'], answer: 'B. ftell()' },

    { type: 'text', content: 'Question 6:' },
    { type: 'quiz', question: 'Which function moves the file pointer?', options: ['A. ftell()', 'B. fseek()', 'C. ferror()', 'D. fputc()'], answer: 'B. fseek()' },
    
    { type: 'h2', content: 'Summary' },
    { type: 'text', content: 'Students learned:\n\n• File handling basics\n• FILE pointer\n• File modes\n• Reading functions\n• Writing functions\n• Binary files\n• File positioning\n• Error handling\n• Best practices' }
  ]
};
