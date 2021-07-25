const twoSum1 = (array, target) => {
    for ( let i = 0; i < array.length; i++) {
         for ( let j= i++; i< array.length; j++) {
              if ( array[j] === target - array[i]) return [i, j]               
         };
    };
    return null;
};

const twoSum2 = (array, target) => {
    const hashtable = {};
   for ( let i = 0; i < array.length; i++) {
      hashtable[array[i]] = i;   
    };
    for ( let j= 0; j < array.length; j++) {
       let complement = target - array[j]
// The second condition checks for cases like twoSum([7,7], 14) where the indices of similar elements MUST be different
       if ( hashtable.hasOwnProperty(complement) &&      
       hashtable[complement] !== j ) {
            return [hashtable[complement], j]
       }
    };
    return null;
};

const twoSum3 = (array, target) => {
    const hashtable = {};
    for ( let i = 0; i < array.length; i++) {
       let complement = target - array[i];
      
       if ( hashtable.hasOwnProperty(complement)){
         return [hashtable[complement], i]
       }

       hashtable[array[i]] = i;   
    };
};

const testArr = [34, 23, 35, 24, 2, 7, 11]

console.log(twoSum1(testArr, 47 ))
console.log(twoSum2(testArr, 47 ))
console.log(twoSum3(testArr, 47 ))

