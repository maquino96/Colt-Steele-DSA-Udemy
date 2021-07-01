Stacks + Queues

- Abstract data collections
- Not implemented in JavaScript, can use arrays

Stacks
- Think of a stack of plates, you would take the one on top not the one at the bottom
    - The call stack 
- Follows LIFO, Last In First Out

Can create a stack from an array by using push and pop in tandem.
    - Can also also use unshift and shift, valid stack that satisfies the LIFO principle
    - Adding and removing to the beginning of an array is inefficient due to reindexing 

Implementing stacks from linked lists is more memory efficient 
	Methods:
		- push
		- pop

BigO of Stacks
- Insertion O(1)
- Remval O(1)

// Generally don’t use searching or accessing elements, might want to use a different DS
- Searching O(n)
- Access O (N)

Queues
- Think of a tunnel first car in is the first car out on the other side
    - Background tasks, uploading / downloading 
    - Print / task processing

- Follow FIFO, First In First Out

enQeue - add to Queue
deQueue - remove from Queue

- Implementing with an array, use push and shift in tandem
    - Still face the reindexing issue, limits performance 

- Implementing using a linked list
    - Add to the end, remove from the beginning  

BigO of Stacks
- Insertion O(1)
- Remval O(1)

