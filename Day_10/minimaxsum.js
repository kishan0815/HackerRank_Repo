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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;
    for(var i = 0; i < 5; i++) {
        var tempMax = arr[i%5] + arr[(i+1)%5] + arr[(i+2)%5] + arr[(i+3)%5];
        var tempMin = arr[i%5] + arr[(i+1)%5] + arr[(i+2)%5] + arr[(i+3)%5];
        if(tempMax > max) {
            max = tempMax;
        }
        if(tempMin < min) {
            min = tempMin;
        }
    }
    console.log(min + " " + max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
