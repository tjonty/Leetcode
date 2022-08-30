/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//     Time: O(n) Space O(1)
  var [left_max, right_max] = [height[0], height[height.length - 1]];
    var [l,r] = [0, height.length-1];
    var result = 0;

    while(l<r) {

        if(left_max < right_max){
            l++;
            left_max = Math.max(left_max, height[l]);
            result += left_max - height[l];
        } else {
            r--;
            right_max = Math.max(right_max, height[r]);
            result += right_max - height[r];
        }
            
    }
    return result  
};