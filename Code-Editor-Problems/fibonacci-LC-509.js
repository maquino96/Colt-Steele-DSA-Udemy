var fib = function(n) {
    //recursive O(2^n) time, O(n) space solution
    if( n <=1){
        // console.log(n)
        return n
    }
    return fib(n-1) + fib(n-2)
};

console.log(fib(5))