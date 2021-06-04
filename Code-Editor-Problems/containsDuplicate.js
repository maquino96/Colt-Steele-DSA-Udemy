var containsDuplicate = function(nums) {
    let map = {}
    for ( let i = 0; i < nums.length; i++){
      if ( !map[nums[i]] ) map[nums[i]] = 1
      else map[nums[i]]++
    }
    
    console.log(map)
    for (int in map) {
        if (map[int] !== 1) return true 
    }
    
    return false
};

console.log(containsDuplicate([1,2,3,4]))
