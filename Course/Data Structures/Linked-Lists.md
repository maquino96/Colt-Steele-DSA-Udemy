Linked Lists

Singly Linked Lists

- Define what an SLL is, compare to an array, implement insertion, removal, and traversal methods
- A data structure that contains a head, tail, and length property. Linked lists consist of nodes, and each node has a value and a pointer to another node or null
    - Each node is connected to 1 other node (Singly linked)
    - No indices like an array.

- Node stores a piece of data and a reference to the next data

￼

Methods:
1. Push // add to the tail of the linked list
2. Pop // remove from the tail of the list
3. Shift // remove from the head of the list
4. Unshift // insert a node to the beginning of the list  
5. Get - Not as efficient as an array // consider using an array if constantly getting values from list - O(n)
6. Set - accepts a position + value and updates the value of  that node - makes use of the get method above
7. Insert - accepts an index and a value and INSERTS a new node at the index.
8. Remove - Removes node from a specific position
9. Reverse - Classic CS question, reversing a linked list IN PLACE  

BigO: 
Insertion O(1)
Removal depends… O(1) or O(n)
Searching O(n)
Access O(n)

Singly linked list are excellent alternatives when inserting and deletion at the beginning are frequently required
- Array contain a built in index whereas linked lists do no
- Foundation for other data structures like stacks and queues 

Doubly Linked Lists

- Almost identical to a singly linked list but has a pointer to the previous node
- Large impact on the efficiency of code that we write 
- Hard to work in reverse with a singly linked list, there’s now a method in doubly linked list .previous()
- Takes more memory

Methods:
1. Push
2. Pop
3. Shift 
4. Unshift
5. Get
6. Set
7. Insert
8. Remove

BigO:
Insertion O(1)
Removal O(1) // different from singly linked list
Searching O(n/2) — optimized, but still simplified to O(n)
Access O(n)

doublyLinkedLists make working backwards easier, e.g. browser history (previous / next feature) 
- Con: takes more memory
