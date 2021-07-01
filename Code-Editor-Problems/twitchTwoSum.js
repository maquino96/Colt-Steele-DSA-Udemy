function findUniquePairs(numbers, target) {

    /* 
    This problem tests for understanding of Data Structures + JS
    Candidates should understand the use of queues + hash tables
    -- knowing that hash tables / Maps in JS are not necessarily stored in order
    
    My approach also made use of a 'visited' array so that no pairs were repeated
    */
    
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