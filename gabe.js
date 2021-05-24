
/*
Given a unique array of unsorted integers, return the integer with the longest consecutive subarray 
    e.g. e.g.  [ 1, 1, 2, 3, 4, 4, 4, 5, 1, 2, 2, 2, 2, 3] >> 2

Each array inputted will have a single solution that exists.
*/ 

const gabe = (array) => {

    if( array.length === 0 ) { return 'empty array'}

    let p1 = 0
    let p2 = 1 

    let maxint = array[0]
    let maxSubCount = 1

    let subCount = 1

    for ( let i = 0; i < array.length; i++ ){

        if (array[p1] === array[p2]) { 
            subCount++
        }
        if (array[p1] !== array[p2]) { 
            if (subCount > maxSubCount) {
                maxSubCount = subCount
                maxint = array[p1]
            }
            // console.log(subCount, maxSubCount)
            subCount = 1
            p1 = p2
        }
        p2++
    }
    return maxint 
}


/* 
input array of UNSORTED integers
output integer, max consecutive subarray

e.g.  [ 1, 1, 2, 3, 4, 4, 4, 5, 1, 2, 2, 2, 2, 3] >> 2

an array of uniqe value would return the first element of the array

O(n) time
O(1) space

*/

const arr0 = [ 1, 2, 3, 4, 5]
const arr1 = [ 1, 1, 2, 3, 4, 4, 4, 5, 1, 2, 2, 2, 2, 3] 
const arr2 = [1,1,2,3,4]
const arr3 = [1,2,3,3,4,5,5,6] // can introduce logic where an array is used for multiple answers (space complexity O(n))
const arr4 = [7] 
const arr5 = []

console.log(gabe(arr5))