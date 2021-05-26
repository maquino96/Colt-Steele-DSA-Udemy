function countUniqueValues(array){
    // add whatever parameters you deem necessary - good luck!
    let p1 = 0
    let p2 = 1
    
    for (let i = 0; i < array.length; i++ ) {
        if (array[p1]===array[p2]) { 
            p2++}
        if ( array[p1] !== array[p2]) {
            p1++;
            array[p1] = array[p2];
        }
    }
    return p1
  }
  
  console.log(countUniqueValues([1,1,1,1,2,2,2,3,4,5,5,5,6,7,7,7]))
  
  function coltSolution(array){
    if ( array.length === 0) { return 0}
    let i = 0;
      for (let j = 1; j < array.length; j++ ) {
        if ( array[i] !== array[j]) {
          i++;
          array[i] = array[j]
        }
      }
  
      return i + 1
  }
  
  console.log(coltSolution([1,1,1,1,2,2,2,3,4,5,5]))
  
  
  /*
  input: sorted array
      -values will be numeric, negative, 0, positive
  output: number of unique values
  
  multiple pointer problem
  have i start at 0 and j start at 1
  
  logic: 
  if p1 === p2 then p2++ 
  if p1 !== p2 then p1++; array[p1] = array[p2]
  
  return p1 
  */
  
  