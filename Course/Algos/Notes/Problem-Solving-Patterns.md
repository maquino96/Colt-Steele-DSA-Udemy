Problem Solving Patterns

Frequency Counters
- Pattern uses objects to collect values / frequencies of values. Usually O(n) rather than using nested loops O(^2)
- 2 separate loops is vastly better than a nested loop
- See anagram / squared value of 2 arrays examples

Multiple Pointers
- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well
- Note the use of while loops for this pattern
- Array will usually be sorted
- See countUniqeValues example

Sliding Window
- Pattern involves creating a ‘window’ which can either be an array or number from one position to another
    - The window either increases or closes (creating a new window) depending on the condition set
- Useful for keeping track of a subset of data in array/string
- See maxSubarraySum 

Divide and Conquer
- Dividing a data set into smaller chunks and repeating the process with a subset of data
- Can tremendously decrease time complexity
- Binary search algorithm, O(log(n))


