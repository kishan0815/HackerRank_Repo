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

// Complete the isValid function below.
function isValid(s) {
    var countArr = [];
    var count = 0;
    for(var i=0;i<26;i++) {
        countArr[i] = 0;
    }
    for(var i=0;i<s.length;i++) {
        countArr[s.charCodeAt(i)-97]++;
    }
    countArr = countArr.sort(function(a,b){ return b-a; });
    var len = 0;
    for(var i of countArr) {
        if(i == 0) {
            break;
        }
        else {
            len++;
        }
    }
    if((countArr[0] == countArr[1] + 1) || (countArr[0] == countArr[1] - 1)) {
        for(var i=1;i<len-1;i++) {
            if(countArr[i] != countArr[i+1]) {
                return "NO";
            }
        }
        return "YES";
    }
    else if( countArr[len] == countArr[len-1] + 1 || countArr[len] == countArr[len-1] - 1) {
        for(var i=0;i<len-2;i++) {
            if(countArr[i] != countArr[i+1]) {
                return "NO";
            }
        }
        return "YES";
    }
    else if(countArr[0] == countArr[1]) {
        for(var i=0;i<len-1;i++) {
            if(countArr[i] != countArr[i+1]) {
                return "NO";
            }
        }
        return "YES";
    }
    else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
