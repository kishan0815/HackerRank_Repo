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

// Complete the minimumDistances function below.
function minimumDistances(a) {
    var min = Number.MAX_VALUE;
    var diff;
    var flag = 0;
    for(var i = 0;i<a.length-1;i++) {
        for(var j=i+1;j<a.length;j++) {
            if(a[i] == a[j]) {
                diff = j - i;
                flag = 1;
            }
            if(diff < min) {
                min = diff;
            }
        }
    }
    if(!flag) {
        return -1;
    }
    return min; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
