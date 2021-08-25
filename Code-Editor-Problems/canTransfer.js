
// Given a list and integer k, return true if there are no drops greater than k, else return false. 

let list = [100,99,98,98,101,101,100,99] // true
let list2 = [100,99,97,98,101,101,100,97] // false

const canTransfer = (list, k) => {

    let max = list[0]
    let drop = 0

    for ( let i = 0; i < list.length; i++){
        if ( list[i] > max ) max = list[i]
        if ( max - list[i] > drop ) drop = max - list[i]
        if ( drop >= k ) return false
    }
    return true

}

// console.log(canTransfer(list,3))
// console.log(canTransfer(list2,3))


/*
Given the list, k, and a range r. return the subarray where the range drops by k
*/

const canTransferRange = (list, k, r) => {

    let max = list[0]
    let drop = 0
    let left = 0
    let right = 0

    let count = 0

    for ( let i = 0; i < list.length; i++){
        if ( list[i] > max ) max = list[i]
        if ( max - list[i] > drop ) drop = max - list[i]
        if ( drop >= k ) return false
    }

    while ( r < list.length ){


        if ( list[right] > max ) max = list[right]
        if ( max - list[right] > drop ) drop = max - list[right]
        console.log(drop, max)


        count++
        right++
        console.log(right)

        if ( drop >= k ) return list.slice(left, right +1)

    }

    return true
}

console.log(canTransferRange(list, 3, 3))