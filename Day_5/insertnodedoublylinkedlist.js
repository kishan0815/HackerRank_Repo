// Complete the sortedInsert function below.

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
function sortedInsert(head, data) {
    var temp = head;
    var node = new DoublyLinkedListNode(data);
    if(head == null)
        return node;
    if(data <= temp.data){
        node.next = temp;
        node.prev = null;
        temp.prev = node;
        return node;
    }
    while(temp.next!=null){
        if(temp.data<=data && data<temp.next.data){
            node.prev = temp;
            node.next = temp.next;
            temp.next.prev = node;
            temp.next = node;
           
            return head;
        }
        temp = temp.next;
    }
    if(temp.data <= node.data){
        temp.next = node;
        node.prev = temp;
        node.next = null;
    }
    return head;
}