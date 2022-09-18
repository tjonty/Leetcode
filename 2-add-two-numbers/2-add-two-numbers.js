/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(null);
    var head = dummy;
    var carry = 0;
    while(l1 || l2) {
        l1_val = l1 == undefined ? 0 : l1.val;
        l2_val = l2 == undefined ? 0 : l2.val;
        var sum = l1_val + l2_val + carry;
        if(sum >= 10){
            var temp = sum-10;
            dummy.next = new ListNode(temp);
            carry = 1
        } else {
            var temp = sum
            dummy.next = new ListNode(val = temp);
            carry = 0;
        }
        l1 = l1 == undefined ? null : l1.next;
        l2 = l2 == undefined ? null : l2.next;
        dummy = dummy.next;
    }
    if(carry == 1)
        dummy.next = new ListNode(1);
    
    return head.next;
};