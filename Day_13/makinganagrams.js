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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    var countArr = [];
    var count = 0;
    for(var i=0;i<26;i++) {
        countArr[i] = 0;
    }
    for(var i=0;i<s1.length;i++) {
        countArr[s1.charCodeAt(i)-97]++;
    }
    for(var i=0;i<s2.length;i++) {
        if(countArr[s2.charCodeAt(i)-97] != 0 ) {
            countArr[s2.charCodeAt(i)-97]--;
            count++;
        }
    }
    return  s1.length + s2.length - 2 *count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
