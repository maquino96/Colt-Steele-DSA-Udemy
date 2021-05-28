// First Version
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    console.log(arr)
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
//   function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;
  
//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }
  
//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }
  
//   console.log(pivot([4,8,2,1,5,7,6,3]))

/*
[4,8,2,1,5,7,6,3]
[2,1,3,4,5,8,7,6]
[1,2,3,4,5,7,6,8]
[1,2,3,4,5,6,7,8]



[7,5,3,4,7,9,2,4,3,1,4,6,8,0,9]
[5,3,4,2,4,3,1,4,6,0,7,7,9,8,9]

[5,3,4,2,4,3,1,4,6,0,] [7,9,8,9]
[3,4,2,4,3,1,4,0,5,6] [7,9,8,9]

[3,4,2,4,3,1,4,0] [6] -- [9,8,9] 
[2,1,0,3,4,4,3,4]

[2,1,0] [4,4,3,4] -- [8,9]
[1,0,2] [3,4,4,4] -- [8,9]

[1,0] [3] [4][4] -- [9]
[0,1]

[0]
*/

  function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
// console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
console.log(quickSort([7,5,3,4,7,9,2,4,3,1,4,6,8,0,9]))


// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1  
  
  