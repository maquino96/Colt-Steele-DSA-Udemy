var rotate = function(nums, k) {
    // times out on large arrays 36/37 cases
    // for ( let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop())
    // }
    // return nums
    let front = nums.slice(nums.length-k)
    let back = nums.slice(0,k)
    return front.concat(back)

};

console.log(rotate([1,2,3,4,5,6,7],3))