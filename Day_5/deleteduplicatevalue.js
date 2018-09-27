// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    var temp = head;
    var d;
    while(temp.next != null){
        d = temp.data;
        if(d != temp.next.data){
            temp = temp.next;
        }
        else{
            if(temp.next.next == null){
                temp.next = null;
            }
            else{
                temp.next = temp.next.next;
            }
        }
    }
    return head;
}