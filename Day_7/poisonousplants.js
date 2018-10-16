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

// Complete the poisonousPlants function below.
var count = 0;
function poisonousPlants(p) {
    var num = 0;
    var flag = 1;
    while(flag) {
        flag = 0;
        var stack = [];
        stack.push(p[0]);
        console.log(p);
        for(var i=0;i<p.length-1;i++) {
            if(p[i] < p[i+1]) {
                flag = 1;
            }
        }
        for(var i=1;i<p.length;i++) {
            if(p[i-1] >= p[i]) {
                stack.push(p[i]);
            }
        }
        p = stack.slice(0);
        num++;
    }
    return num - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
