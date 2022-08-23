/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Soln 2 Time O(n) Space O(n) Optimal
//     CAN USE MAXHEAP AND OPTIMIZE THAN SOLN 1 O(KLOGN)
    var data = {}; // O(n)
    var freq = []; // O(n)
    var res = []; // O(k)

    for(var i=0;i<=nums.length;i++) // O(n)
        freq[i] = [];

    for(var num of nums) { // O(n)
        data[num] ? data[num]++ : data[num] = 1;
    }

    for(var num in data) { // O(n)
        freq[data[num]].push(num);
    }
    
    // No O(n^2) Always run =k so O(k)
    for(var i=freq.length-1;i>=0;i--) {
        if (freq[i].length > 0) {
            for(var num of freq[i]) {
                res.push(num);
                if(res.length == k)
                    return res;
            }   
        }
    }
    
};

// Soln 1: Time O(n logn) Space O(n) Not optimal, as follow up.
//     var data = {};
//     var res = [];

//     for(var num of nums) { // Time O(n)
//         data[num] ? data[num]++ : data[num]=1;
//     }

//     var keys = Object.keys(data);
//     var idx = keys.length-1;

//     keys.sort((a,b) => data[a] - data[b]); // Time O(n logn)

//     while(k >=1){
//         res.push(keys[idx]);
//         idx--;
//         k--;
//     }

//     return res;