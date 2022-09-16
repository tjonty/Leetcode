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
       // recursive way Time O(n) 
    // Space O(n) recursive call will be of size 2
    if(!head)
        return null

    newHead = head;
    if(head.next) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }
    head.next = null;

    return newHead;

};