Searching Algorithms

How we can search across arrays and strings

Linear Search 

Examples in JS:
- indexOf
- Includes
- Find
- findIndex

Works with sorted / unsorted array

```
function linearSearch( array, value ) {
	for ( let i = 0; i < array.length; i++) {
		if(array[i] === value) return i;
	}
	return -1;
}
```
Time complexity: O(n)

Binary Search
- Works on a SORTED array
- Divide and Conquer, in 2 sections (left and right)
- Check the middle index
- Based off the value you’re searching for change the border of the window by making middle = left || right
- Repeat until value is found
- Remember to use .floor or .ceil to get the middle index


See binarySearch.js file

Big O — O(logn) worse and average case, O(1) best case 

Naive String Search

function naiveSearch ( string, sub) {
	let counter = 0; 
	for ( let i = 0; i < string.length; j++) {
		for (let j = 0; j < sub.length; j++) {
			if (string[i+j] !== sub[j]) break;
			if( j === sub.length-1) counter++;			
		}
	}
	return counter
}

console.log(naiveSearch(‘lolrie loled’, ‘lol’)) // 2

O(n^2), nested loop

KMP — substring search (Knuth-Morris-Pratt) 
	prefix + suffix, match
	prevents the algo from repeating 




