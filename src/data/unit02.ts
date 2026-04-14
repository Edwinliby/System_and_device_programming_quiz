import { Question } from '../types';

// C++ Unit 02 — Linux Environment, Filesystem, Processes & Threads
// Source: Stefano Quer overheads u02-review (exam questions with solutions)
export const unit02Questions: Question[] = [

  // ── LINUX ENVIRONMENT ──────────────────────────────────────────────────────

  {
    topic: "Files & hard/soft links",
    text: "Given the sequence: touch f1; ln -s f1 f2; ln f1 f3; ln f1 f4; echo \"hello\" > f3; rm f1\n\nWhich of the following outputs are possible?",
    code: null,
    points: 2,
    opts: [
      { s: "cat f4 produces no output.", c: false },
      { s: "ls -l shows: f2 -> f1 (symlink), f3 and f4 with link-count 2 and size 6.", c: true },
      { s: "cat f4 outputs: hello", c: true },
      { s: "cat f2 outputs: hello", c: false },
      { s: "echo \"pippo\" > f2 recreates f1 (symlink write recreates the target), and ls -l then shows f1 with link-count 1.", c: true },
    ]
  },

  {
    topic: "Bash commands",
    text: "Which of the following statements about bash commands are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "echo \"three\" > g; echo -e \"four\\nfive\\nsix\" > g; cat g | wc -l  →  outputs: 1", c: false },
      { s: "echo \"three\" > g; echo \"four\\nfive\\nsix\" >> g; cat g | wc -l  →  outputs: 2", c: true },
      { s: "echo \"abaaab aaxxxaaaaaabbbaaas abbbeeedaaaa\" | egrep -e \"aax{3}aaa(aaa)*bbb+aaas\"; echo $?  →  outputs: 1", c: false },
      { s: "echo \"abaaab aaxxxaaaaaabbbaaas abbbeeedaaaa\" | tr -d a | egrep -e \"xxxa*b+s\"; echo $?  →  outputs \"bb xxxbbbs bbbeeed\" then 0", c: true },
      { s: "With file 'f' containing:\nstefano 10 aaa x\ngiulia 13 bbb x\nlodovica 14 bbb x\ngabriele 5 aaa x\n\ncat f | cut -d \" \" -f 2,4 | sort -nr  →  outputs: 14 x / 13 x / 10 x / 5 x", c: true },
      { s: "With the same file 'f', the command: egrep -v bbb f | head -n 1  →  outputs: lodovica 14 bbb x", c: false },
      { s: "With the same file 'f', the command: head -n 3 f | tail -n 1 | cut -d \" \" -f 3  →  outputs: bbb", c: true },
      { s: "echo \"stefano 10 aaa x\" | tr sa1e xb2x | tr e y  →  outputs: xtyfbno 20 bbb x", c: false },
    ]
  },

  {
    topic: "Makefile & .PHONY",
    text: "Given the Makefile below, which statements are correct?\n\nCC=gcc  FLAGS=-Wall -g  LIB=-lm\n.PHONY: clean distclean\n\nmainVet.o: mainVet.c my.h\n\t$(CC) $(FLAGS) -c mainVet.c $(LIB)\n\ninVet.o: inVet.c my.h\n\t$(CC) $(FLAGS) -c inVet.c $(LIB)\n\ntarget: mainVet.o inVet.o\n\t$(CC) $(FLAGS) -o myExe mainVet.o inVet.o $(LIB)\n\ndistclean: clean1 clean2\n\trm -f distclean\n\nclean1: clean3\n\trm -f clean1\n\nclean2:\n\trm -f clean2\n\nclean3:\n\trm -f clean3 rm -f clean3b",
    code: null,
    points: 2,
    opts: [
      { s: "Executing \"make distclean\" runs: rm -f distclean; rm -f clean2; rm -f clean1; rm -f clean3; rm -f clean3b", c: false },
      { s: "Executing \"make\" runs the default target named \"target\" by default.", c: false },
      { s: "Executing \"make target\" twice in sequence: the second time only runs \"gcc -Wall -g -o myExe mainVet.o inVet.o -lm\".", c: true },
      { s: "Targets listed after .PHONY are executed regardless of whether a file with the same name exists and is newer than dependencies.", c: true },
    ]
  },

  {
    topic: "find & regex",
    text: "Given the shell command:\nfind /home -maxdepth 3 -type f -regextype posix-extended -regex \"\\./( 2[468]|[3-5][02468]|6[02468])(xx|yy)*\\.(c|java)\" -exec cat {} \\; | tail -n 100\n\nWhich statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "The regular file ./35xx.java is selected by the find command.", c: false },
      { s: "For each selected file, this find command prints the last 100 lines.", c: false },
      { s: "The option -maxdepth 3 is useless because even removing it the command gives the same result (files are directly under /home).", c: true },
      { s: "The regular file ./42xxyyxxxx.c is selected by the find command.", c: true },
      { s: "The regex \\./( 2[468]|[3-5][02468]|6[02468])(xx*\\.(c|java)|yy*\\.(c|java)) is equivalent to the regex in the find command.", c: false },
    ]
  },

  {
    topic: "egrep pipelines",
    text: "Given the bash pipeline:\negrep -e \"^202101(2[7-8]|3[01])\" input.txt | egrep -e \"[1-9][0-9]*\\.[0-9]\" | egrep -e \"13\\.[127]\" | cut -d \" \" -f 2-4\n\nWith input.txt containing lines: 20210127 12.5 Stefano AXY, 20210128 13.1 Giulia AXY, 20210129 13.2 Gabriele AXY, 20210130 13.3 Manuele AXY, 20210131 13.7 Sara AXY, 20210201 14.3 Enrico AXY, 20210202 15.5 Pietro AXY.\n\nWhich lines are output?",
    code: null,
    points: 2,
    opts: [
      { s: "13.3 AXY", c: false },
      { s: "13.7 Sara AXY", c: true },
      { s: "13.1 AXY", c: false },
      { s: "13.7 AXY", c: false },
      { s: "13.3 Manuele AXY", c: false },
      { s: "13.2 AXY", c: false },
      { s: "13.1 Giulia AXY", c: true },
      { s: "13.2 Gabriele AXY", c: false },
    ]
  },

  // ── FILESYSTEM ─────────────────────────────────────────────────────────────

  {
    topic: "File encodings",
    text: "Consider the methods for encoding information in a file. Which of the following statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "UNICODE characters are always stored on 32 bits.", c: false },
      { s: "UNICODE is an extension of ASCII used to represent more than 256 characters.", c: true },
      { s: "ASCII files are often more compact than UNICODE files.", c: true },
      { s: "There are several versions of the ASCII table to keep track of different languages and notations.", c: true },
      { s: "The UNICODE encoding is used to store files in binary format.", c: false },
      { s: "Binary files are often more compact than UNICODE files.", c: true },
      { s: "The ASCII and UNICODE encodings always differ.", c: false },
    ]
  },

  {
    topic: "Disk block allocation",
    text: "A disk has 24 blocks of 1 MB each, numbered 0–23. Free(0)/Occupied(1) vector:\n0 1 1 0 0 0 1 0 0 1 1 1 1 1 0 0 1 0 1 0 0 1 0 0\n\nWhich statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "A 3.5 MB file CANNOT be allocated using a contiguous allocation strategy (largest free contiguous run = 3 blocks).", c: true },
      { s: "A 3.5 MB file CANNOT be allocated using a linked allocation strategy (there are 11 free blocks in total).", c: false },
      { s: "With BEST-FIT contiguous allocation, files F1=1.6 MB, F2=1.9 MB, F3=2.6 MB can all be allocated in order.", c: true },
      { s: "With FIRST-FIT contiguous allocation, files F1=1.6 MB, F2=1.9 MB, F3=2.6 MB can all be allocated in order.", c: false },
    ]
  },

  {
    topic: "Contiguous allocation",
    text: "Suppose files are allocated on a hard disk using contiguous allocation. Which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "It suffers from internal fragmentation.", c: true },
      { s: "Each block contains a pointer to the next block.", c: false },
      { s: "It suffers from external fragmentation.", c: true },
      { s: "Sequential access is immediate and easy to achieve.", c: true },
      { s: "Files can grow in size as long as there is space on the hard disk.", c: false },
    ]
  },

  {
    topic: "open/read/write/close system calls",
    text: "Regarding the system calls open(), read(), write() and close(), which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "write() can be used to write bytes to a file, console, or pipe without distinction.", c: true },
      { s: "open() takes exactly two parameters.", c: false },
      { s: "read() and write() can be used to read/write text (characters) or raw byte sequences.", c: true },
      { s: "open() takes exactly three parameters.", c: false },
      { s: "read() returns the number of elements read (like fread()), not the number of bytes.", c: false },
      { s: "When creating a file, the permissions of the new file can be set through open().", c: true },
    ]
  },

  {
    topic: "stat/lstat/fstat system calls",
    text: "Regarding the system calls stat(), lstat(), and fstat(), which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "If there is a symbolic link link_f1 pointing to f1, lstat() returns information about f1.", c: false },
      { s: "stat(), lstat(), and fstat() all have the same return values.", c: true },
      { s: "Among the information returned is the i-node number of the file.", c: true },
      { s: "stat() and fstat(), if applied on a regular file (not a symlink), are equivalent.", c: true },
      { s: "The three system calls allow listing entries contained in a directory.", c: false },
      { s: "The three system calls return a pointer to a struct stat.", c: true },
    ]
  },

  // ── PROCESSES ──────────────────────────────────────────────────────────────

  {
    topic: "Orphan processes",
    text: "Suppose a process becomes an \"orphan.\" Which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "The process is waiting for its parent to perform a wait().", c: false },
      { s: "The process becomes an orphan because it did not perform a wait().", c: false },
      { s: "The process will become a zombie upon termination.", c: false },
      { s: "The process is inherited by the \"init\" process.", c: true },
      { s: "The process will NOT become a zombie upon termination because init will inherit it.", c: true },
    ]
  },

  {
    topic: "fork/exit and zombie prevention",
    text: "Analyze the following code:\n\nif (fork() == 0) {   /* first child */\n  if (fork() == 0) { /* second child */\n    ...\n  } else {\n    exit(1);\n  }\n}\nwait();\n\nWhich statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "The parent can suffer from deadlock.", c: false },
      { s: "If the first child has performed exit(1), the second child will never become a zombie.", c: true },
      { s: "To have correct code we must insert a second wait() at the end.", c: false },
      { s: "When the first child terminates, the second child is inherited by init.", c: true },
      { s: "The parent waits for the termination of the first child.", c: true },
      { s: "The parent waits for the termination of both the first and second child.", c: false },
    ]
  },

  {
    topic: "Semaphore-based barrier (2 processes)",
    text: "A concurrent program has a single cyclic process P1() with 2 instances. The behavior: both instances run in parallel; when both finish P1(), both restart. Which of the following code implementations is correct? (Choose only one)",
    code: `// Option 1 — WRONG
int n=0; init(s,2); init(m,1); init(b,0);
while(1){ wait(s); P1(); wait(m); n++;
  if(n==2){ signal(s); signal(s); n=0; signal(b); }
  else{ signal(m); wait(b); } }

// Option 2 — CORRECT
int n=0; init(s,2); init(m,1); init(b,0);
while(1){ wait(s); P1(); wait(m); n++;
  if(n==2){ signal(s); signal(s); n=0; signal(b); signal(m); }
  else{ signal(m); wait(b); } }

// Option 3 — WRONG
int n=0; init(s,2); init(m,1);
while(1){ wait(s); P1(); wait(m); n++;
  if(n==2){ signal(s); signal(s); n=0; } signal(m); }`,
    points: 2,
    opts: [
      { s: "Option 1 is correct.", c: false },
      { s: "Option 2 is correct (releases mutex m after signalling the barrier semaphore b, preventing deadlock).", c: true },
      { s: "Option 3 is correct.", c: false },
    ]
  },

  {
    topic: "waitpid behaviour",
    text: "Suppose a process calls waitpid(). Which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "The process will receive SIGCHLD as soon as one of its children terminates.", c: true },
      { s: "The process can wait a maximum number of seconds.", c: false },
      { s: "The process exits waitpid() only at the termination of its first child.", c: false },
      { s: "The process may remain blocked on waitpid() even after a child has terminated (e.g., waiting for a specific PID).", c: true },
    ]
  },

  {
    topic: "Pipes — implementation",
    text: "Regarding the implementation of pipes in a Unix operating system, which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "Writing to a pipe in which all read-ends have been closed generates a SIGPIPE signal.", c: true },
      { s: "Attempting to write to a full pipe returns an error.", c: false },
      { s: "Attempting to write to a full pipe is normally blocking.", c: true },
      { s: "A constant (PIPE_BUF) indicates how many bytes can be written atomically to a pipe.", c: true },
      { s: "Write operations on a pipe are always performed atomically.", c: false },
      { s: "Reading from a pipe in which all write-ends have been closed generates a SIGPIPE signal.", c: false },
    ]
  },

  {
    topic: "SIGCHLD with SIG_IGN",
    text: "Suppose a process executes the instruction: signal(SIGCHLD, SIG_IGN);\n\nWhich statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "The process handles SIGCHLD signals with the default SIG_IGN macro (defined in signal.h).", c: true },
      { s: "The process will not have to execute a wait() or waitpid().", c: true },
      { s: "The process behaves in the standard way when SIGCHLD is received.", c: false },
      { s: "The process ignores SIGCHLD signals.", c: true },
      { s: "If the process executes wait(), it will return an error code.", c: true },
      { s: "A child process can become a zombie.", c: false },
    ]
  },

  {
    topic: "Signal-based process synchronization",
    text: "Two processes P1 and P2 execute the following pseudo-code concurrently:\n\nP1: while(1){ ... kill(pid_P2, SIGUSR1); pause(); A(); }\nP2: while(1){ pause(); B(); ... kill(pid_P1, SIGUSR2); }\n\nWhich statements are TRUE?",
    code: null,
    points: 2,
    opts: [
      { s: "It is possible for A() to execute consecutively more than once without any B() in between.", c: false },
      { s: "A() can be executed before B().", c: false },
      { s: "They are subject to deadlock (if P1's signal arrives before P2's pause()).", c: true },
      { s: "They are subject to starvation.", c: true },
      { s: "B() is certainly executed at least once.", c: false },
      { s: "B() is always executed before A().", c: true },
    ]
  },

  {
    topic: "Signals in UNIX/Linux",
    text: "Regarding the use of signals in a UNIX/Linux environment, which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "Using signal() you can decide to ignore ANY type of signal.", c: false },
      { s: "Inside a signal handler, only reentrant functions should be used.", c: true },
      { s: "The reception of a signal ALWAYS causes the termination of the process.", c: false },
      { s: "Using kill()+pause() and sem_post()+sem_wait() are EQUIVALENT for process synchronization.", c: false },
      { s: "Some signals (e.g., SIGKILL) cannot be ignored.", c: true },
      { s: "Executing a signal handler after a signal reception can lead to race conditions.", c: true },
    ]
  },

  {
    topic: "Pipes — properties",
    text: "Which of the following pipe statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "Write operations on a pipe are atomic up to the size of PIPE_BUF.", c: true },
      { s: "A read operation on a pipe is always blocking.", c: false },
      { s: "You can write on both sides of the pipe simultaneously.", c: false },
      { s: "A pipe gets full when the writer writes too much without the reader reading.", c: true },
      { s: "A write operation is typically blocking on a full pipe.", c: true },
    ]
  },

  // ── THREADS ────────────────────────────────────────────────────────────────

  {
    topic: "fork + pthread output",
    text: "In a relatively unloaded multiprocessor system, what does the following code produce on standard output? (Choose ONE)",
    code: `int i=0; pthread_t thread, thread2;

void *t1(void *a){
  pthread_detach(pthread_self());
  printf("%d", ++i);
  return NULL;
}

void *t2(void *a){
  sleep(1);
  printf("%d", ++i);
  return NULL;
}

int main() {
  if(fork())
    pthread_create(&thread, NULL, t1, NULL);
  sleep(1);
  if(fork())
    pthread_create(&thread2, NULL, t2, NULL);
  printf("A\\n");
}`,
    points: 2,
    opts: [
      { s: "AA", c: false },
      { s: "1AAAA", c: true },
      { s: "12AAAA", c: false },
      { s: "AAAA", c: false },
      { s: "1AA", c: false },
      { s: "12AA", c: false },
    ]
  },

  {
    topic: "Threads — race condition",
    text: "Analyze the following code. Which statements are correct?",
    code: `void *thread_main(void *p) {
  int x, *y;
  y = (int *)p;
  x = *y;
  x += x;
  *p = x;
  return NULL;
}

int main() {
  int data = 1;
  pthread_t one, two;
  pthread_create(&one, NULL, thread_main, &data);
  pthread_create(&two, NULL, thread_main, &data);
  pthread_join(one, NULL);
  pthread_join(two, NULL);
  printf("%d\\n", data);
  return 0;
}`,
    points: 2,
    opts: [
      { s: "The code contains a race condition.", c: true },
      { s: "The code does not contain a race condition.", c: false },
      { s: "The value 1 can be printed.", c: false },
      { s: "The value 0 can be printed.", c: false },
      { s: "The value 4 can be printed.", c: true },
      { s: "The value 2 can be printed.", c: true },
    ]
  },

  {
    topic: "Thread termination and process exit",
    text: "Consider the statement: \"If one thread terminates, all other threads in the process necessarily terminate.\"\n\nIn which of the following circumstances is this statement correct?",
    code: null,
    points: 2,
    opts: [
      { s: "When the thread performs a return from its start function.", c: false },
      { s: "When the thread calls exit().", c: true },
      { s: "When the thread performs a return from main().", c: true },
      { s: "When the thread receives a pthread_cancel() from another thread.", c: false },
      { s: "When the thread calls pthread_exit().", c: false },
    ]
  },

  {
    topic: "Processes vs threads — global variables",
    text: "Regarding sharing of global variables between processes and threads, which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "After fork(), the parent and child have independent copies of global variables (address space is duplicated).", c: true },
      { s: "After fork(), the parent and child share the same global variable in memory.", c: false },
      { s: "Threads within the same process share the same address space, so a write to a global variable by one thread is visible to all other threads.", c: true },
      { s: "Each thread has its own private copy of global variables.", c: false },
    ]
  },
  {
    topic: "Processes vs threads — shared resources",
    text: "Which of the following resources are shared between threads of the same process?",
    code: null,
    points: 2,
    opts: [
      { s: "Stack", c: false },
      { s: "Global Variables", c: true },
      { s: "Heap", c: true },
      { s: "CPU Registers", c: false },
      { s: "Open File Descriptors", c: true },
      { s: "Signal Handlers", c: true },
    ]
  },
  {
    topic: "Synchronization primitives",
    text: "Regarding technical comparisons between Mutexes and Semaphores, which statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "A mutex has a concept of 'ownership' (the thread that locks must be the one to unlock it).", c: true },
      { s: "A counting semaphore can be used to manage a pool of N identical resources.", c: true },
      { s: "A binary semaphore is exactly identical to a mutex in all implementations and OS semantics.", c: false },
      { s: "Waiting on a semaphore with value 0 causes the thread to block.", c: true },
      { s: "A mutex can be used for signaling between different processes by default without extra flags.", c: false },
    ]
  },
  {
    topic: "User vs Kernel Space",
    text: "Regarding the distinction between User and Kernel space in a modern Operating System, which of the following statements are correct?",
    code: null,
    points: 2,
    opts: [
      { s: "User mode execution is restricted to a subset of the CPU instruction set.", c: true },
      { s: "Switching from User to Kernel mode requires a trap or interrupt (e.g., via a system call).", c: true },
      { s: "Kernel mode allows direct access to all hardware and physical memory without restriction.", c: true },
      { s: "Processes running in User mode can directly modify the Page Table of other processes.", c: false },
    ]
  },
];
