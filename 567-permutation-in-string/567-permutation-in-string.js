/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
//     Soln 2: Time O(n) Space O(1)
    if(s1.length > s2.length) return false;
    var s1_data = new Array(26).fill(0);
    var s2_data = new Array(26).fill(0);
    var matches = 0;

    for(var i=0;i<s1.length;i++) {
        s1_data[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2_data[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(var i=0;i<s1_data.length;i++){
        s1_data[i] === s2_data[i] ? matches++ : 0;
    }

    var window_start = 0;
    for(var window_end = s1.length; window_end<s2.length; window_end++) {
        if(matches == 26) return true;

        var index = s2[window_end].charCodeAt(0) - 'a'.charCodeAt(0);
        s2_data[index]++;
        if(s1_data[index] == s2_data[index])
            matches++;
        else if(s1_data[index] +1 == s2_data[index])
            matches--;
        
        var index = s2[window_start].charCodeAt(0) - 'a'.charCodeAt(0);
        s2_data[index]--;
        if(s1_data[index] == s2_data[index])
            matches++;
        else if(s1_data[index] - 1 == s2_data[index]) 
            matches--;
        window_start++;
    }

    return matches == 26;
};

// Soln 1: Time O(nlogn + n nlogn) Space O(1)
    // var l1 = s1.length;
    // var [l, r] = [0, l1-1];
    // s1 = s1.split('').sort().join('');
    // while(r<s2.length) {
    //     var temp_str = s2.slice(l, r+1).split('').sort().join('');
    //     if(temp_str === s1) return true;
    //     l++;
    //     r++;
    // }
    // return false;