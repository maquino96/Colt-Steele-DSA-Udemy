
/*
Given 2 arrays of integers add the 2 values without changing the type of the elements in the array.

e.g. [9,3,9] [6,1] >> [1,0,0,1]
*/

const addingArray = (arr1, arr2) => {

    let long = arr1.length >= arr2.length ? arr1 : arr2
    let short = arr1.length <= arr2.length ? arr1 : arr2

    let result = []

    let count = long.length - short.length
    let newShort = short

    while ( count ) {
        newShort.unshift(0)
        count--
    }

    let carry = 0

    for (let i = long.length-1; i >= 0; i--){

        if (carry) {
            newShort[i] = newShort[i] + 1
            carry = 0
        }

        if (long[i] + newShort[i] <=9 ) result.unshift(long[i] + newShort[i])
        else {
            carry+=1
            result.unshift(long[i] + newShort[i] - 10)
        }

    }

    if (carry) result.unshift(carry)

    return result

}

console.log(addingArray([9,9,9,9,9,9], [1]))
