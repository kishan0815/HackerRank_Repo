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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var count= 0;
    var repeat = parseInt(n/s.length);
    var remaining = n % s.length;
    for(var i=0;i<s.length;i++) {
        if(s[i%s.length] === 'a') {
            count++;
        }
    }
    var lastCount = 0;
    for(var i=0;i<remaining;i++) {
        if(s[i] === 'a') {
            lastCount++;
        }
    }
    return count * repeat + lastCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
