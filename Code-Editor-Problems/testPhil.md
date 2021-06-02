
LC-443 String Compression
LC-973 K Closest Points to Origin


*** Notes ***
- Make sure to have more semantic naming of functions and variables
- When pseduocoding explore more options, not just pattern matching
- Less hints, max a real interview will give is probably 2
- Be able to make your own examples / compile your code 
    - predict what the outputs are

/*
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

*/

/*
input array of integers, unsorted and an integer k
output integer

sliding window problem pattern
- continuous subarrays

[1,1,1,3] 3
 best - O(n) runtime o(n) space
 
 S[I, J] = k    I < J
 
 S[I, J] = S[0, J] - S[0, I]     I < J
 
 Input : arr[] = {10, 2, -2, -20, 10}, 
        k = -10
        
        
S[I, J] = S[0, J] - S[0, I]     I < J

k = S[0, J] - S[0, I] 
S[0, J] - k = S[0,I]
 
*/


/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

chars = ["a","2","b","3","b","c","c","c", "d", "d"] -> ["a",'2'"b" "2" "c" "3", c,c,c]
                  w
                               r
counter = 3

return 6

return new length


inputs: array
output: int (length of new array)
note: change input array in place

multiple pointer
2 pointer

declare write = 0 
declare read = 1
declare counter = 1 

while read < array.length
  if( read === write ) 
    counter++
    read++
  if( read !== write )
    write++
    
    if counter === 1
      array[write] = array[read]
      
      
    array[write] = counter
    write++
    read++
    counter = 1

return write 


*/