/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
//     Time : O(n) Space O(1)
    // Find Middle
    var [slow, fast] = [head, head.next];
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse Second Half
    second = slow.next;
    prev = null;
    slow.next = null;
    while(second) {
        tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }    

    // Merge Two List
    second = prev;
    first = head;
    while(second){
        var [tmp1, tmp2] = [first.next, second.next];
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};