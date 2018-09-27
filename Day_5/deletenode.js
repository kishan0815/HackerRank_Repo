// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
    var curr = head;
    if(position == 0){
        return head.next;
    }
    for(var i =0;i < position - 1;i++){
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
}