function meanderingArray(unsorted) {
    // Write your code here
    
    let result = []
    let tempArr = unsorted.sort((a,b) => a-b)
    
    while (tempArr.length !== 0) {
        result.push(tempArr.pop())
        result.push(tempArr[0])
        tempArr.shift()
    }

    return result
}

/*

input: array of ints
output: 'meandering array'

declare a new array, result
declare new temp array = sort the input array from least to greatest 

while (tempArr.length !== 0)
    result.push(tempArr.pop())
    result.push(tempArr[0])
    tempArr.shift()

return result
*/