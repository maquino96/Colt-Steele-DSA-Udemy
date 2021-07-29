Graphs

- Used in social networks
- Mapping
- Routing Algo
- Visual Hierarchy
- File System optimization
- Recommendations e.g. Netflix

Graphs — collection of nodes and connections
Vertex - a node
Edge - connection between nodes
Weighted / unweighted - values assigned to distances between vertices

Tree - undirected graph where any two vertices are connect by exactly one path

Undirected graph - no polarity to the edge, 2-way directions
Directed graph - represented by arrows, can only go one way
  
Weighted graphs have values assigned to the edges

Adjacency Matrix
- 2 dimensional estrutures, stored as nested arrays
- Binary / Boolean relationship represented in the matrix 
￼

Adjacency List
- Each node is stored in an index, the element at that index is an array of nodes that is connected to the index node. 
- Generally an array is used for numerical values, but when letters / strings are involved the below is an option.

Using a hash table:
￼

Adjacency List v. Adjacency Matrix

￼

Adjacency List:
- Take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

Adjacency Matrix:
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to look up specific edge

Adjacency List — real world tends to be sparse, lots of nodes that are not connected
- Lots of nodes can create a large matrix which is very inefficient