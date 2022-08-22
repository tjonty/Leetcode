/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var data = {};
    var res = [];

    for(var num of nums) { // Time O(n)
        data[num] ? data[num]++ : data[num]=1;
    }

    var keys = Object.keys(data);
    var idx = keys.length-1;

    keys.sort((a,b) => data[a] - data[b]); // Time O(n logn)

    while(k >=1){
        res.push(keys[idx]);
        idx--;
        k--;
    }

    return res;
};