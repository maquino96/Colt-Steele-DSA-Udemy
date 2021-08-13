var getSum = function(a, b) {
    let count = 0
    
    for ( let i = 0; a < 0? i > a: i < a; a < 0 ? i--: i++){
        a < 0? count-- : count++
    }
     
    for ( let j = 0; b < 0? j > b : j < b; b < 0 ? j-- : j++){
        b < 0? count-- : count++
        console.log(count)
    }
    
    return count
};

console.log(getSum(-12,-8))