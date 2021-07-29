function averagePair(array, average){
    // add whatever parameters you deem necessary - good luck!
    
    if ( array.length < 2 ) { return false}
    
    let left = 0;
    let right = array.length-1
    
    for ( let i = 0; i < array.length; i++) {
        // console.log((left + right) /2)
        if ( (array[left] + array[right]) / 2 === average) { return true }
        if  ( (array[left] + array[right]) / 2 < average) { left++ 
            } else { right-- }
    }
    return false ;
  }

  console.log(averagePair([1,2,3], 2.5))

/*
input: sorted array, average

if array.length < 2 return false

let left = 0
let right = array.length - 1

loop through array, logic
    if left + right === average > true
    if left + right < average > left++
    if left + right > average right --

return false
*/