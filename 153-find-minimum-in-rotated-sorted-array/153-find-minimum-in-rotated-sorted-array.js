/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // Time : O(n) Space : O(1)
    var [l, r] = [0, nums.length - 1];
    var min = nums[0];

    while(l <= r) {
        if(nums[l] < nums[r]){
            min = Math.min(nums[l], min);
            break;
        }

        mid = Math.floor((l+r)/2);

        min = Math.min(nums[mid], min);

        if(nums[mid] >= nums[l])
            l = mid + 1;
        else 
            r = mid - 1;
    }

    return min;
};