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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    var j=0;
    var arr = [];
    var str = "hackerrank";
    for(var i=0;i<s.length;i++) {
        if(str.charAt(j) == s.charAt(i)) {
            arr.push(i);
            j++;
        }
    }
    var flag = 1;
    if(arr.length < str.length) {
        return "NO";
    }
    else {
        for(var i=0;i<arr.length-1;i++) {
            if(arr[i] > arr[i+1]) {
                flag = 0;
                break;
            }
        }
    }
    if(flag) {
        return "YES";
    }
    else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
