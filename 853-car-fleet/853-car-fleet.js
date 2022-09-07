/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // Time O(nlogn) Space O(n)
    var combined  = position
        .map((item, index) =>
            [item, speed[index]]
        )
        .sort((a, b) => a[0] - b[0]);

    var stack = [];
    console.log(combined);

    for(var i=combined.length-1;i>=0;i--) {
        var p = combined[i][0];
        var s = combined[i][1];

        stack.push((target - p) / s);

        if(
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length-2]
        ) stack.pop();
    }

    return stack.length;
};