Intermediate Sorting Algorithms

- Understand the limitations of Bubble, Selection, and Insertion Sort
- Implement, Merge, Quick, and Radix Sort

Time complexity: O(n) >> O(nlogn)

- Tradeoff between efficiency and simplicity

Merge Sort
- Combination of splitting, merging, and sorting 
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Decomposes an array into smaller trays of 0 or 1 element, then building a newly sorted array
    - Split array in half until there’s only one element in each array
    - Sort + Merge 1 > 2 > 4 >8, happens on both sides of the initial split (logarithmic connection).

Merge function (helper function)
	- 2 sorted arrays, uses 2 pointers
	- Run in O(n+m) time and space, should NOT modify the parameters passed into it
 	
```
See mergeSort file for merge helper function + recursive mergeSort implementation
``` 

mergeSort implementation
-break up the array into halves until you have arrays that are empty or have one element
	- create a recursive helper function (base case: length <=1) and make use of .slice 
-use the merge function to create an array with the length of the original array

BigO: 
Time: O(n log n) — O(log n) decompositions, O(n) comparisons per decomposition (in the merge function)
	— best we can get in a sorting algo other than taking a advantage of a known quirk in the data
Space: O(n)
	- use more space to store arrays as input N grows

Quick Sort
- Like merge sort, exploits the fact that array of 0 or 1 element are always sorted
- Work by selecting one element, ‘the pivot point’ and move all elements less to the left and all greater to the right of the pivot point.
- Recursively repeat the process to the left and right side of the pivot point

Pivot Helper Function
- Ideal pivot is the median value of the data set
- Pivot point can greatly affect runtime

Note: The recursive function goes down the entire tree length of the left side before going down the right side. **see quickSort.js**

BigO:
Time - Best & Average: O(nlogn) worst: O(n^2)
- Worst case is if the array is already sorted // if the pivot point selected is the min / max every time
Space - O(logn)

**For comparison sorts, all sorts up to this point, there is a lower bound to their efficiency O(nlogn)**

Radix Sort
- Integer Sorting Algorithm, doesn’t make comparisons (integers, strings, images(converted to binary)
- Can tell that a ‘longer’ digit is a larger value 
- Depends on the length of the longest digit

Helper Methods:
getDigit(num, place) // returns the digit at the ‘place’ indicated (1s,10s, 100s, 1000s, etc…)
mostDigits(array) // returns the length of the max digit 
	digitCount(num) // how many digits in num

BigO: n is the length of array, k is the length of the longest number
Time - O(nk)
Space - O(n + k)
Theoretically, radix sort is faster than comparison sorts but due to how computers store numbers in their memory they can just tie them with a BigO of O(nlogn)

￼




