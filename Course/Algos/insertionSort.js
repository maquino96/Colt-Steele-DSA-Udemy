// const insertionSort = array => {

//     const swap = (arr,idx1,idx2) => {
//         let temp;
//         temp= arr[idx1]
//         arr[idx1] = arr[idx2]
//         arr[idx2] = temp
//     }

//     for ( let i = 1; i < array.length; i++){
//         if (array[i] < array[i-1]){
//             // console.log(array)
//             for ( let j = i; j >= 0; j--){
//                 console.log(array)
//                 if (array[j] < array[j-1]) { swap(array, j, j-1)} 
//             }
//         }
//     }
//     return array   
// }

// console.log(insertionSort([3,4,5,6,1,2]))


//Colt's Inplementation
// doesn't make use of as many swaps

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))