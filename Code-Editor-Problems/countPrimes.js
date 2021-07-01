const countPrimes = (n) => {
    
    let count = 0;
    let num = 0
    
    while ( num < n ) {
        if ( num===2) {
            count++;
        }
        if ( num===3) {
            count++;
        }
        if ( num===5){
            count++;          
        }
        if( num===7){
            count++;
        }
        if (num > 7){
            if ( (num%2!==0 && num%3!==0 && num%5!==0 && num%7!==0)) {
                count++;
            } 
        }
        num++
        // console.log(num)
    }
    return count
};

console.log(`Total number of prime numbers: ${countPrimes(10000)}`)