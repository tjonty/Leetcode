/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
//     Time: O(nlogn) || sort + O(n^2) || for && while
//     == Time: O(n^2)
//     Space: O(1)
    var answers = [];
    var [l,r] = [0,0];
    nums.sort((a,b) => a-b);
    for(var i=0;i<nums.length-1;i++) {
        [l,r] = [i+1, nums.length-1];
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        while(l<r) {
            if(nums[l] + nums[r] + nums[i] == 0) {
                answers.push([nums[i],nums[l],nums[r]]);
                l++;
                while(l<r && nums[l] == nums[l-1]) l++;
            }
            else if(nums[l] + nums[r] + nums[i] > 0){
                r--;
            } else {
                l++;
            }
        }
    }
    return answers;
};