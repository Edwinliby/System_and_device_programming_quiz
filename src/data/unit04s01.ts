import { Question } from '../types';

// C++ Unit 04 s01–06 — I/O, Arrays, Containers & Algorithms
export const unit04s01Questions: Question[] = [
  {
    topic: "Text and binary files",
    text: "Text and binary files",
    code: null,
    opts: [
      { s: "In Unix/Linux, the kernel natively distinguishes between text and binary files using different file types.", c: false },
      { s: "A file is basically a sequence of bytes written one after the other on disk.", c: true },
      { s: "Each byte consists of 8 bits that can each be 0 or 1.", c: true },
      { s: "We commonly distinguish between text files (ASCII or Unicode) and binary files, even if both are just bytes.", c: true },
      { s: "A C++ source file is always treated as a binary file by user programs and cannot be read as text.", c: false }
    ]
  },
  {
    topic: "Newline conventions",
    text: "Newline conventions in text files",
    code: null,
    opts: [
      { s: "On Unix/Linux and macOS, a newline is represented by a single character, typically Line Feed (LF, 10).", c: true },
      { s: "On Windows, a newline is represented by a sequence of two characters: LF and CR together.", c: true },
      { s: "Text files on Unix use Carriage Return followed by Line Feed as the newline sequence.", c: false },
      { s: "Text files are usually \"line-oriented\", with content logically grouped into lines separated by newline characters.", c: true },
      { s: "The physical newline representation is always the same on all operating systems.", c: false }
    ]
  },
  {
    topic: "C++ I/O headers",
    text: "Basic C++ I/O headers",
    code: null,
    opts: [
      { s: "<iostream> provides the basic I/O functionalities for standard streams like cin and cout.", c: true },
      { s: "<sstream> provides classes to perform input and output operations on std::string objects.", c: true },
      { s: "<fstream> provides classes for file I/O operations on named files.", c: true },
      { s: "The <fstream> header only allows binary file operations and cannot be used for text files.", c: false },
      { s: "The <sstream> header is required to use std::cin and std::cout.", c: false }
    ]
  },
  {
    topic: "Stream states",
    text: "Stream states and error handling",
    code: null,
    opts: [
      { s: "Once an input error occurs on a stream, subsequent I/O operations will generally fail until the state is cleared.", c: true },
      { s: "Using if (cin >> s) { ... } is a common way to test if an input operation succeeded.", c: true },
      { s: "s.good() returns false if the last I/O operation succeeded.", c: false },
      { s: "s.fail() is true if an I/O operation failed (for example, reading a string into an integer).", c: true },
      { s: "s.clear() resets all condition flags of a stream to a valid state.", c: true },
      { s: "The idiom while (!s.eof()) { ... } is recommended as a robust input loop.", c: false }
    ]
  },
  {
    topic: "File modes",
    text: "File modes with fstreams",
    code: null,
    opts: [
      { s: "std::ios::in opens a file for input operations.", c: true },
      { s: "std::ios::out opens a file for output operations.", c: true },
      { s: "std::ios::app appends all writes at the end of the file, seeking to the end before each write.", c: true },
      { s: "std::ios::trunc truncates the file, discarding its previous content on open (when used with output).", c: true },
      { s: "std::ios::binary forces text mode, translating newlines when reading and writing.", c: false },
      { s: "std::ios::ate seeks to the end immediately after opening, but then allows repositioning with seek operations.", c: true }
    ]
  },
  {
    topic: "Opening ofstream",
    text: "Opening files with ofstream",
    code: null,
    opts: [
      { s: "std::ofstream out(\"myfile\"); opens myfile for output, truncating it by default.", c: true },
      { s: "std::ofstream out(\"myfile\", std::ofstream::app); opens myfile for appending, preserving existing content.", c: true },
      { s: "std::ofstream out(\"myfile\", std::ofstream::in); is the usual way to open a file only for reading.", c: false },
      { s: "Modes can be combined with |, e.g. std::ofstream::out | std::ofstream::trunc.", c: true },
      { s: "Truncation must always be specified explicitly; it is never the default.", c: false }
    ]
  },
  {
    topic: "Basic binary I/O",
    text: "Basic binary I/O",
    code: `int v1 = 12345, v2;
std::ofstream outF("data.bin", std::ios::out | std::ios::binary);
if (outF.is_open()) {
  outF.write(reinterpret_cast<const char*>(&v1), sizeof(v1));
  outF.close();
}
std::ifstream inF("data.bin", std::ios::in | std::ios::binary);
if (inF.is_open()) {
  inF.read(reinterpret_cast<char*>(&v2), sizeof(v2));
  inF.close();
}`,
    opts: [
      { s: "std::ios::binary tells the library to treat the file as binary, avoiding newline translations.", c: true },
      { s: "reinterpret_cast<const char*>(&v1) converts the address of v1 to a const char* pointer required by write.", c: true },
      { s: "If the platform representation is unchanged, after a successful read we typically have v1 == v2.", c: true },
      { s: "The code writes the ASCII characters '1', '2', '3', '4', '5' to the file.", c: false },
      { s: "Using write and read is restricted to text files and cannot be combined with std::ios::binary.", c: false }
    ]
  },
  {
    topic: "Seeking in files",
    text: "Seeking in files",
    code: null,
    opts: [
      { s: "seekg is used to move the next read position (get pointer) within a stream.", c: true },
      { s: "seekp is used to move the next write position (put pointer) within a stream.", c: true },
      { s: "ios_base::beg, ios_base::cur, and ios_base::end specify the reference position for the offset.", c: true },
      { s: "The offset parameter in seekg and seekp is always interpreted in units of whole records, not bytes.", c: false },
      { s: "The get and put pointers are always independent; using seekg never affects any write position.", c: false }
    ]
  },
  {
    topic: "Simple seek example",
    text: "Simple seek example",
    code: `std::fstream file("example.bin", std::ios::binary | std::ios::out | std::ios::trunc);
file.write(reinterpret_cast<const char*>(&data1), sizeof(data1));
file.seekp(sizeof(data2), std::ios::cur);
file.write(reinterpret_cast<const char*>(&data3), sizeof(data3));
file.seekp(sizeof(data1), std::ios::beg);
file.write(reinterpret_cast<const char*>(&data2), sizeof(data2));`,
    opts: [
      { s: "The first write stores data1 at the beginning of the file.", c: true },
      { s: "After seekp(sizeof(data2), std::ios::cur), the file position is advanced as if data2 had been written.", c: true },
      { s: "The second seekp moves the position back to overwrite the reserved space for data2.", c: true },
      { s: "The final layout in the file is data3, then data2, then data1, in that order.", c: false },
      { s: "This pattern can be used to write records out of logical order while controlling their physical positions.", c: true }
    ]
  },
  {
    topic: "setw, left, right, internal",
    text: "Using setw, left, right, internal",
    code: `std::cout << std::right << std::setw(10) << "Value" << std::endl;
std::cout << std::right << std::setw(10) << 123 << std::endl;
std::cout << std::left  << std::setw(10) << "Hello" << std::endl;
std::cout << std::internal << std::setw(10) << -456 << std::endl;`,
    opts: [
      { s: "std::setw(10) sets the width of the next output field to 10 characters.", c: true },
      { s: "std::right causes the following text/numbers to be right-aligned in that field.", c: true },
      { s: "std::left causes \"Hello\" to be left-aligned, padding to the right.", c: true },
      { s: "std::internal aligns the sign separately from the magnitude for numeric output.", c: true },
      { s: "std::setw permanently changes the width for all subsequent outputs until reset.", c: false }
    ]
  },
  {
    topic: "C-style integer arrays",
    text: "C-style integer arrays",
    code: `const unsigned N1 = 10;
constexpr unsigned N2 = 3;
int v1[N1];
int v2[] = {1,2,3,4,5};
int v3[N1] = {1,2,3,4,5};
int v4[N2] = {1,2,3,4,5};
int v5[5] = {1,2,3,4,5};
v2 = v3;`,
    opts: [
      { s: "v1 is an uninitialized array of 10 integers.", c: true },
      { s: "v2 is an array whose size is deduced from the initializer list {1,2,3,4,5}.", c: true },
      { s: "v3 has 10 elements; the first 5 are initialized, the rest are value-initialized (typically 0).", c: true },
      { s: "v4 is well-formed even if N2 is 3 and there are 5 initializers.", c: false },
      { s: "v5 is a 5-element array fully initialized by the list.", c: true },
      { s: "The assignment v2 = v3; is valid and copies the elements of v3 into v2.", c: false }
    ]
  },
  {
    topic: "C-style character arrays",
    text: "C-style character arrays and C-strings",
    code: `char s1[] = {'C','+','+'};
char s2[] = {'C','+','+','\\0'};
char s3[] = "C++";
char s4[3] = "C++";`,
    opts: [
      { s: "s1 is not null-terminated and therefore is not a proper C-style string.", c: true },
      { s: "s2 explicitly contains the null terminator '\\0'.", c: true },
      { s: "s3 is equivalent to {'C','+','+','\\0'} and is a valid C-string.", c: true },
      { s: "s4 is correct and stores \"C++\" including the terminating '\\0' in three characters.", c: false },
      { s: "Library functions that treat char* as strings rely on '\\0' to find the end.", c: true }
    ]
  },
  {
    topic: "C-strings pitfalls",
    text: "C-strings and common pitfalls",
    code: `char s1[] = {'C','+','+'};
std::cout << s1;
char s2[] = "C--";
char s3[] = "C++";
s2 = s3;
if (s2 == s3) { /* ... */ }`,
    opts: [
      { s: "std::cout << s1; safely prints \"C++\" because the array has 3 characters.", c: false },
      { s: "std::cout << s2; is valid since s2 is null-terminated.", c: true },
      { s: "The assignment s2 = s3; is illegal because arrays are not assignable.", c: true },
      { s: "The expression s2 == s3 compares addresses, not the contents of the strings.", c: true },
      { s: "To copy C-style strings one must use library functions such as strcpy.", c: true }
    ]
  },
  {
    topic: "Pointers and arrays",
    text: "Pointers and arrays",
    code: `int v[10];
int *p, *b, *e;
p = &v[0];
b = &v[0];
e = &v[10];
for (p = b; p < e; p++)
  std::cout << *p << std::endl;
p = v;
int *p2 = p + 4;`,
    opts: [
      { s: "p = &v[0]; makes p point to the first element of the array.", c: true },
      { s: "b points to v[0] and e points one past the last element v[9].", c: true },
      { s: "The loop prints all the elements from v[0] to v[9].", c: true },
      { s: "p = v; is equivalent to p = &v[0];.", c: true },
      { s: "p2 = p + 4; always causes undefined behavior because pointer arithmetic is not allowed on arrays.", c: false }
    ]
  },
  {
    topic: "Multidimensional arrays",
    text: "Multidimensional arrays and storage order",
    code: `int m1[3][4];
int m2[3][4] = {
  {0, 1, 2, 3},
  {4, 5, 6, 7},
  {8, 9,10,11}
};
int m3[3][4] = {
  0, 1, 2, 3,
  4, 5, 6, 7,
  8, 9,10,11
};`,
    opts: [
      { s: "m1 is an uninitialized 2D array of 3×4 integers.", c: true },
      { s: "m2 is initialized row by row with nested braces.", c: true },
      { s: "m3 uses a flat initializer list that is equivalent to m2 due to row-major storage.", c: true },
      { s: "C++ stores multidimensional arrays in column-major order by default.", c: false },
      { s: "In C/C++, a \"multidimensional array\" is implemented as an array of arrays.", c: true }
    ]
  },
  {
    topic: "Range-for on 2D arrays",
    text: "Range-for on multidimensional arrays",
    code: `constexpr int R = 3;
constexpr int C = 4;
int m[R][C];
for (auto &r : m) {
  for (auto &c : r) {
    std::cin >> c;
  }
}`,
    opts: [
      { s: "The outer loop iterates over each row (which is itself an array of int).", c: true },
      { s: "Using auto &r avoids copying entire rows and is necessary when working with a C-style array here.", c: true },
      { s: "The inner loop with auto &c iterates over individual elements and allows their modification.", c: true },
      { s: "Replacing auto &r with auto r would be equally correct and efficient in this case.", c: false },
      { s: "Range-for with references is useful when avoiding \"massive\" data copies.", c: true }
    ]
  },
  {
    topic: "Buggy range-for",
    text: "Buggy range-for nested loops (fixing code)",
    code: `for (auto r : m) {
  for (auto c : r) {
    std::cout << c;
  }
}`,
    opts: [
      { s: "The code is correct and equivalent to using references in both loops.", c: false },
      { s: "The outer loop should use a reference (auto &r) to avoid copying rows.", c: true },
      { s: "In the buggy slide, r is not a reference and thus c cannot iterate correctly over an element.", c: true },
      { s: "A correct version to print elements is: for (auto &r : m) for (auto c : r) std::cout << c;", c: true },
      { s: "When we want to modify elements inside the inner loop, we must use auto &c.", c: true }
    ]
  },
  {
    topic: "Sequential containers",
    text: "Sequential containers – general properties",
    code: null,
    opts: [
      { s: "A container is an object that stores other objects and manages the storage space for them.", c: true },
      { s: "Sequential containers provide fast sequential access to their elements.", c: true },
      { s: "With the exception of std::array, sequential containers support dynamic growth and shrinkage.", c: true },
      { s: "All sequential containers guarantee constant-time insertion and removal at any position.", c: false },
      { s: "Different sequential containers provide different performance characteristics for insertion, deletion, and random access.", c: true }
    ]
  },
  {
    topic: "Iterator categories",
    text: "Iterator categories in the standard library",
    code: null,
    opts: [
      { s: "std::vector provides random-access iterators.", c: true },
      { s: "std::deque provides random-access iterators.", c: true },
      { s: "std::list provides bidirectional iterators.", c: true },
      { s: "std::forward_list provides forward iterators.", c: true },
      { s: "std::array provides only input iterators.", c: false },
      { s: "std::string typically provides random-access iterators.", c: true }
    ]
  },
  {
    topic: "Basic vector operations",
    text: "Basic vector operations",
    code: null,
    opts: [
      { s: "std::vector<T> v; default-constructs an empty vector.", c: true },
      { s: "v.empty() returns true if the vector has no elements.", c: true },
      { s: "v.size() returns the number of elements stored in the vector.", c: true },
      { s: "v.push_back(a) appends a at the end of the vector.", c: true },
      { s: "v[n] performs bounds checking and throws an exception if n is out of range.", c: false },
      { s: "Assigning v1 = v2; replaces the elements of v1 with a copy of those in v2.", c: true }
    ]
  },
  {
    topic: "Vector initialization",
    text: "Vector initialization forms",
    code: null,
    opts: [
      { s: "std::vector<int> v1; creates an empty vector of int.", c: true },
      { s: "std::vector<int> v2 = v1; copies all elements from v1 into v2.", c: true },
      { s: "std::vector<int> v{10}; always creates a vector of 10 elements all equal to 0.", c: false },
      { s: "std::vector<int> v(10, 1); creates a vector with 10 elements, each equal to 1.", c: true },
      { s: "List-initialization such as std::vector<int> v{1,2,3}; explicitly specifies the element values.", c: true }
    ]
  },
  {
    topic: "Vector time complexity",
    text: "Time complexity of vector operations",
    code: null,
    opts: [
      { s: "Random access using v[n] is typically O(1).", c: true },
      { s: "Back insertion (push_back) is typically O(1) but can be O(n) in the worst case due to reallocation.", c: true },
      { s: "Inserting or removing an element in the middle of a vector is O(n).", c: true },
      { s: "std::vector guarantees that push_back is always O(1).", c: false },
      { s: "Vectors often allocate capacity beyond the current size to amortize reallocation costs.", c: true }
    ]
  },
  {
    topic: "Iterator operations on vectors",
    text: "Iterator operations on vectors",
    code: null,
    opts: [
      { s: "auto b = v.begin(); yields an iterator to the first element.", c: true },
      { s: "auto e = v.end(); yields an iterator one past the last element.", c: true },
      { s: "*b refers to the element denoted by iterator b.", c: true },
      { s: "b->mem is equivalent to (*b).mem.", c: true },
      { s: "Comparing iterators from different containers of the same type is always well-defined.", c: false }
    ]
  },
  {
    topic: "Vector insertion",
    text: "Iterators and vectors of strings (insertion)",
    code: `std::vector<std::string> v = {"one","two","three","four"};
for (auto it = v.begin(); it != v.end(); ++it) {
  if (it->size() == 3) {
    it = v.insert(it, "foo");
    ++it;
  }
}`,
    opts: [
      { s: "The code scans the vector and inserts \"foo\" before each 3-letter string.", c: true },
      { s: "After insert, the iterator it is updated to point to the newly inserted element.", c: true },
      { s: "Incrementing it after insertion allows the loop to continue from the element following \"foo\".", c: true },
      { s: "The insertion cannot invalidate any iterators, so updating it is unnecessary.", c: false },
      { s: "At the end of the first loop, some original elements will be shifted to higher indices.", c: true }
    ]
  },
  {
    topic: "Vector erasure",
    text: "Iterators and vectors of strings (erasure)",
    code: `for (auto it = v.begin(); it != v.end(); ) {
  if (it->size() == 3) {
    it = v.erase(it);
  } else {
    ++it;
  }
}`,
    opts: [
      { s: "erase removes the element pointed to by it and returns a new iterator to the next element.", c: true },
      { s: "Assigning it = v.erase(it); is the correct way to keep the iterator valid after erasure.", c: true },
      { s: "After erase, it is mandatory to increment it manually in addition to the returned value.", c: false },
      { s: "Removing elements inside a loop must be done carefully to avoid using invalid iterators.", c: true },
      { s: "erase never invalidates any iterator except the one passed to it.", c: false }
    ]
  },
  {
    topic: "Iterator invalidation",
    text: "Warning on iterator invalidation",
    code: `std::vector<int> v = {0,1,2,3,4,5,6,7,8,9};
auto it = v.begin();
while (it != v.end()) {
  if (*it % 2) {
    it = v.insert(it, *it);
    it += 2;
  } else {
    it = v.erase(it);
  }
}`,
    opts: [
      { s: "Inserting into a std::vector can invalidate existing iterators.", c: true },
      { s: "The code adjusts it after insertion and erasure to avoid skipping or reprocessing elements.", c: true },
      { s: "v.insert and v.erase on vectors never invalidate iterators.", c: false },
      { s: "After erase, the returned iterator points to the element that followed the erased one.", c: true },
      { s: "This pattern demonstrates careful management of iterators when modifying a container inside a loop.", c: true }
    ]
  },
  {
    topic: "Associative container types",
    text: "Associative containers – types",
    code: null,
    opts: [
      { s: "std::map is an associative array holding key–value pairs.", c: true },
      { s: "std::set is a container where each element is a key.", c: true },
      { s: "std::multimap is a map allowing multiple elements with the same key.", c: true },
      { s: "std::multiset is a set that can store multiple copies of the same key.", c: true },
      { s: "std::unordered_map and std::unordered_set are organized using hash functions.", c: true },
      { s: "unordered_multimap and unordered_multiset store their elements in sorted order.", c: false }
    ]
  },
  {
    topic: "Associative container operations",
    text: "Main operations on associative containers",
    code: null,
    opts: [
      { s: "c.insert(v) inserts an element v into the associative container c.", c: true },
      { s: "c.emplace(args) constructs an element from args and inserts it into c.", c: true },
      { s: "c.erase(k) removes every element whose key is k.", c: true },
      { s: "c.erase(b, e) removes all elements in the iterator range [b, e).", c: true },
      { s: "c[k] for a map returns the element with key k, inserting a default-initialized value if k is not present.", c: true },
      { s: "c.at(k) silently inserts a new element if the key k is not found.", c: false }
    ]
  },
  {
    topic: "Extra associative operations",
    text: "Extra operations on associative containers",
    code: null,
    opts: [
      { s: "c.find(k) returns an iterator to the first element with key k or c.end() if not found.", c: true },
      { s: "c.count(k) returns the number of elements with key k.", c: true },
      { s: "c.lower_bound(k) returns an iterator to the first element with key not less than k.", c: true },
      { s: "c.upper_bound(k) returns an iterator to the first element with key greater than k.", c: true },
      { s: "c.equal_range(k) returns a pair of iterators delimiting the range of elements with key k.", c: true },
      { s: "c.count(k) always returns either 0 or 1, even in a multimap.", c: false }
    ]
  },
  {
    topic: "Maps and pair",
    text: "Maps and the pair type",
    code: null,
    opts: [
      { s: "Elements of std::map are of type std::pair<const Key, T>.", c: true },
      { s: "Each pair has public data members first and second.", c: true },
      { s: "make_pair(v1, v2) creates a std::pair initialized with v1 and v2.", c: true },
      { s: "The members of std::pair are private and accessible only via getters.", c: false },
      { s: "Two pairs p1 and p2 are equal if both p1.first == p2.first and p1.second == p2.second.", c: true }
    ]
  },
  {
    topic: "Word frequency map",
    text: "Word frequency map – simple version",
    code: `std::map<std::string, std::size_t> word_count;
std::string word;
while (std::cin >> word)
  ++word_count[word];
for (const auto &w : word_count) {
  std::cout << w.first << " occurs "
            << w.second << " time(s).\\n";
}`,
    opts: [
      { s: "word_count maps each distinct word to its frequency.", c: true },
      { s: "++word_count[word]; inserts a new key with value 0 if the word is not present, then increments it.", c: true },
      { s: "The range-for loop visits elements in key order (for std::map).", c: true },
      { s: "Using operator[] on a std::map does not allow inserting new keys.", c: false },
      { s: "This pattern is a canonical example of counting word frequencies with a map.", c: true }
    ]
  },
  {
    topic: "Word frequency via insert",
    text: "Word frequency using insert and pair",
    code: `while (std::cin >> word) {
  auto ret = word_count.insert({word, 1});
  if (!ret.second)
    ++ret.first->second;
}`,
    opts: [
      { s: "insert({word,1}) tries to insert the pair <word,1> into the map.", c: true },
      { s: "ret.second is true if a new element was inserted and false if the key already existed.", c: true },
      { s: "ret.first is an iterator to the element with the given key, regardless of insertion success.", c: true },
      { s: "If the word already exists, insert overwrites its previous count with 1.", c: false },
      { s: "When insertion fails, incrementing ret.first->second updates the existing count.", c: true }
    ]
  },
  {
    topic: "Sets and uniqueness",
    text: "Sets and uniqueness",
    code: `std::set<int> is = {0,1,2,3,4,5,6,7,8,9};
auto it1 = is.find(1);
auto it2 = is.find(11);
auto n1  = is.count(1);
auto n2  = is.count(11);`,
    opts: [
      { s: "is is a set containing integers from 0 to 9.", c: true },
      { s: "it1 refers to the element with key 1.", c: true },
      { s: "it2 equals is.end() because 11 is not in the set.", c: true },
      { s: "n1 is 1 because key 1 appears exactly once.", c: true },
      { s: "n2 is 0 because key 11 is absent.", c: true },
      { s: "A std::set can contain multiple elements with the same key.", c: false }
    ]
  },
  {
    topic: "Building a set from vector",
    text: "Building a set from a vector",
    code: `std::set<int> myset;
std::vector<int> iv = {2,4,6,8,2,4,6,8,2,4,6,8};
myset.insert(iv.begin(), iv.end());
myset.insert({1,3,5,7,1,3,5,7});`,
    opts: [
      { s: "After the first insert, myset contains {2,4,6,8}.", c: true },
      { s: "After the second insert, myset contains {1,2,3,4,5,6,7,8}.", c: true },
      { s: "The duplicates cause insert to throw an exception.", c: false },
      { s: "insert with iterator range will ignore duplicate keys in a std::set.", c: true },
      { s: "List initialization can be passed directly to insert for multiple values.", c: true }
    ]
  },
  {
    topic: "Set to exclude words",
    text: "Using a set to exclude words",
    code: `std::map<std::string, std::size_t> word_count;
std::set<std::string> exclude = {
  "The","But","And","Or","An","A",
  "the","but","and","or","an","a"
};
std::string word;
while (std::cin >> word)
  if (exclude.find(word) == exclude.end())
    ++word_count[word];`,
    opts: [
      { s: "exclude stores words to ignore when counting frequencies.", c: true },
      { s: "The condition exclude.find(word) == exclude.end() means \"word is not in the exclude set\".", c: true },
      { s: "An alternative is to check exclude.count(word) == 0.", c: true },
      { s: "Using a std::set here prevents us from iterating over the excluded words.", c: false },
      { s: "The map still counts only non-excluded words.", c: true }
    ]
  },
  {
    topic: "Generic algorithms",
    text: "Generic algorithms and headers",
    code: null,
    opts: [
      { s: "Generic algorithms are defined so they operate on elements of different types via iterators.", c: true },
      { s: "The <algorithm> header contains many of the most important STL algorithms.", c: true },
      { s: "Other algorithm-related headers include <numeric>, <memory>, and <cstdlib>.", c: true },
      { s: "Every algorithm is a member function of a container class.", c: false },
      { s: "It is more important to understand the structure and usage pattern of algorithms than to memorize every variant.", c: true }
    ]
  },
  {
    topic: "Predicates",
    text: "Predicates in generic algorithms",
    code: null,
    opts: [
      { s: "A predicate is an expression or function object that can be called and returns a value used as a condition.", c: true },
      { s: "Algorithms often have versions that accept a user-defined predicate to customize behavior.", c: true },
      { s: "For comparisons, default predicates usually correspond to operators like < or ==.", c: true },
      { s: "In the slides, up denotes a unary predicate and bp a binary predicate.", c: true },
      { s: "Predicates used by STL algorithms must always return an int.", c: false }
    ]
  },
  {
    topic: "Search algorithms",
    text: "Search algorithms",
    code: null,
    opts: [
      { s: "find(b,e,v) returns an iterator to the first element equal to v in [b,e).", c: true },
      { s: "find_if(b,e,up) returns an iterator to the first element for which up is true.", c: true },
      { s: "count(b,e,v) counts how many elements are equal to v.", c: true },
      { s: "count_if(b,e,up) counts how many elements satisfy the predicate up.", c: true },
      { s: "all_of(b,e,up) returns an iterator to the last element that satisfies up.", c: false }
    ]
  },
  {
    topic: "Search example",
    text: "Search algorithm example on a vector",
    code: `std::vector<int> v = {2, 6, 1, 7, 3, 7};
auto res1 = std::find(v.begin(), v.end(), 7);
auto res2 = std::find(v.begin(), v.end(), 9);
if (res2 == v.end())
  std::cout << "Not found!";`,
    opts: [
      { s: "res1 points to the first element equal to 7.", c: true },
      { s: "res2 is equal to v.end() because 9 is not present.", c: true },
      { s: "The if condition correctly checks whether 9 is absent from the vector.", c: true },
      { s: "Using std::find on an unsorted vector is undefined behavior.", c: false },
      { s: "Search algorithms typically return end() when the search fails.", c: true }
    ]
  },
  {
    topic: "Binary search algorithms",
    text: "Binary search algorithms",
    code: null,
    opts: [
      { s: "Binary search algorithms require the input range to be sorted.", c: true },
      { s: "lower_bound(b,e,v) returns the first position where v could be inserted without breaking ordering (first not less than v).", c: true },
      { s: "upper_bound(b,e,v) returns the first element greater than v.", c: true },
      { s: "equal_range(b,e,v) returns a pair {lower_bound, upper_bound} for v.", c: true },
      { s: "binary_search(b,e,v) returns an iterator to the found element or end() if not found.", c: false }
    ]
  },
  {
    topic: "lower_bound indices",
    text: "Binary search example – lower_bound indices",
    code: `std::vector<int> arr1 = {10,15,20,25,30,35};
std::vector<int> arr2 = {10,15,20,20,25,30,35};
std::vector<int> arr3 = {10,15,25,30,35};
std::cout << lower_bound(arr1.begin(), arr1.end(), 20) - arr1.begin() << std::endl;
std::cout << lower_bound(arr2.begin(), arr2.end(), 20) - arr2.begin() << std::endl;
std::cout << lower_bound(arr3.begin(), arr3.end(), 20) - arr3.begin() << std::endl;`,
    opts: [
      { s: "For arr1, the printed index is 2.", c: true },
      { s: "For arr2, the printed index is also 2 (first not less than 20).", c: true },
      { s: "For arr3, the printed index is 2, corresponding to the first element greater than 20 (25).", c: true },
      { s: "For arr3, lower_bound returns arr3.end() because 20 is absent.", c: false },
      { s: "Subtracting iterators gives the zero-based index within the vector.", c: true }
    ]
  },
  {
    topic: "binary_search membership",
    text: "Binary search example – membership test",
    code: `std::vector<int> arr = {10,15,20,25,30,35};
if (std::binary_search(arr.begin(), arr.end(), 15))
  std::cout << "15 exists in vector";
else
  std::cout << "15 does not exist";
if (std::binary_search(arr.begin(), arr.end(), 23))
  std::cout << "23 exists in vector";
else
  std::cout << "23 does not exist";`,
    opts: [
      { s: "The first binary_search call returns true because 15 is in the vector.", c: true },
      { s: "The second binary_search call returns false because 23 is not in the vector.", c: true },
      { s: "std::binary_search modifies the container to insert missing values.", c: false },
      { s: "std::binary_search returns a bool indicating whether the value exists in the sorted range.", c: true },
      { s: "The vector must be sorted in descending order for binary_search to work.", c: false }
    ]
  },
  {
    topic: "Sorting algorithms",
    text: "Sorting algorithms",
    code: null,
    opts: [
      { s: "std::sort(b,e) sorts the range [b,e) using a default comparison (<).", c: true },
      { s: "std::stable_sort(b,e,bp) preserves the relative order of equivalent elements.", c: true },
      { s: "std::is_sorted(b,e,bp) returns a bool indicating whether the range is sorted according to bp.", c: true },
      { s: "std::partial_sort(b,mid,e,bp) places the smallest elements (according to bp) into [b,mid).", c: true },
      { s: "Sorting algorithms in <algorithm> can only be used with std::vector<int>.", c: false }
    ]
  },
  {
    topic: "Sorting integers",
    text: "Sorting integers with std::sort",
    code: `std::vector<unsigned> v = {3,4,1,2};
std::sort(v.begin(), v.end());`,
    opts: [
      { s: "After the call to std::sort, v becomes {1,2,3,4}.", c: true },
      { s: "By default, std::sort uses the less-than operator < for comparisons.", c: true },
      { s: "std::sort cannot be used with unsigned integers.", c: false },
      { s: "The call requires random-access iterators, which std::vector provides.", c: true },
      { s: "The algorithm guarantees stability (preserves order of equal elements) by specification.", c: false }
    ]
  },
  {
    topic: "Sorting with predicate",
    text: "Sorting with custom predicate (strings)",
    code: `bool isShorter(const std::string &s1, const std::string &s2) {
  return s1.size() < s2.size();
}
std::vector<std::string> words = { ... };
// BUGGY: missing predicate
std::sort(words.begin(), words.end());`,
    opts: [
      { s: "isShorter is a binary predicate comparing string lengths.", c: true },
      { s: "To sort by length we should call std::sort(words.begin(), words.end(), isShorter);.", c: true },
      { s: "The call std::sort(words.begin(), words.end()); already uses isShorter automatically.", c: false },
      { s: "Without specifying the predicate, std::sort orders strings lexicographically using <.", c: true },
      { s: "We can also use a lambda instead of isShorter.", c: true }
    ]
  },
  {
    topic: "Sorting with lambdas",
    text: "Sorting records with lambdas",
    code: `struct Student { int id; std::string name; double grade; };
void sortByID(std::vector<Student> &students) {
  std::sort(students.begin(), students.end(),
    [](const Student &a, const Student &b) {
      return a.id < b.id;
    });
}`,
    opts: [
      { s: "The lambda defines an ordering based on id in ascending order.", c: true },
      { s: "std::sort uses the lambda to compare Student objects.", c: true },
      { s: "Without a custom comparator, std::sort could still sort Student because it is a POD type.", c: false },
      { s: "A similar lambda can sort by name using a.name < b.name.", c: true },
      { s: "Another lambda can sort by grade descending using a.grade > b.grade.", c: true }
    ]
  },
  {
    topic: "Displaying records",
    text: "Displaying records – code completion",
    code: `void displayRecords(const std::vector<Student>& students) {
  for (const auto &student : students) {
    // COMPLETE ME
  }
}`,
    opts: [
      { s: "std::cout << \"ID: \" << student.id << \", Name: \" << student.name << \", Grade: \" << student.grade << std::endl;", c: true },
      { s: "cout << ID << name << grade << endl; (missing qualifiers and text)", c: false },
      { s: "We must qualify std::cout and std::endl or use using declarations.", c: true },
      { s: "We must print only the id, as printing name and grade is not allowed with std::cout.", c: false }
    ]
  },
  {
    topic: "Buggy ifstream",
    text: "Buggy code snippet – using ifstream",
    code: `std::string filename("input.txt");
int number;
std::ifstream infile(filename);
if (!infile.is_open()) {
  std::cerr << "Error: " << filename << std::endl;
  return EXIT_FAILURE;
}
// ... Process file ...
infile.close();`,
    opts: [
      { s: "std::ifstream infile(filename); opens the file input.txt for reading.", c: true },
      { s: "Checking !infile.is_open() is a way to test if the file was successfully opened.", c: true },
      { s: "std::cerr is appropriate for reporting error messages.", c: true },
      { s: "We must call infile.open(filename, std::ios::out) instead to read the file.", c: false },
      { s: "Calling infile.close() explicitly closes the file stream.", c: true }
    ]
  },
  {
    topic: "ofstream assignment",
    text: "Buggy code – assignment of ofstreams",
    code: `std::ofstream fo1, fo2;
...
fo2 = fo1;`,
    opts: [
      { s: "The code is ill-formed because I/O stream objects cannot be assigned.", c: true },
      { s: "The assignment copies both the underlying file descriptor and the buffer contents.", c: false },
      { s: "To reuse a stream variable, we should close it and open a new file instead of assigning.", c: true },
      { s: "The slide explicitly notes \"Error: cannot assign streams\".", c: true },
      { s: "Assigning streams is allowed but only for ifstream, not for ofstream.", c: false }
    ]
  },
  {
    topic: "sstream library",
    text: "sstream library – typical uses",
    code: null,
    opts: [
      { s: "<sstream> enables parsing data from strings using std::istringstream.", c: true },
      { s: "<sstream> enables formatting data into strings using std::ostringstream.", c: true },
      { s: "The library is useful for converting between strings and other data types.", c: true },
      { s: "<sstream> only allows reading from files, not from std::string.", c: false },
      { s: "Operations on string streams are syntactically similar to operations on cin and cout.", c: true }
    ]
  }
];
