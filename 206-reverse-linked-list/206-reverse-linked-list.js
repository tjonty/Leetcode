/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Iterative way Time O(n) Space O(1)
    var [prev, curr] = [null, head];

    while(curr) {
        nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }

    return prev;
};
// Soln 2
   // recursive way Time O(n) 
    // Space O(n) recursive call will be of size 2
//     if(!head)
//         return null

//     newHead = head;
//     if(head.next) {
//         newHead = reverseList(head.next);
//         head.next.next = head;
//     }
//     head.next = null;

    // return newHead;
