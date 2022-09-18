/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
//     Time :O(n) Space: O(n)
    var set = new Set();
    while(head){
        if(set.has(head))
            return true;
        set.add(head)
        head = head.next
    }
    return false;
};