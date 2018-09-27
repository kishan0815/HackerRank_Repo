// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(head1, head2) {
    if(head1 == null && head2 == null)
        return true;
    else if(head1 !=null && head2 == null)
        return false;
    else if(head1 == null && head1 !=null)
        return false;
    else{
        while(head1.next != null && head2.next !=null){
            if(head1.data == head2.data){
                head1 = head1.next;
                head2 = head2.next;
            }
            else{
                return false;
            }
        }
        if(head1.next !=null)
            return false;
        if(head2.next != null)
            return false;
        else{
            if(head1.data == head2.data)
                return true;
        }
    }
    return false;
}