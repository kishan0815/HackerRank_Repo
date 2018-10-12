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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for(var i=1;i<n;i++) {
        var temp = arr[i];
        for(var j=i-1;j>=0;j--) {
            if(temp > arr[j]) {
                arr[j+1] = temp;
                break;
            }
            else {
                arr[j+1] = arr[j];
            }
        }
        if(arr[0] > temp) {
            arr[0] = temp;
        }
        console.log(arr.join(" "));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
