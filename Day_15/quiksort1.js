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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the quickSort function below.
function quickSort(arr) {
    var left = [];
    var right = [];
    var equal = [];
    var p = arr[0];
    var res = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] < p) {
            left.push(arr[i]);
        }
        else if(arr[i] > p) {
            right.push(arr[i]);
        }
        else {
            equal.push(arr[i]);
        }
    }
    for(var i of left) {
        res.push(i);
    }
    for(var i of equal) {
        res.push(i);
    }
    for(var i of right) {
        res.push(i);
    }
    return res;
} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
