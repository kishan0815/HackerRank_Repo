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

// Complete the hackerlandRadioTransmitters function below.
function hackerlandRadioTransmitters(x, k) {
    var minTowers = 0;
    x = x.sort(function(a,b){ return a-b; });
    var n = x.length;
    var i = 0;
    while(i < n){
        minTowers++;
        
        var temp = x[i] + k; 
        while(i < n && x[i] <= temp) {
            i++;
        }
        
        i--;    
 
        temp = x[i] + k;
        while(i < n && x[i] <= temp) {
            i++;
        }
    }
    return minTowers;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));

    let result = hackerlandRadioTransmitters(x, k);

    ws.write(result + "\n");

    ws.end();
}
