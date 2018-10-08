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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var map = new Map();
    var count = 0;
    for(var i in ar) {
        if(map.get(ar[i]) == null) {
            map.set(ar[i],1)
        }
        else {
            var c = map.get(ar[i]);
            map.set(ar[i],c+1);
        }
    }
    for (var key of map.keys()) {
        if(map.get(key) > 0) {
            if(map.get(key) % 2 == 0) {
                count += map.get(key)/2;
            }
            else {
                var temp = (map.get(key) - 1)/2;
                count += temp;
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
