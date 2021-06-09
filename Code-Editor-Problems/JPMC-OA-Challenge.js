/*

Given: a vertex and an 'undirected graph'
Output: return the shortest paths between the source vertex and all other reachable vertices
notes: if a vertex isn't reachable return infinity


Implement: modified Breadth First Search --> Dijkstra's Algorithm (weighted edges) --> Bellman-Ford Algo (negative edges)


- function accepts a starting vertex

- create an object where each key is a vertex and the corresponding value is set to infinity
  - except for the source vertex, have it's value set to 0
  
- create a queue and store the vertext
- create an array to store the nodes visited
- create an object to store nodes visited
- Mark the vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertext from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex being visited.

- If it is not in the object that stores visited nodes mark it as visited and queue that vertex

- Can return the array of visited nodes, add a way to update the value of each key to be the path length.

*/