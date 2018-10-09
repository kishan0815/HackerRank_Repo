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

// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    var sum = p;
    var temp = p;
    var count;
    if(s < p) {
        count = 0;
    }
    else {
        count = 1;
    }
    while(sum <= s) {
        if(temp <=m) {
            sum += m;
            temp = m;
        }
        else {
            if(temp - d <= m) {
                sum += m;
            }
            else {
                sum += temp - d;
            }
            temp = temp - d;
        }
        if(sum <= s) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pdms = readLine().split(' ');

    const p = parseInt(pdms[0], 10);

    const d = parseInt(pdms[1], 10);

    const m = parseInt(pdms[2], 10);

    const s = parseInt(pdms[3], 10);

    let answer = howManyGames(p, d, m, s);

    ws.write(answer + "\n");

    ws.end();
}
