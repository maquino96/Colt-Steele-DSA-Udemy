function power(base, exp){
    if (exp === 0) {return 1}
    return base * power(base, exp-1)
}

// power(2,0) // 1
// console.log(power(2,2) )// 4
// console.log(power(2,4)) // 16

function factorial(num){
    // doesn't cover negative numbers
    if (num <= 1) return 1
    return num * factorial(num-1)
}

//factorial(1) // 1
// factorial(2) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

const productOfArray = (array) => {
    if (array.length === 0) return 1;
    return array[0] * productOfArray(array.slice(1))
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

function recursiveRange(num){
    if ( num === 1 ) return 1;
    return num + recursiveRange(num-1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55

function fib(n){
    let previous1 = 0
    let previous2 = 0
    let fibequal = 1
    
    function recurse(n){
        if (n === 1 ) return 1
        previous2=previous1
        previous1=fibequal
        fibequal=previous1+previous2
        return  recurse(n-1)
    }
    recurse(n)
    return fibequal
  }

// fib(4) // 3
// fib(10) // 55
console.log(fib(28)) // 317811
console.log(fib(100)) // 354224848179262000000

/*
Pure recursion solution: Fibonacci sequence
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
*/
