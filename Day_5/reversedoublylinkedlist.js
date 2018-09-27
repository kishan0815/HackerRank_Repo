// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
    var temp1 = head;
    while(temp1 != null){
        var temp = temp1.prev;
        temp1.prev = temp1.next;
        temp1.next = temp;
        head = temp1
        temp1 = temp1.prev;
    }
    return head;
}