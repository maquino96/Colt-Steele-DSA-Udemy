function findUniquePairs(numbers, target) {
    
    let hash = {}
    let result = []
    let visited = []
    numbers.sort( (a,b) => a-b)
    console.log(numbers)
    
    for ( let i = 0; i < numbers.length; i++){
        hash[numbers[i]] = target - numbers[i]
        console.log( hash)
    }

    console.log(hash)

    for (let i = 0; i < numbers.length; i++){
        let complement = target - numbers[i]
        if (!(visited.includes(numbers[i]) || visited.includes(complement))){
            if(hash[complement]) { 
                result.push([numbers[i], complement])    
                visited.push(numbers[i])
                visited.push(complement)
            }
        }
    }
    
    // for ( const key in hash) {
    //     let temp = []
    //     // case where 0 + target are elements in the array
    //     if (parseInt(key) === 0 && hash[key] === target) {
    //         temp.push(parseInt(key));
    //         temp.push(hash[key])
    //         result.push(temp)

    //         visited.push(parseInt(key))
    //         visited.push(hash[key])
    //     }

    //     if (!visited.includes(parseInt(key))){
    //         if ( hash[hash[parseInt(key)]] ) {
    //             temp.push(parseInt(key));
    //             temp.push(hash[key])
    //             result.push(temp)

    //             visited.push(parseInt(key))
    //             visited.push(hash[key])
    //         }

    //     }
        // console.log(temp)
    // }
    return result
}

console.log(findUniquePairs([7,0,1,2,3,4,5,6,3],3))