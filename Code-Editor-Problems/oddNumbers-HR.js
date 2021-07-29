function oddNumbers(l, r) {
    let result = []
    for (let i = l; i <=r; i++){
        // console.log(result)
        // console.log(parseInt(i%2), i)
        if ( parseInt(i%2) ) {result.push(i)}
    }
    return result
}

console.log(oddNumbers(2,5))