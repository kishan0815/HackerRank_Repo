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

// Complete the arrayManipulation function below.
function arrayManipulation(n,m, queries) {
    var arr = [n];
    for(var i=0;i<n;i++)
        arr[i] = 0;
    for(var i=0;i<m;i++){
        var start = queries[i][0];
        var end = queries[i][1];
        var summand = queries[i][2];
        for(var j=start-1;j<end;j++){
            arr[j] = arr[j] + summand;
        }
    }
    var max = 0;
    for(var a in arr){
        if(max < arr[a])
            max = arr[a];
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n,m, queries);

    ws.write(result + "\n");

    ws.end();
}
