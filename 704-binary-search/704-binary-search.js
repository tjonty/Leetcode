/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var [l, r] = [0, nums.length-1];
    
    while(l<=r) {
        var mid = Math.floor((l+r)/2);
        if(nums[mid] == target)
            return mid;
        else if(nums[mid] < target) 
            l = mid+1;
        else 
            r = mid-1;    
    }

    return -1;
};