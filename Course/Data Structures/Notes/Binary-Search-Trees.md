Binary Search Trees

Trees > Binary Trees > Binary Search Trees

Trees
- Consist of nodes
    - Parent < Child relationships 
    - Can’t have a node pointing to a sibling
    - Only have one node as a root, top of the tree
    - Leaf, node with no children
    - Edge, connection between a parent and child node
- Top down structure from a root node
- Root / Parent nodes can point to multiple child nodes

Lists are linear, trees are non-linear.

Real world use cases
- HTML + DOM 
- Network routing
- Abstract syntax tree, can describe a programming language
- Artificial Intelligence / Machine Learning
    - Decision trees
- Folders in an OS
- JSON 

Binary Trees
- Can at most have 2 children. (Either 0,1 or 2 child nodes)
- 

Binary Search Trees
- Excel at searching
- Kept in a particular order, sortable data
- All items less than the parent node is located to the left and greater than the parent is located to the right 
- The above format makes it easy to search through a tree, roughly chops the number of nodes to search through in half. 

BigO of Binary Search Trees
Insertion - O(log n) -- best and average case
    - As we double the number of inputs (n) the number of steps only increases by 1 (the depth of the BST)
Searching - O(log n) 

Be weary of one-sided BSTs, equivalent of linked lists. Try to rearrange data for a root node closer to the middle of the collection. 
