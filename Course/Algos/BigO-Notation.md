Big O Notation

f(n) = n, linear
f(n) = n^2, quadratic
f(n) = 1, constant // O(1)

 Generalized way to describe an algorithm’s runtime as the size of the input increases

Simplifying Big O Expressions
- Constants don’t matter // O(2n) > O(n)
- Smaller terms don’t matter // O(n^2 + 5n + 8) > O(n^2)

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array using an index or key for an object is constant
- In a loop, complexity is length of the loops timex the complexity of whatever happens inside the loop
e.g. nested loops

Haven’t talked about O(log_n) and O(nlog_n)

Space Complexity

Like time complexity, measures how much space  is taken up.
Auxiliary Space Complexity, worried about the space inside the algorithm

Most primitives (booleans numbers, undefined, null) are constant space.
Strings require O(n) space where n is string length.
Reference types (array and objects) where n is length for arrays and keys for objects, O(n) space is taken.

Logarithms are the opposites of exponents

Log_2(8) = 3 > 2^3=8

Binary logarithm (base 2) is the most common 
Logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that’s less than or equal to 1
8 > 4 > 2, log_2(8) = 3

log(n) time complexity is great,
nlogn is not as bad as n^2 but worse than O(n)

￼

Logarithms will be seen in the following topics — 
Time complexity: searching and sorting algorithms
Space complexity: recursion

* Analyze the performance of an Algo
* Give a high level understanding of time or space complexity
* Big O doesn’t care about precisions, only general trends
* Time / Space complexity depends on the algorithm, not the hardware. 


Analyzing Performance of Arrays and Objects

When to use objects:
- Don’t need order
- Fast access / insertion and removal 

Object actions: insertion, removal, access ( all O(1)), and searching ( O(n)).

Arrays have an intrinsic order (an index) but come at a cost. 

When to use arrays:
- Need order
- Need fast access / insertion and removal (sort of...)

Array actions: Insertion / Removal (depends…), searching O(n), access O(1).

Inserting to the end of an array is O(1)
Inserting  / removing in the beginning of an array is O(n), due to reindexing of the entire array.

.push() / .pop() is more efficient than .shift() / .unshift()
