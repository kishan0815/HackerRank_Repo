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

// Complete the gemstones function below.
function gemstones(arr) {
    var count = 0;
    var countArr = [];
    for(var j=0;j<26;j++) {
        countArr[j] = 0;
    }
    for(var i=0;i<arr.length;i++) {
        for(var j=0;j<arr[i].length;j++) {
            if((countArr[arr[i].charCodeAt(j) - 97] ) == i) {
                countArr[arr[i].charCodeAt(j)-97]++;
            }
        }
    }
    console.log(countArr);
    for(var k =0;k<countArr.length;k++) {
        if(countArr[k] == arr.length) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
