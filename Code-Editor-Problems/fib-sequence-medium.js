
const fib = (n) => {
    if ( n <= 2 ) return 1
    return fib(n-1) + fib(n-2)
}

//returns almost instantly
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))
// console.log(fib(6))
// console.log(fib(7))

//takes an exponential amount of time
// console.log(fib(50))

const fibDP = (n, memo = {}) => {
    if ( n in memo) return memo[n];
    if ( n <=2 ) return 1

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fibDP(6))
console.log(fibDP(7))

console.log(fibDP(50))
console.log(fibDP(1000))