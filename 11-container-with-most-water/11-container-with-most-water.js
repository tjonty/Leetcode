/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var [l, r] = [0, height.length-1];
    var result = 0;

    while(l<r) {
        var area = (r-l) * (Math.min(height[l], height[r]));
        result = Math.max(area, result);
        if(height[l] < height[r]) l++
        else r--;
    }
    return result;
};