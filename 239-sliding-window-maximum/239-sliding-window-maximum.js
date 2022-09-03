/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
//     Time O(n) Space O(1)
    var output = [];
    var queue = [];
    var [window_start, window_end] = [0, 0];

    while(window_end < nums.length) {
        // pop smaller value from queue
        while(queue.length > 0  && nums[queue[queue.length-1]] < nums[window_end]) 
            queue.pop();
        queue.push(window_end);

        // Remove left value from window
        if(window_start > queue[0])
            queue.shift();
        
        if(window_end + 1 >= k) {
            output.push(nums[queue[0]])
            window_start++;
        } 

        window_end++;
    }
    return output;
};

// 2 ways to find the maximum in the window but both failed due to the time limit exceeded
// var [window_start, window_end] = [0, k-1];
//     var output = [];

//     while(window_end<nums.length) {
//         // output.push(Math.max(...nums.slice(window_start, window_end+1))); Worked but Not for Large array
//         // output.push(nums.slice(window_start, window_end+1).reduce((a, b) => Math.max(a,b))); Worked but Not for Large array
//         window_start++;
//         window_end++;
//     }
//     return output;