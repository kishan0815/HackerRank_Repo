// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    var result = null;
    if(head1 == null)
        return head2;
    else if(head2 == null)
        return head1;
    
    if(head1.data <= head2.data){
        result = head1;
        result.next = mergeLists(head1.next,head2);
    }
    else{
        result = head2;
        result.next = mergeLists(head1,head2.next);
    }
    return result;
}