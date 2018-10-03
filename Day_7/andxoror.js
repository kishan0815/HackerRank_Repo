'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the andXorOr function below.
 */
function andXorOr(a) {
    /*
     * Write your code here.
     */
    var stack = [];
    stack.push(a[0]);
    var old, next;
    var max = Number.MIN_VALUE;

    for (var i =1; i < a.length; i++) {
        while (stack.length > 0) {
            old = stack[stack.length - 1];
            next = old ^ a[i];
            max = Math.max(next, max);
            if (old > a[i]) stack.pop();
            else break;
        }
        stack.push(a[i]);
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = andXorOr(a);

    ws.write(result + "\n");

    ws.end();
}
