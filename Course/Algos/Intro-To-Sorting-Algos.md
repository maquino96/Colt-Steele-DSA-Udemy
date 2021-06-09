Intro to Sorting Algorithms

- Sorting is incredibly common, good to know how it works
- Should weigh the pros and cons between different sorting techniques

Elementary sorting Algos: Bubble, Selection, Insertion
	- less commonly used because they’re not as efficient
	- good learning experience

JS sort method — .sort()
	- takes an optional comparator function
	- JS looks at pairs of elements (a and b) determines their sort order based on the return value
		- negative number, a comes before b
		- positive number, a should come after b
		- 0, a and b are the same to the sort algo

Bubble Sort
- Ascending numeric order, largest values ‘bubble’ to the top
- Iterates through array comparing pairs [a,b]
- If a > b swap, else move down 1 index and compare the next pair
- Repeat iterating through the same array until there is a pass through where no swaps are required.

Creating a ‘swap’ function will make life easier when implementing bubble sort
￼

BigO: 
In general: O(n^2) 
Optimized / almost solved: O(n) — can only be assumed if you know the input is almost solved / can be short circuited.

Selection Sort
- Similar to bubble sort but places the small values into sorted position
    - Find a minimum by comparing adjacent elements, once a minimum is set compare it until the end of the array
    - Move the minimum to the starting position, repeat with a smaller subarray i+1 now that the min has been brought to the start of the array.

BigO:
General: O(n^2)
Preferred when you have a situation where you want to minimize swaps (writing to memory)

Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted
- Pull an element i from the array compare it to the previous element i-1.
    - If it’s greater leave it, if it’s less than i-1 keep moving it to the left until i > i-1
- Note: Algo begins on the 2nd element, the ‘sorted portion’ of the array starts at i = 0, the first element.

BigO:
General: O(n^2)
Decent when the data is almost sorted
Strength when data is coming in / streaming. 
	- left hand side of the array is kept sorted and we can take the new value and sort it as it is coming in. 

Comparing Bubble, Selection, and Insertion Sort

￼

https://www.toptal.com/developers/sorting-algorithms

- Decent space complexity, because they’re sorting in place. 
- All roughly equivalent in the grand scheme of things
- We can do better. More complex algos that are less intuitive and perform better.


 