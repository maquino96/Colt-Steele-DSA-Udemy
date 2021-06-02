function maxPoints(elements) {
    
    const map = {};
    for (const num of elements) {
    if (!(num in map)) map[num] = 0;
    map[num]++;}

    let prevSum = 0;
    let currSum = 0;
    let prevKey = -1;

    for (let key in map) {
    const m = Math.max(prevSum, currSum);
    key = parseInt(key);
    if (key - 1 !== prevKey) {
      currSum = key * map[key] + m;
      prevSum = m;
    } else {
      currSum = key * map[key] + prevSum;
      prevSum = m;
    }
    prevKey = key;
  }

  return Math.max(prevSum, currSum);
}

    // let counter = 0;
    // let frequency = {}
    // let tempArr = elements
    
    // for ( let i = 0; i <= elements.length; i++){
    //     if( frequency[elements[i]] ) { frequency[elements[i]]++ 
    //     } else { frequency[elements[i]] = 1 }
    // }
    
    // while (tempArr.length !== 0){
    //     let max = Math.max(...tempArr)
    //     if ( frequency[max-1] && frequency[max] > frequency[max-1]) { counter+= max * frequency[max]
    //     } else { counter+= max * frequency[max]}
    //     tempArr = tempArr.filter( el => el !== max)
    //     tempArr = tempArr.filter( el => el !== max-1)   
    // }
    // return counter
    
/*

input: unsorted array
output: max point value

declare counter = 0
declare freqency = {}
declare tempArr = elements

for loop
    fill up frequency counter
    if( frequency[elements[i]] ) { 
        frequency[elements[i]]++ 
        } else { frequency[elements[i]] = 1 }
    
while tempArr.length !==0
    let max = Math.max(...tempArr)
    if ( frequency[max-1] && frequency[max] > frequency[max-1]) {
        counter+= max * frequency[max]
    } else { counter+= max * frequency[max]}
    tempArr = tempArr.filter( el => el !== max || el !== max-1)

return counter

what about cases where there is an intermediate value with an abnormally high frequency, it may acidentally get filtered out with the above approach

new approach:
frequency counter, array [count, total]
*/

let test = [3,3,4,2]
console.log(maxPoints(test))