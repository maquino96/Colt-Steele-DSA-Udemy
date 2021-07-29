Recursion -  a process (a function in our case) that calls itself
examples:
	- JSON.parse / JSON.stringify
	- document.getElementById and DOM traversal
	- Object traversal
	- More complex data structures
	- Cleaner alternative than iteration

Call Stack
	- when a function is invoked it is placed on top of a call stack, FILO / LIFO.
	- recursive functions keep pushing the same function onto the call stack

Base Case - condition when the recursion is stopped

 2 essential parts of a recursive function
	- base case
	- different input

Common Recursion Pitfalls
	- no base case or wrong base case
		- can cause your recursion to continue infinitely
	- forgetting to return or returning the wrong output


Triggered by *maximum call stack size exceeded*
	- stack overflow


DESIGN PATTERN: Helper Method Recursion
	- outer function (not recursive) + inner function (recursive), collecting values in an array. 

Pure recursion