function maxSubarraySum(array, num){
    // add whatever parameters you deem necessary - good luck!

    if (array.length < num) { return null}
    let maxSum = 0
    let tempSum = 0

    for ( let i=0; i < num; i++) {
        tempSum+=array[i]
    }

    maxSum = tempSum

    for ( let j=num; j < array.length; j++ ){
        tempSum = tempSum - array[j-num] + array[j] 
        if (tempSum > maxSum) { maxSum = tempSum }
    }

    return maxSum
  }
  
  console.log(maxSubarraySum([100,200,300,400],2))
  console.log(maxSubarraySum([2,3],3))
  console.log(maxSubarraySum([-3,4,2,10,23,3,1,0,20],4))


  /*
  input: array of integers, length of subarray
  output: max sum of subarray

  notes: consecutive elements from the input array makeup the subarray

  let maxSum = 0
  let tempSum = 0

  catch, if array.length < subarray.length, return null

  loop 1 to determine the initial window
    let i = 0; i < subarray.length; i++)
    maxSum = sum of 1st subarray
    tempSum = sum of 1st subarray

  loop 2 
    let j = i+1; j < array.length; j++ 
    tempSum = tempSum - array[j-subarray.length] + array[j]

    if(tempSum > maxSum) { maxSum = tempSum}

  return maxSum
  */

