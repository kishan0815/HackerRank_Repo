'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var size = arr.length;
    var pos = 0;
    var neg = 0;
    var zeroes = 0;
    for(var i in arr) {
        if(arr[i] == 0) {
            zeroes++;
        }
        else if(arr[i] > 0) {
            pos++;
        }
        else {
            neg++;
        }
    }
    console.log((pos/size).toPrecision(6));
    console.log((neg/size).toPrecision(6));
    console.log((zeroes/size).toPrecision(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
