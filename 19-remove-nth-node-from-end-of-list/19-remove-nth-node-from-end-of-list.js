/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
//     Time O(n) Space O(1)
    var dummy = new ListNode(0, head);
    var [l, r] = [dummy, head];

    while(n > 0) {
        r = r.next;
        n--;
    }

    while(r){
        r = r.next;
        l = l.next;
    }

    l.next = l.next.next;

    return dummy.next;
};