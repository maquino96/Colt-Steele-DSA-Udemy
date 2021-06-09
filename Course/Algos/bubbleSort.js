

//predefining a swap function (ES6 syntax) made the algo much easier to implement

const bubbleSort = (array) => {
    let noSwaps;

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
        noSwaps = false;
    }

    for (let i = array.length; i > 0; i--){
        noSwaps = true;
        for( let j = 0; j < i-1; j++){ 
            console.log(array, array[j],array[j+1])
            if(array[j] > array[j+1]) { swap(array,j,j+1)}
        }
        console.log('One pass')
        if (noSwaps) break; 
    }
    return array
}

const random = [8,3,5,4,2,1]
const random2 = [8,2,3,4,5,6]

console.log(bubbleSort(random2))



// UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]){
// //Swap funtion, still pretty straight forward
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;         
//         }
//       }
//     }
//     return arr;
// }
  

//   bubbleSort([8,1,2,3,4,5,6,7]);