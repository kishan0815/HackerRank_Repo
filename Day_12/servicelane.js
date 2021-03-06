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

// Complete the serviceLane function below.
function serviceLane(n, cases, width) {
    var res = [];
    for(var i=0;i<cases.length;i++) {
        var start = cases[i][0];
        var end = cases[i][1];
        var min = Number.MAX_VALUE;
        for(var j = start;j<=end;j++) {
            if(min > width[j]) {
                min = width[j];
            }
        }
        res.push(min);
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nt = readLine().split(' ');

    const n = parseInt(nt[0], 10);

    const t = parseInt(nt[1], 10);

    const width = readLine().split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    let result = serviceLane(n, cases, width);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
