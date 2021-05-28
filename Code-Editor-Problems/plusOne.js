const plusOne = array => {
    // does not work with BigInts
    let newNum = BigInt(parseInt(array.join('')))+BigInt(1)
    // console.log(newNum)
    return newNum.toString().split('').map( el => parseInt(el))
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


