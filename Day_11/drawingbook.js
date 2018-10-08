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
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    var start;
    var last;
    if(p == 1) {
        return 0;
    }
    if(n % 2 == 0) {
        if(p == n) {
            return 0;
        }
        if(p==n-1 || p == n-2) {
            return 1;
        }
        start = parseInt(p/2);
        last = parseInt((n-p)/2);
    }
    else {
        if(p == n || p == n-1) {
            return 0;
        }
        start = parseInt(p/2);
        last = parseInt((n-p)/2);
    }
    if(start <= last) {
        return start;
    }
    else {
        return last;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
