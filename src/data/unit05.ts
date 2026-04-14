import { Question } from '../types';

// C++ Unit 05 — Concurrency, Shared Memory & Semaphores
// Source: Stefano Quer overheads u05-review
export const unit05Questions: Question[] = [
  {
    topic: "Shared Memory (System V)",
    text: "Regarding System V Shared Memory in Unix/Linux, which of the following statements are correct?",
    code: null,
    points: 1,
    opts: [
      { s: "shmget() is used to create a new shared memory segment or open an existing one.", c: true },
      { s: "shmat() attaches the shared memory segment to the process address space and returns a pointer.", c: true },
      { s: "The size of a shared memory segment can be changed dynamically after allocation.", c: false },
      { s: "Shared memory is generally faster than Message Queues because it avoids data copying between process and kernel.", c: true },
      { s: "shmdt() is used to destroy the shared memory segment permanently.", c: false },
    ]
  },
  {
    topic: "POSIX Semaphores",
    text: "Which of the following descriptions of POSIX semaphore operations are correct?",
    code: null,
    points: 1,
    opts: [
      { s: "sem_wait() decrements the semaphore value; if it is 0, the calling thread blocks.", c: true },
      { s: "sem_post() increments the semaphore value and potentially wakes up a waiting thread.", c: true },
      { s: "sem_init() can only be used for semaphores shared between threads of the same process.", c: false },
      { s: "sem_open() is used to create or access a named semaphore for inter-process synchronization.", c: true },
      { s: "sem_trywait() behaves like sem_wait() but returns an error instead of blocking if the value is 0.", c: true },
    ]
  },
  {
    topic: "Condition Variables",
    text: "Regarding POSIX Condition Variables, which statements are TRUE?",
    code: null,
    points: 1,
    opts: [
      { s: "Condition variables allow threads to synchronize based on the actual value of data.", c: true },
      { s: "A mutex must always be associated with a condition variable to avoid race conditions.", c: true },
      { s: "pthread_cond_wait() atomicity includes unlocking the mutex and putting the thread to sleep.", c: true },
      { s: "pthread_cond_signal() wakes up all threads waiting on the condition variable.", c: false },
      { s: "pthread_cond_broadcast() wakes up one waiting thread.", c: false },
    ]
  },
  {
    topic: "Message Queues (System V)",
    text: "Consider System V Message Queues. Which statements are correct?",
    code: null,
    points: 1,
    opts: [
      { s: "msgget() returns a message queue identifier associated with a key.", c: true },
      { s: "msgsnd() is always a non-blocking operation.", c: false },
      { s: "msgrcv() allows receiving a message of a specific type by specifying a type value.", c: true },
      { s: "The kernel maintains a queue of messages for each identifier.", c: true },
    ]
  },
  {
    topic: "Producer-Consumer Pattern",
    text: "In a producer-consumer implementation with multiple producers and consumers using semaphores and a finite buffer of size N:",
    code: null,
    points: 1,
    opts: [
      { s: "An 'empty' semaphore should be initialized to N.", c: true },
      { s: "A 'full' semaphore should be initialized to 0.", c: true },
      { s: "The mutex to protect the buffer should be locked after waiting on the 'empty'/'full' semaphores to avoid deadlock.", c: true },
      { s: "Producers should sem_wait(empty) before adding an item.", c: true },
      { s: "Consumers should sem_post(full) after taking an item.", c: false },
    ]
  },
  {
    topic: "Shared Memory vs Pipes",
    text: "Comparing Shared Memory and Pipes for IPC:",
    code: null,
    points: 1,
    opts: [
      { s: "Pipes provide automatic synchronization (reading from an empty pipe blocks).", c: true },
      { s: "Shared memory requires manual synchronization (e.g., using semaphores).", c: true },
      { s: "Pipes are better suited for large, random-access data structures.", c: false },
      { s: "Shared memory is persistent even after the creating process terminates.", c: true },
    ]
  },
  {
    topic: "ftok() utility",
    text: "Regarding the ftok() function used in System V IPC:",
    code: null,
    points: 1,
    opts: [
      { s: "It converts a pathname and a project identifier to a System V IPC key.", c: true },
      { s: "It guarantees that the generated key will be unique across the entire system.", c: false },
      { s: "The file specified by the pathname must exist for ftok() to work correctly.", c: true },
    ]
  },
  {
    topic: "Deadlock conditions",
    text: "Which of the following are necessary conditions for a deadlock to occur (Coffman conditions)?",
    code: null,
    points: 1,
    opts: [
      { s: "Mutual Exclusion", c: true },
      { s: "Hold and Wait", c: true },
      { s: "No Preemption", c: true },
      { s: "Circular Wait", c: true },
      { s: "Fair Scheduling", c: false },
    ]
  },
];
