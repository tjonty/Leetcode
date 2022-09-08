/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
        // Soln Time O(n) Space O(n)
    var stack = [];
    var maxArea = 0;

    for(var i=0;i<heights.length;i++) {
        var start = i;

        while(stack.length > 0 && stack[stack.length-1][1] > heights[i]) {
            var [lastI, lastH] = stack.pop();  
            maxArea = Math.max(maxArea, lastH * (i- lastI));
            start = lastI
        }

        stack.push([start, heights[i]]);
    }

    for(var i=0;i<stack.length;i++){
        var currentArea = stack[i][1] * (heights.length - stack[i][0]);
        maxArea = Math.max(currentArea, maxArea);
    }

    return maxArea;
};