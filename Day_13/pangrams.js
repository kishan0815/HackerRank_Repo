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

// Complete the pangrams function below.
function pangrams(s) {
    s = s.toLowerCase();
    var count = [];
    for(var i=0;i<26;i++) {
        count[i] = 0;
    }
    for(var i=0;i<s.length;i++) {
        count[s.charCodeAt(i)-"a".charCodeAt(0)]++;
    }
    var flag = 1;
    for(var i=0;i<26;i++) {
        if(count[i] == 0) {
            flag = 0;
            break;
        }
    }
    if(flag) {
        return "pangram";
    }
    else {
        return "not pangram";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
