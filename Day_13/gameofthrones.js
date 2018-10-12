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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    var countArr = [];
    for(var i=0;i<26;i++) {
        countArr[i] = 0;
    }
    for(var i=0;i<s.length;i++) {
        countArr[s.charCodeAt(i) - 97]++;
    }
    var count = 0;
    for(var i of countArr) {
        if(i % 2 != 0) {
            count++;
            if(count > 1) {
                return "NO";
            }
        }
    }
    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
