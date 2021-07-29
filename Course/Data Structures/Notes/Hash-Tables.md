Hash Tables
	⁃	Hash table
	⁃	Hashing Algorithm
	⁃	What makes a good hashing algo
	⁃	Understand how collisions occur in a hash table
	⁃	Handle collisions using separate chaining or linear probing

Hash table are used to store key-value pairs
Like arrays, but keys are not ordered
Fast for finding, adding and removing values

Python has Dictionaries
JS has Objects and Maps
	- Maps are only allowed to use strings as keys (?)
Java, Go, Scala have Maps
Ruby has Hashes

Implementing a hash table using an array / list
Hashing function — convert keys into valid array indices



What makes a good hash function
	⁃	Fast (constant time)
	⁃	Distributes outputs uniformly, no clustering at specific indices
	⁃	Deterministic, same input yields same output

 - Prime number in a hash is helpful in spreading out keys and helps prevent clusters

Handling Collisions
	⁃	Separate Chaining
	⁃	At each index in the array, we can store values using a more sophisticated DS (array, linked list)
	⁃	Multiple key-value pairs at the same position 
	⁃	Linear Probing 
	⁃	When we find a collision we search the array for the next empty spot
	⁃	Limited by the allotted space



BigO:
	⁃	Best and average cases
	⁃	Mainly dependent on hash function, minimizes collisions
	⁃	Worst case scenario O(n)
Insertion: O(1)
Deletion: O(1)
Access: O(1) — using a given key, accessing the paired value

Hash tables 
	⁃	are collections of key-value pairs
	⁃	can find values quickly given a key
	⁃	can add new key-value pairs quickly
	⁃	Store data in a large array, and work by hashing the keys
	⁃	A good hash should be fast, distribute key uniformly, and be deterministic
	⁃	Separate chaining and linear probing are two Strats used to deal with 2 key that hash to the same index
