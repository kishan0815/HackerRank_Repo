'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var map = new Map();
    for(var i in arr) {
        if(map.get(arr[i]) == null) {
            map.set(arr[i],0)
        }
        else {
            var c = map.get(arr[i]);
            map.set(arr[i],c+1);
        }
    }
    var maxValue = Number.MIN_VALUE;
    var minKey = Number.MAX_VALUE;
    for (var key of map.keys()) {
        if(maxValue < map.get(key)) {
            maxValue = map.get(key);
            minKey = key;
        }
        if(maxValue == map.get(key) && minKey > key) {
            minKey = key;
        }
    }
    return minKey;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
