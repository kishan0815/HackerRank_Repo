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

// Complete the anagram function below.
function anagram(s) {
    if(s.length % 2 !=0) {
        return -1;
    }
    else {
        var firstStr = s.substring(0,s.length/2);
        var secondStr = s.substring(s.length/2);
        var countArr = [];
        var count = 0;
        for(var i=0;i<26;i++) {
            countArr[i] = 0;
        }
        for(var i=0;i<firstStr.length;i++) {
            countArr[firstStr.charCodeAt(i)-97]++;
        }
        for(var i=0;i<secondStr.length;i++) {
            if(countArr[secondStr.charCodeAt(i)-97] != 0 ) {
                countArr[secondStr.charCodeAt(i)-97]--;
            }
            else {
                count++;
            }
        }
    }
    return count;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
