/* Simple Hello World in Node.js */
'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        console.log(String(node.data));

        node = node.next;

        if (node != null) {
            console.log(sep);
        }
    }
}

function findMergeNode(headA, headB) {
    var x = [];
    while(headA.next!=null){
        x.push(headA);
        headA = headA.next;
    }
    x.push(headA);
    while(headB.next!=null){
        if(x.includes(headB)){
            return headB.data;
        }
        headB = headB.next;
    }
    if(x.includes(headB)){
        return headB.data;
    }
}

function main() {

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const index = parseInt(readLine(), 10);

        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }
      
      	var ptr1 = llist1.head;
        var ptr2 = llist2.head;

        for (var i = 0; i < llist1Count; i++) {
          if (i < index) {
            ptr1 = ptr1.next;
          }
        }

        for (var i = 0; i < llist2Count; i++) {
          if (i != llist2Count-1) {
            ptr2 = ptr2.next;
          }
        }

        ptr2.next = ptr1;

        let result = findMergeNode(llist1.head, llist2.head);

        console.log(result + "\n");
    }

}