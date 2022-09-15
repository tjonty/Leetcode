
var TimeMap = function() {
    this.data = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.data[key])
        this.data[key] = [];
    this.data[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    var res = "";
//     Binary Search
    bucket = this.data[key] || [];
    var [l, r] = [0, bucket.length-1];
    
    while(l <= r) {
        mid = Math.floor((l+r)/2);
        if(this.data[key][mid][1] <= timestamp) {
            res = this.data[key][mid][0]
            l = mid+1;   
        }
        else{
            r = mid-1;   
        }
    }
    
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */