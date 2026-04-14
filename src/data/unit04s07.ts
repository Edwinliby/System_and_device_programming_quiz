import { Question } from '../types';

// C++ Unit 04 s07–11 — Memory, Smart Pointers, Copy/Move & Templates
export const unit04s07Questions: Question[] = [
  {
    topic: "Static vs stack vs heap",
    text: "Static vs. stack vs. heap memory",
    code: null,
    points: 1,
    opts: [
      { s: "Static memory stores objects defined outside any functions and static class data members; their lifetime depends on their scope and is managed automatically by the compiler.", c: true },
      { s: "Stack memory stores non-static local objects defined inside functions; they are automatically managed by the compiler.", c: true },
      { s: "Heap memory stores dynamic objects allocated manually (e.g., with new in C++ or malloc in C); the programmer controls allocation and deallocation.", c: true },
      { s: "All C++ containers (e.g., std::vector) store their internal data structures on the stack, never on the heap.", c: false },
      { s: "Even if a container object itself is declared on the stack, its internal buffer (where the actual data is stored) is usually allocated on the heap.", c: true }
    ]
  },
  {
    topic: "malloc/free vs new/delete",
    text: "C-style dynamic memory (malloc/free) vs. C++ (new/delete)",
    code: null,
    points: 1,
    opts: [
      { s: "malloc and free automatically call constructors and destructors for objects, just like new and delete.", c: false },
      { s: "malloc and free are library functions that return raw memory (void*), requiring explicit type casting and manual initialization.", c: true },
      { s: "new and delete are operators in C++ that return fully typed pointers and call constructors/destructors automatically.", c: true },
      { s: "new can be overloaded to customize memory allocation behavior; malloc cannot be overloaded.", c: true },
      { s: "On failure, new throws an exception (std::bad_alloc), while malloc returns NULL (no exceptions).", c: true }
    ]
  },
  {
    topic: "new for single variables",
    text: "Using new to allocate single variables",
    code: `int *v1 = new int;
int *v2 = new int();
int *v3 = new int(12);`,
    points: 1,
    opts: [
      { s: "v1 points to a single int with undefined value (similar to malloc).", c: true },
      { s: "v2 points to a single int initialized to 0 (similar to calloc).", c: true },
      { s: "v3 points to a single int initialized to 12.", c: true },
      { s: "All three allocations (v1, v2, v3) automatically initialize the integer to 0.", c: false },
      { s: "If any of these allocations fail, new will return a nullptr by default (without throwing an exception).", c: false }
    ]
  },
  {
    topic: "new arrays and exceptions",
    text: "new with arrays and exceptions",
    code: `int *vect1 = new int[10];
int *vect2 = new (nothrow) int[20];`,
    points: 1,
    opts: [
      { s: "vect1 is an array of 10 integers; if allocation fails, new throws std::bad_alloc.", c: true },
      { s: "vect2 is an array of 20 integers; if allocation fails, new (nothrow) returns nullptr and does not throw an exception.", c: true },
      { s: "Both allocations always return nullptr on failure and never throw exceptions.", c: false },
      { s: "The normal version of new never returns nullptr; it always throws an exception on failure.", c: true },
      { s: "The nothrow version of new always throws std::bad_alloc if memory allocation fails.", c: false }
    ]
  },
  {
    topic: "Allocating const with new",
    text: "Allocating constant objects with new",
    code: `const int *p4 = new const int(100);
const my_class *p5 = new const my_class;`,
    points: 1,
    opts: [
      { s: "p4 points to a dynamically allocated constant integer initialized to 100.", c: true },
      { s: "p5 points to a dynamically allocated constant my_class object initialized via the default constructor.", c: true },
      { s: "Constant objects allocated with new must be initialized (explicitly or implicitly via a constructor).", c: true },
      { s: "The pointers p4 and p5 themselves are const, preventing reassignment of the pointer.", c: false },
      { s: "It is illegal to allocate const objects with new in C++.", c: false }
    ]
  },
  {
    topic: "Pointer indexing & bounds",
    text: "Pointer indexing and bounds checking",
    code: `double *p1 = new double;
*p1 = 7.3;
p1[0] = 8.2;
p1[7] = 9.4; // Error
p1[-4] = 2.4; // Error
double *p2 = new double[10];
*p2 = 7.3;
p2[0] = 8.2;
p2[7] = 9.4;
p2[-4] = 2.4; // Error`,
    points: 1,
    opts: [
      { s: "A pointer does not know the number of elements it points to; it only knows the address of the first element.", c: true },
      { s: "For p1 (single double), accessing p1[7] or p1[-4] is undefined behavior (out-of-bounds).", c: true },
      { s: "For p2 (array of 10), p2[7] is valid, but p2[-4] is undefined behavior.", c: true },
      { s: "C++ automatically checks array bounds at runtime, so p1[7] will throw an exception.", c: false },
      { s: "Pointers in C++ store metadata about the array size, allowing runtime bounds checking.", c: false }
    ]
  },
  {
    topic: "Pointer type safety",
    text: "Pointer type safety",
    code: `int *p1 = new int(10);
int *p2 = p1;
float *p3 = p1; // Error
char  *p4 = p1; // Error`,
    points: 1,
    opts: [
      { s: "A pointer does not know the actual type of object it points to; it just knows the address and assumes the declared type.", c: true },
      { s: "p2 = p1 is valid because both are int*.", c: true },
      { s: "p3 = p1 is valid because pointers can be freely converted between numeric types.", c: false },
      { s: "p4 = p1 is valid because char* can point to any memory location.", c: false },
      { s: "Assigning an int* to a float* or char* without a cast is a type error in C++.", c: true }
    ]
  },
  {
    topic: "Using delete",
    text: "Using delete to free memory",
    code: `int *v1 = new int;
int *v2 = new int(12);
int *vect1 = new int[10];
my_class *p = new my_class;
delete v1;
delete v2;
delete[] vect1;
delete p;`,
    points: 1,
    opts: [
      { s: "delete frees memory allocated for a single object and calls its destructor.", c: true },
      { s: "delete[] frees memory allocated for an array and calls the destructor for each element.", c: true },
      { s: "For each call to new, there should be a corresponding call to delete (or delete[] for arrays).", c: true },
      { s: "Using delete on an array (instead of delete[]) is safe and will correctly deallocate all elements.", c: false },
      { s: "Using delete[] on a single object is safe and has the same effect as delete.", c: false }
    ]
  },
  {
    topic: "Lifetime of dynamic objects",
    text: "Lifetime of dynamically allocated objects",
    code: `my_type *my_func(...arg) {
  return (new my_type(arg));
}
...
my_type *p = my_func(arg);`,
    points: 1,
    opts: [
      { s: "The dynamically allocated object pointed to by p exists until it is explicitly deleted.", c: true },
      { s: "If p goes out of scope, the pointer is destroyed, but the memory it points to is NOT automatically freed.", c: true },
      { s: "The memory referenced by p is automatically freed when p goes out of scope.", c: false },
      { s: "The caller of my_func is responsible for using the object and deleting p when done.", c: true },
      { s: "The compiler automatically inserts a delete call when p goes out of scope, preventing memory leaks.", c: false }
    ]
  },
  {
    topic: "Shallow copy",
    text: "Shallow copy",
    code: `class Box {
public:
  int *v;
  Box(int value) { v = new int(value); }
};
int main() {
  Box box1(10);
  Box box2 = box1;
  *box2.v = 20;
  std::cout << *box1.v;
  return 0;
}`,
    points: 1,
    opts: [
      { s: "A shallow copy duplicates the pointer value (memory address), not the data it points to.", c: true },
      { s: "After Box box2 = box1;, both box1.v and box2.v point to the same int in memory.", c: true },
      { s: "Modifying *box2.v changes the value seen by *box1.v, so the output is 20.", c: true },
      { s: "The default copy constructor performs a deep copy, so box1.v and box2.v point to different memory locations.", c: false },
      { s: "The output of the program is 10, because each box has its own independent copy of v.", c: false }
    ]
  },
  {
    topic: "Deep copy",
    text: "Deep copy",
    code: `class Box {
public:
  int *v;
  Box(int value) { v = new int(value); }
  Box(const Box &tmp) { v = new int(*tmp.v); } // Deep copy
};
int main() {
  Box box1(10);
  Box box2 = box1;
  *box2.v = 20;
  std::cout << *box1.v;
  return 0;
}`,
    points: 1,
    opts: [
      { s: "A deep copy duplicates the object and all objects it refers to recursively.", c: true },
      { s: "The user-defined copy constructor allocates new memory for box2.v and copies the value from box1.v.", c: true },
      { s: "After the copy, box1.v and box2.v point to different memory locations, so the output is 10.", c: true },
      { s: "Without the custom copy constructor, the default behavior would also perform a deep copy.", c: false },
      { s: "Modifying *box2.v affects *box1.v, so the output is 20.", c: false }
    ]
  },
  {
    topic: "Dangling pointers",
    text: "Dangling pointers",
    code: null,
    points: 1,
    opts: [
      { s: "A dangling pointer is one that points to memory that has been freed but still holds a valid memory address.", c: true },
      { s: "Dangling pointers are generated when memory is released (e.g., via delete), but the pointer variable is not reset.", c: true },
      { s: "Using a dangling pointer can cause undefined behavior, including memory violations and crashes.", c: true },
      { s: "Dangling pointers automatically become nullptr after delete is called, preventing accidental access.", c: false },
      { s: "Dangling pointers are very difficult to discover and trace back during debugging.", c: true }
    ]
  },
  {
    topic: "Memory leaks",
    text: "Memory leaks",
    code: null,
    points: 1,
    opts: [
      { s: "A memory leak occurs when dynamically allocated memory is not freed, and the program loses all references to it.", c: true },
      { s: "If a function leaks 1 byte but is called 10^7 times, the program leaks ~10 MB total.", c: true },
      { s: "Memory leaks are acceptable in most programs because modern operating systems reclaim leaked memory immediately.", c: false },
      { s: "Many programs (especially long-running servers) cannot afford memory leaks, as they degrade performance over time.", c: true },
      { s: "The C++ compiler automatically detects and prevents all memory leaks at compile time.", c: false }
    ]
  },
  {
    topic: "nullptr to avoid dangling",
    text: "Setting pointers to nullptr to avoid dangling pointers",
    code: `int *ptr;
delete ptr;
int *ptr = nullptr;
delete ptr;
ptr = nullptr;`,
    points: 1,
    opts: [
      { s: "Setting a pointer to nullptr when defining it or after deleting it helps avoid dangling pointers.", c: true },
      { s: "Calling delete on a nullptr is safe and does nothing.", c: true },
      { s: "Setting ptr = nullptr after delete ptr completely eliminates the risk of memory leaks.", c: false },
      { s: "If multiple pointers point to the same memory, setting one to nullptr after delete protects all of them from becoming dangling.", c: false },
      { s: "Standard strategies like setting pointers to nullptr provide only limited protection against dangling pointers and do not prevent memory leaks.", c: true }
    ]
  },
  {
    topic: "Dangling with multiple pointers",
    text: "Dangling pointers with multiple pointers",
    code: `int *p = new int();
auto q = p;
...
delete p;
p = nullptr;`,
    points: 1,
    opts: [
      { s: "After delete p; p = nullptr;, p is safe (points to nullptr), but q is still dangling.", c: true },
      { s: "Resetting p has no effect on q, which still holds the address of the freed memory.", c: true },
      { s: "Setting p = nullptr automatically updates all other pointers (q) pointing to the same memory.", c: false },
      { s: "The compiler will issue a warning or error if q is used after p is deleted.", c: false },
      { s: "It is hard to ensure that we free memory at the right time when multiple pointers share ownership.", c: true }
    ]
  },
  {
    topic: "Early return and leaks",
    text: "Early return and memory leaks",
    code: `void foo(unsigned length) {
  int* buffer = new int[length];
  ...
  if (condition)
    return;
  ...
  delete[] buffer;
  return;
}`,
    points: 1,
    opts: [
      { s: "If condition is true, the function returns early without calling delete[] buffer, causing a memory leak.", c: true },
      { s: "The compiler automatically inserts delete[] buffer before any return statement, preventing leaks.", c: false },
      { s: "It is hard to ensure that memory is freed at the right time when there are multiple exit points in a function.", c: true },
      { s: "The operating system will reclaim buffer when the function returns, so no leak occurs.", c: false },
      { s: "To avoid this leak, you should use RAII (e.g., smart pointers) or ensure delete[] buffer is called on all exit paths.", c: true }
    ]
  },
  {
    topic: "RAII",
    text: "RAII (Resource Acquisition Is Initialization)",
    code: null,
    points: 1,
    opts: [
      { s: "RAII binds the lifetime of a resource to the lifetime of an object (e.g., a smart pointer).", c: true },
      { s: "The resource is acquired in the constructor and released in the destructor, ensuring automatic cleanup.", c: true },
      { s: "RAII eliminates redundant tests and memory leaks by tying resource management to object scope.", c: true },
      { s: "RAII requires manual calls to delete or free to release resources when they are no longer needed.", c: false },
      { s: "Smart pointers (shared_ptr, unique_ptr, weak_ptr) implement RAII to manage dynamic memory automatically.", c: true }
    ]
  },
  {
    topic: "Smart pointers overview",
    text: "Smart pointers overview",
    code: null,
    points: 1,
    opts: [
      { s: "C++ offers three types of smart pointers: shared_ptr, unique_ptr, and weak_ptr.", c: true },
      { s: "Smart pointers are templates and work with all types.", c: true },
      { s: "shared_ptr allows multiple pointers to share ownership of the same object via reference counting.", c: true },
      { s: "unique_ptr represents exclusive ownership; only one unique_ptr can own a resource at a time.", c: true },
      { s: "weak_ptr owns the object it points to and automatically deletes it when the weak_ptr goes out of scope.", c: false }
    ]
  },
  {
    topic: "shared_ptr reference counting",
    text: "shared_ptr and reference counting",
    code: null,
    points: 1,
    opts: [
      { s: "shared_ptr uses a reference count to track how many pointers share ownership of a resource.", c: true },
      { s: "The reference count is incremented when we copy the shared_ptr.", c: true },
      { s: "The reference count is decremented when a shared_ptr goes out of scope or is assigned a new value.", c: true },
      { s: "When the reference count goes to zero, the resource is automatically deleted.", c: true },
      { s: "shared_ptr does not use reference counting; it relies on garbage collection instead.", c: false }
    ]
  },
  {
    topic: "shared_ptr with new",
    text: "Allocating shared_ptr with new (NOT recommended)",
    code: `shared_ptr<int> p1 = new int(42); // Error
shared_ptr<int> p2(new int(42));  // OK
shared_ptr<int> p3 = shared_ptr<int>(new int(9)); // OK`,
    points: 1,
    opts: [
      { s: "p1 is correct because implicit conversion from raw pointer to shared_ptr is allowed.", c: false },
      { s: "p1 is an error because shared_ptr does not allow implicit conversion from a raw pointer.", c: true },
      { s: "p2 is correct (direct initialization with raw pointer).", c: true },
      { s: "p3 is correct (explicit conversion from raw pointer).", c: true },
      { s: "Using new with shared_ptr is inefficient because it requires two separate memory allocations (one for the object, one for the control block).", c: true }
    ]
  },
  {
    topic: "make_shared",
    text: "make_shared (recommended)",
    code: null,
    points: 1,
    opts: [
      { s: "make_shared<T>(args) allocates and initializes an object of type T and returns a shared_ptr pointing to it.", c: true },
      { s: "make_shared performs a single memory allocation that includes both the object and its control block (reference counter).", c: true },
      { s: "make_shared is slower than using new with shared_ptr because it performs two allocations.", c: false },
      { s: "Using make_shared is the preferred way to create shared_ptr objects.", c: true },
      { s: "make_shared does not initialize the object; it only allocates memory.", c: false }
    ]
  },
  {
    topic: "unique_ptr allocation",
    text: "unique_ptr allocation",
    code: `std::unique_ptr<int> valuePtr(new int(15));`,
    points: 1,
    opts: [
      { s: "unique_ptr represents exclusive ownership of a dynamically allocated object.", c: true },
      { s: "unique_ptr does not have a make_unique function (in C++11), so we must use new.", c: true },
      { s: "unique_ptr allows multiple pointers to share ownership of the same resource.", c: false },
      { s: "When valuePtr goes out of scope, the destructor automatically deletes the allocated memory.", c: true },
      { s: "unique_ptr requires manual calls to delete to free memory.", c: false }
    ]
  },
  {
    topic: "unique_ptr no leaks",
    text: "unique_ptr and no memory leaks",
    code: `void my_func() {
  std::unique_ptr<int> valuePtr(new int(15));
  ...
  if (...)
    return;
  ...
}`,
    points: 1,
    opts: [
      { s: "There is no memory leak, even if the function returns early via if (...).", c: true },
      { s: "The unique_ptr destructor automatically deletes the allocated memory when it goes out of scope.", c: true },
      { s: "The programmer must manually call delete on valuePtr before each return to avoid a leak.", c: false },
      { s: "Using unique_ptr implements RAII, ensuring resources are released automatically.", c: true },
      { s: "unique_ptr does not call the destructor if the function exits early.", c: false }
    ]
  },
  {
    topic: "Returning unique_ptr",
    text: "Returning unique_ptr from a function",
    code: `unique_ptr<int> clone1(int p) {
  return unique_ptr<int>(new int(p));
}
unique_ptr<int> clone2(int p) {
  unique_ptr<int> lp(new int(p));
  return lp;
}`,
    points: 1,
    opts: [
      { s: "We cannot copy a unique_ptr, but we can return a local unique_ptr from a function (move semantics apply).", c: true },
      { s: "clone1 directly returns a newly created unique_ptr.", c: true },
      { s: "clone2 returns a local unique_ptr variable; the compiler uses move semantics (or RVO) to transfer ownership.", c: true },
      { s: "Returning a local unique_ptr causes a compilation error because copying is disallowed.", c: false },
      { s: "Both functions cause memory leaks because unique_ptr cannot be returned from a function.", c: false }
    ]
  },
  {
    topic: "weak_ptr overview",
    text: "weak_ptr overview",
    code: null,
    points: 1,
    opts: [
      { s: "weak_ptr is a smart pointer that does not control the lifetime of the object it points to.", c: true },
      { s: "weak_ptr points to an object managed by a shared_ptr without increasing the reference count.", c: true },
      { s: "weak_ptr owns the object it points to and automatically deletes it when the weak_ptr goes out of scope.", c: false },
      { s: "To use a weak_ptr, we must check if it is still valid using expired() and lock().", c: true },
      { s: "Creating a weak_ptr from a shared_ptr does not change the reference count of the shared_ptr.", c: true }
    ]
  },
  {
    topic: "Using weak_ptr",
    text: "Using weak_ptr",
    code: `struct person { string name; person(string n):name(n){} };
shared_ptr<person> p1 = make_shared<person>("Jack");
shared_ptr<person> p2;
shared_ptr<person> p3;
p2 = p1;
weak_ptr<person> wp(p1);
if (p3 = wp.lock()) {
  cout << p3->name << endl; // Jack
}
p1.reset(new person("rose"));
p2.reset();
p3.reset();`,
    points: 1,
    opts: [
      { s: "wp is a weak_ptr initialized from p1; it does not increase the reference count.", c: true },
      { s: "wp.lock() returns a shared_ptr if the object still exists; otherwise, it returns a null shared_ptr.", c: true },
      { s: "After p1.reset(new person(\"rose\")); p2.reset(); p3.reset();, the original \"Jack\" object is deleted (if no other shared_ptr owns it).", c: true },
      { s: "wp owns the \"Jack\" object, preventing it from being deleted when p1, p2, and p3 are reset.", c: false },
      { s: "Calling wp.lock() will always return a valid shared_ptr, even after all shared_ptr instances are reset.", c: false }
    ]
  },
  {
    topic: "Copy constructor overview",
    text: "Copy constructor overview",
    code: `class Foo {
public:
  Foo();            // Primary constructor
  Foo(const Foo&); // Copy constructor
};`,
    points: 1,
    opts: [
      { s: "A copy constructor creates a new object as a copy of an existing object of the same class.", c: true },
      { s: "The copy constructor has the same name as the class and takes a reference to a const object of the same type.", c: true },
      { s: "The copy constructor is called only when explicitly invoked, never implicitly.", c: false },
      { s: "The copy constructor may have additional parameters with default values.", c: true },
      { s: "The copy constructor is automatically deleted if the class has a destructor.", c: false }
    ]
  },
  {
    topic: "When copy constructor is called",
    text: "When is the copy constructor called?",
    code: `MyClass obj2 = obj1;
void foo(MyClass obj);
foo(obj1);
MyClass foo() { MyClass temp; return temp; }
MyClass my = foo();`,
    points: 1,
    opts: [
      { s: "The copy constructor is called when creating a new object using an existing object (MyClass obj2 = obj1;).", c: true },
      { s: "The copy constructor is called when an object is passed by value to a function (foo(obj1);).", c: true },
      { s: "The copy constructor may be called when an object is returned from a function by value (unless RVO/NRVO is applied).", c: true },
      { s: "The copy constructor is never called when returning an object from a function.", c: false },
      { s: "The copy constructor is called when an object is passed by reference to a function.", c: false }
    ]
  },
  {
    topic: "Synthesized copy constructor",
    text: "Synthesized copy constructor (shallow copy)",
    code: `class Class {
public:
  Class(const char *str);
  ~Class();
private:
  char *str;
};
Class::Class(const char *s) {
  str = new char[strlen(s)+1];
  strcpy(str, s);
}
Class::~Class() { delete[] str; }
// Compiler-generated:
Class::Class(const Class &another) { str = another.str; }`,
    points: 1,
    opts: [
      { s: "The synthesized copy constructor copies each non-static member from the given object to the created object.", c: true },
      { s: "In this case, the synthesized copy constructor copies the pointer str, not the string data (shallow copy).", c: true },
      { s: "The synthesized copy constructor automatically performs a deep copy of dynamically allocated memory.", c: false },
      { s: "If we rely on the synthesized copy constructor for this class, we may encounter double-delete errors when both objects are destroyed.", c: true },
      { s: "The synthesized copy constructor duplicates the string pointed to by str, allocating new memory.", c: false }
    ]
  },
  {
    topic: "User-defined copy constructor",
    text: "User-defined copy constructor (deep copy)",
    code: `Class::Class(const Class &another) {
  str = new char[strlen(another.str)+1];
  strcpy(str, another.str);
}`,
    points: 1,
    opts: [
      { s: "This user-defined copy constructor allocates new memory for str and copies the string data (deep copy).", c: true },
      { s: "After the copy, each object has its own independent copy of the string, avoiding double-delete errors.", c: true },
      { s: "This copy constructor performs a shallow copy, copying only the pointer value.", c: false },
      { s: "User-defined copy constructors are never necessary; the compiler always generates the correct behavior.", c: false },
      { s: "Defining a custom copy constructor is necessary when the class manages resources (e.g., dynamic memory, file handles).", c: true }
    ]
  },
  {
    topic: "Direct vs copy initialization",
    text: "Direct vs. copy initialization",
    code: `string s1(10, '.');
string s2(s1);
string s3 = s1;
string s4 = "1234567890";
string s5 = string(100, '9');
string s6;`,
    points: 1,
    opts: [
      { s: "Direct initialization calls the primary constructor that best matches the arguments.", c: true },
      { s: "Copy initialization calls the copy constructor to copy the right-hand operand into the object being created.", c: true },
      { s: "string s2(s1); uses copy initialization, not direct initialization.", c: false },
      { s: "string s3 = s1; uses copy initialization.", c: true },
      { s: "string s6; uses copy initialization to create an empty string.", c: false }
    ]
  },
  {
    topic: "Copy assignment operator overview",
    text: "Copy assignment operator overview",
    code: `class Foo {
public:
  Foo();
  Foo(const Foo&);
  Foo& operator=(const Foo&);
};`,
    points: 1,
    opts: [
      { s: "The copy assignment operator is used to assign the contents of one object to another object of the same class when both objects already exist.", c: true },
      { s: "The copy assignment operator has the name operator= and takes a reference to a const object of the same type.", c: true },
      { s: "The copy assignment operator typically returns a reference to *this to allow chaining (e.g., a = b = c;).", c: true },
      { s: "The copy assignment operator is called when creating a new object from an existing object.", c: false },
      { s: "The copy assignment operator is never automatically generated by the compiler.", c: false }
    ]
  },
  {
    topic: "When copy assignment is called",
    text: "When is the copy assignment operator called?",
    code: `obj2 = obj1;
MyClass foo() { MyClass temp; return temp; }
MyClass my1 = foo();
my2 = my1;`,
    points: 1,
    opts: [
      { s: "The copy assignment operator is called when you use = to assign one object to another and both objects already exist (obj2 = obj1;).", c: true },
      { s: "MyClass my1 = foo(); may use the copy constructor (or move constructor), not the copy assignment operator.", c: true },
      { s: "my2 = my1; calls the copy assignment operator if my2 already exists.", c: true },
      { s: "The copy assignment operator is called when a function returns an object by value.", c: false },
      { s: "The copy assignment operator is called when creating a new object with MyClass my1 = foo();.", c: false }
    ]
  },
  {
    topic: "Synthesized copy assignment",
    text: "Synthesized copy assignment operator",
    code: `sales& sales::operator=(const sales &orig) {
  number  = orig.number;
  sold    = sold;
  revenue = orig.revenue;
  return *this;
}`,
    points: 1,
    opts: [
      { s: "The synthesized copy assignment operator assigns each non-static member from the source object to the target object.", c: true },
      { s: "The user-defined copy assignment operator shown is equivalent to the synthesized version for this class.", c: true },
      { s: "The synthesized copy assignment operator performs a deep copy of dynamically allocated memory.", c: false },
      { s: "The copy assignment operator typically returns *this to enable assignment chaining.", c: true },
      { s: "The compiler never generates a copy assignment operator automatically.", c: false }
    ]
  },
  {
    topic: "Rule of Three",
    text: "The Rule of Three",
    code: null,
    points: 1,
    opts: [
      { s: "If you define any of the destructor, copy constructor, or copy assignment operator, you should define all three.", c: true },
      { s: "The Rule of Three ensures that your class correctly manages resources (e.g., memory) when objects are copied, assigned, or destroyed.", c: true },
      { s: "The Rule of Three states that you must define at least three member functions in every class.", c: false },
      { s: "If you define one but not the others, you might encounter problems such as memory leaks or double deletes.", c: true },
      { s: "The Rule of Three is obsolete in modern C++ and has been replaced by the Rule of Zero.", c: false }
    ]
  },
  {
    topic: "Move semantics motivation",
    text: "Move semantics motivation",
    code: null,
    points: 1,
    opts: [
      { s: "Move semantics allow \"moving\" instead of copying resources when the source object is about to be destroyed.", c: true },
      { s: "Moving can enhance performance by avoiding unnecessary copying of resource-heavy objects.", c: true },
      { s: "Move semantics were introduced in C++98 to improve compatibility with C.", c: false },
      { s: "Move operators typically \"steal\" resources and do not usually allocate new resources or throw exceptions.", c: true },
      { s: "Move semantics are only applicable to primitive types like int and double.", c: false }
    ]
  },
  {
    topic: "Move constructor overview",
    text: "Move constructor overview",
    code: `class Foo {
public:
  Foo(Foo&&) noexcept { ... };
};`,
    points: 1,
    opts: [
      { s: "A move constructor transfers ownership of resources from a temporary object to a new object.", c: true },
      { s: "The move constructor takes an rvalue reference (Foo&&) as its argument.", c: true },
      { s: "The noexcept keyword indicates that the move constructor does not throw exceptions, which is recommended for compatibility with standard containers.", c: true },
      { s: "The move constructor always performs a deep copy of the source object.", c: false },
      { s: "The move constructor is called when copying an lvalue to a new object.", c: false }
    ]
  },
  {
    topic: "When move constructor is called",
    text: "When is the move constructor called?",
    code: `MyClass obj2 = MyClass(obj1);
std::vector<MyClass> vec;
vec.push_back(MyClass());
std::vector<MyClass> vec(10);
vec.resize(100);
MyClass obj1;
MyClass obj2 = std::move(obj1);`,
    points: 1,
    opts: [
      { s: "The move constructor is called for temporary object initialization (MyClass obj2 = MyClass(obj1);).", c: true },
      { s: "The move constructor is called when pushing a temporary into a container (vec.push_back(MyClass());).", c: true },
      { s: "The move constructor is called during container reallocations if available (vec.resize(100);).", c: true },
      { s: "The move constructor is called when std::move is used to force a move (MyClass obj2 = std::move(obj1);).", c: true },
      { s: "The move constructor is never called when returning a local variable from a function.", c: false }
    ]
  },
  {
    topic: "Return value and NRVO",
    text: "Return value and move constructor vs. NRVO",
    code: `MyClass foo() {
  MyClass temp;
  return temp;
}
MyClass my = foo();`,
    opts: [
      { s: "Scenario 1: The move constructor is called (if available) to transfer temp to the return value location.", c: true },
      { s: "Scenario 2: Named Return Value Optimization (NRVO) allows the compiler to construct temp directly in the return value location, avoiding the move constructor call.", c: true },
      { s: "The copy constructor is always called when returning a local variable, regardless of NRVO.", c: false },
      { s: "NRVO is illegal in modern C++ and will cause a compilation error.", c: false },
      { s: "If NRVO is applied, no copy or move constructor is called at all.", c: true }
    ]
  },
  {
    topic: "Move constructor auto-generation",
    text: "Move constructor automatic generation",
    code: null,
    opts: [
      { s: "The move constructor is automatically generated by the compiler only if there are no user-declared copy operations, destructor, or move operations.", c: true },
      { s: "The move constructor is always generated automatically, regardless of other special member functions.", c: false },
      { s: "The move constructor optimizes resource management by enabling efficient transfer of resources, particularly with resource-heavy objects and standard library containers.", c: true },
      { s: "The move constructor performs a deep copy of all members of the source object.", c: false },
      { s: "If the move constructor is not defined and not automatically generated, the copy constructor may be used instead.", c: true }
    ]
  },
  {
    topic: "Move assignment operator overview",
    text: "Move assignment operator overview",
    code: `class Foo {
public:
  Foo& operator=(Foo&& in) noexcept { ... }
};`,
    opts: [
      { s: "The move assignment operator transfers resources from a temporary object to an existing object.", c: true },
      { s: "The move assignment operator takes an rvalue reference (Foo&&) and is typically marked noexcept.", c: true },
      { s: "The move assignment operator is used when creating a new object, not when assigning to an existing object.", c: false },
      { s: "The move assignment operator optimizes performance by avoiding unnecessary copies when assigning temporaries.", c: true },
      { s: "The move assignment operator always performs a deep copy of the source object.", c: false }
    ]
  },
  {
    topic: "When move assignment is called",
    text: "When is the move assignment operator called?",
    code: `MyClass obj1, obj2;
obj2 = std::move(obj1);
MyClass obj;
obj = MyClass();
std::vector<MyClass> vec(5);
vec[0] = MyClass();`,
    opts: [
      { s: "The move assignment operator is called when using std::move to assign one object to another (obj2 = std::move(obj1);).", c: true },
      { s: "The move assignment operator is called when assigning a temporary object (obj = MyClass();).", c: true },
      { s: "The move assignment operator is called when moving a temporary into a container element (vec[0] = MyClass();).", c: true },
      { s: "The move assignment operator is called when creating a new object with MyClass obj = std::move(obj1);.", c: false },
      { s: "The move assignment operator is never called when assigning temporaries; the copy assignment operator is always used instead.", c: false }
    ]
  },
  {
    topic: "Move assignment and return values",
    text: "Move assignment and return values",
    code: `MyClass createObj() {
  MyClass tmp;
  return tmp;
}`,
    opts: [
      { s: "If NRVO (Named Return Value Optimization) is not applied, the move assignment operator may be used when assigning the returned object.", c: true },
      { s: "If NRVO is applied, tmp is constructed directly in the return value location, and no move or copy occurs.", c: true },
      { s: "The move assignment operator is always called when returning a local object, regardless of NRVO.", c: false },
      { s: "NRVO is disabled when move semantics are available.", c: false },
      { s: "The compiler may use the move constructor or move assignment operator to transfer tmp if NRVO is not applied.", c: true }
    ]
  },
  {
    topic: "Copy and move example",
    text: "Example with copy and move operations",
    code: `class A {
  A();
  A(const A&);
  A(A&&) noexcept;
  A& operator=(const A&);
  A& operator=(A&&) noexcept;
};
int main() {
  A a1;
  A a2 = a1;
  A a3 = std::move(a1);
  a3 = a2;
  a2 = std::move(a3);
}`,
    opts: [
      { s: "A a1; calls the primary constructor.", c: true },
      { s: "A a2 = a1; calls the copy constructor.", c: true },
      { s: "A a3 = std::move(a1); calls the move constructor.", c: true },
      { s: "a3 = a2; calls the copy assignment operator.", c: true },
      { s: "a2 = std::move(a3); calls the move assignment operator.", c: true }
    ]
  },
  {
    topic: "Rule of Five",
    text: "The Rule of Five",
    code: null,
    opts: [
      { s: "The Rule of Five extends the Rule of Three to include the move constructor and move assignment operator.", c: true },
      { s: "If a class follows the Rule of Three, it should define all five special member functions in C++11 and later.", c: true },
      { s: "Not defining move operations leads to incorrect code and runtime errors.", c: false },
      { s: "Not defining move operations may prevent the compiler from accessing optimization opportunities, reducing performance.", c: true },
      { s: "The Rule of Five requires defining exactly five member functions, no more and no less.", c: false }
    ]
  },
  {
    topic: "Lvalues and rvalues",
    text: "Lvalues and rvalues",
    code: null,
    opts: [
      { s: "Lvalues represent objects that have a name and persist beyond a single expression, with an identifiable memory location.", c: true },
      { s: "Rvalues represent temporary objects, literals, or values that do not persist beyond the expression and often lack a specific memory location.", c: true },
      { s: "int x = 5; makes 5 an lvalue because it is assigned to x.", c: false },
      { s: "The result of x + y is an rvalue (a temporary object).", c: true },
      { s: "Move semantics are designed to transfer resources from rvalues, which are about to be destroyed.", c: true }
    ]
  },
  {
    topic: "Binding lvalues and rvalues",
    text: "Binding lvalues and rvalues to constructors/operators",
    code: null,
    opts: [
      { s: "A copy constructor takes an lvalue reference (const T&) and binds to both lvalues and rvalues.", c: true },
      { s: "A move constructor takes an rvalue reference (T&&) and binds only to rvalues.", c: true },
      { s: "A copy assignment operator takes a const lvalue reference and binds to lvalues and rvalues.", c: true },
      { s: "A move assignment operator takes an rvalue reference and binds only to rvalues.", c: true },
      { s: "An rvalue reference can bind to an lvalue without using std::move.", c: false }
    ]
  },
  {
    topic: "Function templates overview",
    text: "Function templates overview",
    code: `template <typename T>
int compare(const T &v1, const T &v2) {
  if (v1 < v2) return -1;
  if (v2 < v1) return  1;
  return 0;
}`,
    opts: [
      { s: "A function template is a formula from which the compiler generates type-specific versions of the function.", c: true },
      { s: "T is a template parameter representing an arbitrary type.", c: true },
      { s: "The compiler deduces the type of T from the function arguments when the template is called.", c: true },
      { s: "The template is processed at runtime to generate the appropriate function version.", c: false },
      { s: "Templates are the foundation of generic programming in C++.", c: true }
    ]
  },
  {
    topic: "Template instantiation",
    text: "Template instantiation",
    code: `cout << compare(1, 0) << endl;
string s1 = "hello", s2 = "world";
cout << compare(s1, s2) << endl;
vector<int> v1{1, 2, 3}, v2{4, 5, 6};
cout << compare(v1, v2) << endl;`,
    opts: [
      { s: "For compare(1, 0), the compiler instantiates int compare(const int&, const int&).", c: true },
      { s: "For compare(s1, s2), the compiler instantiates int compare(const string&, const string&).", c: true },
      { s: "For compare(v1, v2), the compiler instantiates int compare(const vector<int>&, const vector<int>&).", c: true },
      { s: "The compiler generates all possible instantiations of the template at compile time, regardless of usage.", c: false },
      { s: "The template is never processed at runtime; instantiation occurs at compile time.", c: true }
    ]
  },
  {
    topic: "Class templates overview",
    text: "Class templates overview",
    code: `template <typename T>
class SingleType {
public:
  SingleType(T value) : data(value) {}
  T getData() { return data; }
private:
  T data;
};
int main() {
  SingleType<int>    iex(5);
  SingleType<double> dex(3.14);
  return 0;
}`,
    opts: [
      { s: "A class template is a blueprint for creating classes that work with arbitrary data types.", c: true },
      { s: "Unlike function templates, the compiler cannot deduce the type T for class templates; it must be specified explicitly.", c: true },
      { s: "SingleType<int> iex(5); creates an instance of SingleType specialized for int.", c: true },
      { s: "SingleType iex(5); is valid in C++11 because the compiler deduces T from the constructor argument.", c: false },
      { s: "Class templates enable generic programming for data structures like containers.", c: true }
    ]
  }
];
