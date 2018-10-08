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

// Complete the permutationEquation function below.
function permutationEquation(p) {
    var res = [];
    function indexOf(value) {
        for(var j=0;j< p.length;j++) {
            if(p[j] == value) {
                return j+1;
            }
        }
    }
    for(var i=1;i<=p.length;i++) {
        var first = indexOf(i);
        console.log(first);
        res.push(indexOf(first));
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = permutationEquation(p);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
