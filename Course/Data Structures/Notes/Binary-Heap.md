Binary Heaps

Heaps are a type of tree
Compare min and max heaps

Tree > Heap > Binary Heap 


Max Binary Heap, parents are always larger than the child.
Min Binary Heap, parent nodes are smaller than the child
No implied ordering between siblings

A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

— priority queue, commonly implemented as a binary heap.
- Used to assist in graph traversal

A binary heap can be stored in an array / list
- Left child at 2n+1
- Right child at 2n+2
- n being the index of the parent node

To find the parent of a node you do the reverse: Math.floor((n-1)/2)

Adding to a MaxBinaryHeap
- automatically add to the end (of the array) and have the value ‘bubble up’
- Using the above logic regarding parent and child nodes we can compare the 2
- Swap the values if the child is larger. 

Removing from a Heap
- Remove the root (Extracts the largest value)
- Replace with the most recently added
- Adjust with a ‘sink-down / bubble-down’
    - Compare parent to 2 children, swap with the larger child all the way down
- Edge case where there’s only a single element / empty array

Priority Queue 
- a data structure where each element has a priority
- Elements with higher priorities are ‘served’ before elements with lower priorities
- An abstract concept that can be implemented with an array / list (naive) 

Big O of Binary Heaps
Insertion: O(log n)
Removal: O(log n)
Search: O(n) >> O(n)

Useful data structure when you are frequently inserting and deleting nodes
  
