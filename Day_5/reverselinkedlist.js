// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
    var temp1 = head;
    var temp2 = null;
    var temp3 = null;
    while(temp1!=null){
        temp2 = temp1.next;
        temp1.next = temp3;
        temp3 = temp1;
        temp1 = temp2;
    }
    return temp3;
}