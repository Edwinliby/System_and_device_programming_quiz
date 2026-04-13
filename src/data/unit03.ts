import { Question } from '../types';

export const unit03Questions: Question[] = [
  {
    topic: "C/C++ projects",
    text: "In C/C++ projects",
    code: null,
    opts: [
      { s: "A C++ source file typically uses the extension .cpp.", c: true },
      { s: "Header files may use extensions such as .h or .hpp.", c: true },
      { s: "A C++ project normally consists only of a single .cpp file.", c: false },
      { s: "Separating declarations in headers and definitions in .cpp files can help create libraries.", c: true },
      { s: "C++ is almost always implemented as an interpreted language.", c: false }
    ]
  },
  {
    topic: "IO streams",
    text: "IO streams and basic console IO",
    code: null,
    opts: [
      { s: "std::cout is the standard output stream in C++.", c: true },
      { s: "std::cin is the standard input stream in C++.", c: true },
      { s: "std::cerr is buffered in the same way as std::clog.", c: false },
      { s: "std::endl inserts a newline and flushes the output buffer.", c: true },
      { s: "The C stdio functions printf and scanf are safer than C++ streams by default.", c: false }
    ]
  },
  {
    topic: "Namespaces",
    text: "Namespaces and using",
    code: null,
    opts: [
      { s: "A namespace groups identifiers to avoid name collisions.", c: true },
      { s: "std is the namespace that contains the standard C++ library facilities.", c: true },
      { s: "using namespace std; makes all std names visible without qualification.", c: true },
      { s: "It is recommended to put using namespace std; in header files.", c: false },
      { s: "using std::cout; introduces only cout from namespace std.", c: true }
    ]
  },
  {
    topic: "Arithmetic & literals",
    text: "Basic arithmetic and literals",
    code: null,
    opts: [
      { s: "Integer literals can be written in decimal, octal, or hexadecimal in C++.", c: true },
      { s: "A floating-point literal must always use an exponent part (e.g., 1.0e3).", c: false },
      { s: "Character literals are written inside single quotes, e.g., 'a'.", c: true },
      { s: "String literals are written inside single quotes, e.g., \"text\".", c: false },
      { s: "Mixing signed and unsigned integers can lead to surprising results in expressions.", c: true }
    ]
  },
  {
    topic: "Fundamental types",
    text: "Fundamental types and qualifiers",
    code: null,
    opts: [
      { s: "The type bool can hold the values 1 and 0.", c: true },
      { s: "A const object must be initialized at the point of definition.", c: true },
      { s: "A volatile object tells the compiler that its value can change outside the program's control.", c: true },
      { s: "A const volatile variable cannot be read by the program.", c: false },
      { s: "The qualifiers const and volatile cannot be combined on the same object.", c: false }
    ]
  },
  {
    topic: "Pointers",
    text: "Pointers",
    code: null,
    opts: [
      { s: "A pointer stores the address of another object.", c: true },
      { s: "The size of a pointer depends on the type it points to.", c: false },
      { s: "The null pointer literal in modern C++ is nullptr.", c: true },
      { s: "It is good practice to initialize a pointer to nullptr if it doesn't point to a valid object yet.", c: true },
      { s: "Pointer arithmetic is allowed on all pointer types, including void*.", c: false }
    ]
  },
  {
    topic: "References",
    text: "References",
    code: null,
    opts: [
      { s: "A reference is an alternative name (alias) for an existing object.", c: true },
      { s: "A reference does not have to be initialized when it is defined.", c: false },
      { s: "After initialization, a reference can be reseated to refer to a different object.", c: false },
      { s: "A reference cannot be bound directly to a literal.", c: false },
      { s: "In typical implementations, references are often realized internally using pointers.", c: true }
    ]
  },
  {
    topic: "const and pointers",
    text: "const and pointers",
    code: null,
    opts: [
      { s: "A \"top-level const\" applies to the object pointed itself.", c: true },
      { s: "A \"low-level const\" applies to the pointer object to.", c: true },
      { s: "A pointer to const int prevents changing the int through that pointer.", c: true },
      { s: "A const pointer to int cannot change the address it stores.", c: true },
      { s: "A const pointer to const int cannot change either the address or the pointed value.", c: true }
    ]
  },
  {
    topic: "volatile",
    text: "volatile and hardware interaction",
    code: null,
    opts: [
      { s: "volatile prevents certain compiler optimizations on accesses to the variable.", c: true },
      { s: "volatile is often used for memory-mapped I/O registers.", c: true },
      { s: "volatile alone provides full thread synchronization and atomicity in C++20.", c: false },
      { s: "A const volatile object may be changed by hardware but not by C++ code.", c: true },
      { s: "volatile guarantees that no data race can occur in a multithreaded program.", c: false }
    ]
  },
  {
    topic: "auto & decltype",
    text: "auto and decltype",
    code: null,
    opts: [
      { s: "The keyword auto lets the compiler deduce the type of a variable from its initializer.", c: true },
      { s: "A variable declared with auto must have an initializer.", c: true },
      { s: "In a single declaration using auto, different variables can have different deduced type.", c: false },
      { s: "decltype yields the type of an expression without evaluating that expression.", c: true },
      { s: "decltype can be used only with fundamental types.", c: false }
    ]
  },
  {
    topic: "Control statements",
    text: "Control statements",
    code: null,
    opts: [
      { s: "C++ supports if, if-else, and switch for conditional execution.", c: true },
      { s: "The while and do-while statements are both used for loops.", c: true },
      { s: "The for statement in C++11 can iterate directly over elements of a container.", c: true },
      { s: "The break statement does not exist in C++.", c: false },
      { s: "The continue statement terminates the entire program.", c: false }
    ]
  },
  {
    topic: "Exceptions",
    text: "Exceptions (basic)",
    code: null,
    opts: [
      { s: "throw is used to signal that an exceptional condition has occurred.", c: true },
      { s: "try blocks contain code that might throw exceptions.", c: true },
      { s: "catch blocks handle exceptions of specific types.", c: true },
      { s: "A catch(...) handler can catch exceptions of any type.", c: true },
      { s: "Exceptions are the only way to report errors in C++.", c: false }
    ]
  },
  {
    topic: "Old-style & static_cast",
    text: "Old-style casts and static_cast",
    code: null,
    opts: [
      { s: "static_cast can safely cast between completely unrelated pointer types.", c: false },
      { s: "A C-style cast can behave like static_cast, const_cast, or reinterpret_cast depending on context.", c: true },
      { s: "static_cast is typically used to convert between related arithmetic types.", c: true },
      { s: "static_cast performs compile-time checks on the validity of the conversion.", c: true },
      { s: "Using static_cast to narrow a value (e.g., double to int) cannot lose information.", c: false }
    ]
  },
  {
    topic: "const_cast",
    text: "const_cast",
    code: null,
    opts: [
      { s: "const_cast can remove const qualification from a pointer or reference type.", c: true },
      { s: "Writing through a pointer obtained by const_cast from a truly const object has undefined behavior.", c: true },
      { s: "const_cast can add const to a type but cannot remove it.", c: false },
      { s: "const_cast is often used in the implementation of function overloads that differ by const.", c: true },
      { s: "const_cast can change the underlying type of the object.", c: false }
    ]
  },
  {
    topic: "reinterpret_cast",
    text: "reinterpret_cast",
    code: null,
    opts: [
      { s: "reinterpret_cast is intended for low-level, implementation-dependent conversions.", c: true },
      { s: "reinterpret_cast can be used to view the bit pattern of a float as an int.", c: true },
      { s: "reinterpret_cast is generally safer than static_cast for arithmetic types.", c: false },
      { s: "Misusing reinterpret_cast cannot lead to undefined behavior.", c: false },
      { s: "reinterpret_cast is equivalent to using unions in C for type punning.", c: false }
    ]
  },
  {
    topic: "Function basics",
    text: "Function basics",
    code: null,
    opts: [
      { s: "A C++ function has a return type, a name, and a parameter list.", c: true },
      { s: "A function that does not return a value should be declared with return type void.", c: true },
      { s: "In C the main may have parameters such as int argc, char* argv[] but not in C++.", c: false },
      { s: "Every function must take at least one parameter.", c: false },
      { s: "A function declared but never defined can cause linker errors if it is called.", c: true }
    ]
  },
  {
    topic: "Parameter passing",
    text: "Parameter passing (value, pointer, reference)",
    code: null,
    opts: [
      { s: "Passing by value copies the argument into the function parameter.", c: true },
      { s: "Changes to a parameter passed by value affect the caller's variable.", c: false },
      { s: "Passing a pointer by value allows the function to modify the object pointed to.", c: true },
      { s: "A reference parameter must be checked for not being nullptr.", c: false },
      { s: "Passing by reference allows the function to operate directly on the caller's variable.", c: true },
      { s: "A reference parameter can be bound to nullptr.", c: false }
    ]
  },
  {
    topic: "Swapping pitfalls",
    text: "Common pitfalls in swapping",
    code: null,
    opts: [
      { s: "A swap function that takes arguments by value will not swap the caller's variables.", c: true },
      { s: "To swap caller variables, swap should use reference parameters.", c: true },
      { s: "Swapping via pointers requires dereferencing inside the function.", c: true },
      { s: "Swapping via copies is always more efficient than using references.", c: false },
      { s: "The standard library provides std::swap for general use.", c: true }
    ]
  },
  {
    topic: "Const parameters",
    text: "Constant parameters in functions",
    code: null,
    opts: [
      { s: "Parameters that a function does not modify should be declared const when passed by reference.", c: true },
      { s: "Declaring a parameter const makes it illegal to modify that parameter inside the function.", c: true },
      { s: "const parameters can help the compiler catch unintended modifications.", c: true },
      { s: "const parameters change the calling syntax at the call site.", c: false },
      { s: "A const reference parameter can bind to temporaries and large objects efficiently.", c: true }
    ]
  },
  {
    topic: "Variadic functions",
    text: "Functions with varying parameters",
    code: null,
    opts: [
      { s: "C++ supports parameter packs via templates for variadic functions.", c: true },
      { s: "std::initializer_list can be used when all varying arguments share the same type.", c: true },
      { s: "The ellipsis (...) syntax supports C-style variadic functions.", c: true },
      { s: "Variadic functions using ellipsis perform compile-time type checking for all arguments.", c: false },
      { s: "Variadic functions need special handling to process their arguments.", c: true }
    ]
  },
  {
    topic: "Overloading",
    text: "Function overloading",
    code: null,
    opts: [
      { s: "In C++, multiple functions can have the same name in the same scope.", c: true },
      { s: "Overloaded functions cannot differ in their parameter list.", c: false },
      { s: "Overloading based only on different return types is allowed.", c: false },
      { s: "The compiler selects the best-matching overload at compile time.", c: true },
      { s: "Overloading can simplify APIs by avoiding many different function names.", c: true }
    ]
  },
  {
    topic: "Default arguments",
    text: "Default arguments",
    code: null,
    opts: [
      { s: "A parameter with a default argument may be omitted at the call site.", c: true },
      { s: "If a parameter has a default value, all previous parameters must also have default values.", c: false },
      { s: "Default arguments are typically specified in function declarations.", c: true },
      { s: "The same parameter can be given different default values in the same scope.", c: false },
      { s: "Default arguments are bound at compile time, not at runtime.", c: true }
    ]
  },
  {
    topic: "Function pointers",
    text: "Pointers to functions (conceptual)",
    code: null,
    opts: [
      { s: "A function pointer can point to objects as well as functions.", c: false },
      { s: "The name of a function can decay to a pointer to that function.", c: true },
      { s: "A function pointer can be passed as an argument to another function.", c: true },
      { s: "A function pointer holds the address of executable code.", c: true },
      { s: "A function pointer can be dereferenced and called using the same parameter list as the function type.", c: true }
    ]
  },
  {
    topic: "Classes",
    text: "Classes and basic concepts",
    code: null,
    opts: [
      { s: "A class defines a new type that bundles data and related operations.", c: true },
      { s: "Member functions are also called methods.", c: true },
      { s: "In C++, a class can be defined only with the keyword class.", c: false },
      { s: "A class can only contain data members, not functions.", c: false },
      { s: "One goal is to make user-defined types behave similarly to built-in types.", c: true }
    ]
  },
  {
    topic: "struct vs class",
    text: "Struct vs class and access",
    code: null,
    opts: [
      { s: "For a struct, members are private by default.", c: false },
      { s: "For a class, members are public by default.", c: false },
      { s: "Access specifiers include public, private, and protected.", c: true },
      { s: "Changing an access specifier changes the memory footprint of the object.", c: false },
      { s: "public members are accessible from any part of the program with access to the object.", c: true }
    ]
  },
  {
    topic: "Encapsulation",
    text: "Encapsulation and access control",
    code: null,
    opts: [
      { s: "Encapsulation groups data and methods into a single unit.", c: true },
      { s: "Encapsulation helps separate interface from implementation.", c: true },
      { s: "Good practice is to make data members public whenever possible.", c: false },
      { s: "protected members are not accessible in derived classes.", c: false },
      { s: "public methods often form the visible interface of a class.", c: true }
    ]
  },
  {
    topic: "this pointer",
    text: "Objects and the \"this\" pointer",
    code: null,
    opts: [
      { s: "An object is an instance of a class.", c: true },
      { s: "Each object of a given class has its own copy of the non-static data members.", c: true },
      { s: "Member functions are typically shared among all objects of a class.", c: true },
      { s: "Inside non-static member functions, \"this\" is a pointer to the current object.", c: true },
      { s: "The \"this\" pointer can be changed to point to another object.", c: false }
    ]
  },
  {
    topic: "Inheritance",
    text: "Inheritance",
    code: null,
    opts: [
      { s: "Inheritance allows creating new classes based on existing ones.", c: true },
      { s: "A derived class can only change members of the base class.", c: false },
      { s: "Public inheritance models an \"is-a\" relationship.", c: true },
      { s: "Multiple inheritance allows a class to inherit from more than one base class.", c: true },
      { s: "Inheritance is the only way to reuse code in C++.", c: false }
    ]
  },
  {
    topic: "Constructors & destructors",
    text: "Constructors and destructors",
    code: null,
    opts: [
      { s: "A constructor is a special member function that initializes an object.", c: true },
      { s: "A default constructor takes no parameters.", c: true },
      { s: "The user must never create a constructor as the compiler always generates one implicitly.", c: false },
      { s: "A destructor must be called explicitly when an object is destroyed.", c: false },
      { s: "There can be multiple destructors with different parameter lists in a class.", c: false }
    ]
  },
  {
    topic: "Resource-managing classes",
    text: "Resource-managing classes (simple example)",
    code: null,
    opts: [
      { s: "A class that allocates dynamic memory should typically release it in its destructor.", c: true },
      { s: "Failing to free dynamically allocated memory in a destructor may cause memory leaks.", c: true },
      { s: "A constructor that allocates memory can generate an exception if allocation fails.", c: true },
      { s: "A destructor is responsible for cleaning up internal dynamic resources.", c: true },
      { s: "If a class only contains automatic (stack) objects, a custom destructor is always required.", c: false }
    ]
  }
];
