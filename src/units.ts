import { unit02Questions } from "./data/unit02";
import { unit03Questions } from "./data/unit03";
import { unit04s01Questions } from "./data/unit04s01";
import { unit04s07Questions } from "./data/unit04s07";
import { Unit } from "./types";

export const UNITS: Unit[] = [
  {
    id: 0,
    tag: "Linux · Unit 02",
    title: "Unit 02 — Linux, Filesystem & Processes",
    desc: "Linux environment, bash, Makefile, filesystem, disk allocation, processes, pipes, signals, and POSIX threads.",
    icon: "🐧",
    topics: [
      "Bash",
      "Filesystem",
      "Processes",
      "Pipes",
      "Signals",
      "Threads",
      "Makefile",
    ],
    questions: unit02Questions,
    unitLabel: "System & Device Programming · Unit 02",
    quizTitle: "Linux Env, Filesystem, Processes & Threads",
  },
  {
    id: 1,
    tag: "C++ · Unit 03",
    title: "Unit 03 — C++ Fundamentals",
    desc: "Types, qualifiers, pointers, references, casts, functions, classes, OOP and more.",
    icon: "🧱",
    topics: [
      "Pointers",
      "References",
      "Classes",
      "Functions",
      "Casts",
      "Exceptions",
    ],
    questions: unit03Questions,
    unitLabel: "C++ Programming · Unit 03",
    quizTitle: "C++ Fundamentals",
  },
  {
    id: 2,
    tag: "C++ · Unit 04 · s01–06",
    title: "Unit 04 s01–06 — I/O, Arrays & STL",
    desc: "File I/O, C-arrays, sequential/associative containers, iterators, and algorithms.",
    icon: "📦",
    topics: [
      "File I/O",
      "Arrays",
      "Vectors",
      "Maps/Sets",
      "Algorithms",
      "Iterators",
    ],
    questions: unit04s01Questions,
    unitLabel: "C++ Programming · Unit 04 · s01–06",
    quizTitle: "I/O, Arrays, Containers & Algorithms",
  },
  {
    id: 3,
    tag: "C++ · Unit 04 · s07–11",
    title: "Unit 04 s07–11 — Memory & Templates",
    desc: "Dynamic memory, smart pointers, RAII, copy/move semantics, and function/class templates.",
    icon: "🧠",
    topics: [
      "new/delete",
      "Smart Pointers",
      "Copy/Move",
      "RAII",
      "Templates",
      "Rule of 5",
    ],
    questions: unit04s07Questions,
    unitLabel: "C++ Programming · Unit 04 · s07–11",
    quizTitle: "Memory, Smart Pointers, Copy/Move & Templates",
  },
];
