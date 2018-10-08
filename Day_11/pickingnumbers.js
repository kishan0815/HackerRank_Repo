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

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    var tempArr = [];
    var maxLen = Number.MIN_VALUE;
    for(var i in a) {
        if(maxLen < a[i]) {
            maxLen = a[i];
        }
    }
    for(var i=1;i<=maxLen;i++) {
        tempArr[i] = 0;
    }
    for(var i =0;i<a.length;i++) {
        tempArr[a[i]]++;
    }
    console.log(tempArr);
    var max = Number.MIN_VALUE;
    for(var i=1;i<=maxLen-1;i++) {
        var sum = tempArr[i]+tempArr[i+1]
        if(max < sum) {
            max = sum;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
