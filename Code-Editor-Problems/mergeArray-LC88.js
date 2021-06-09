var merge = function(nums1, m, nums2, n) {
    let holdNum;
    for ( let i = 0, j = 0; i <= nums1.length; ){
        console.log(nums1[i],nums2[j])

        if (nums1[i] > holdNum || nums1[i] === 0) {
            let temp = nums1[i];
            nums1[i] = holdNum;
            holdNum = temp;
            i++ 
        }
        if( nums1[i] <= nums2[j] && nums1[i] !== 0 ) {
            i++
            // console.log('i++')
        } else if( nums1[i] > nums2[j]){
            holdNum = nums1[i];
            nums1[i] = nums2[j];
            j++;
        } else if(nums1[i] === 0 ){
            nums1[i] = nums2[j];
            i++
            j++
        }
        // console.log(nums1, nums2)
    }
    return nums1
};

console.log(merge([2,2,2,0,0,0], 3, [1,5,6], 3))