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

// Complete the encryption function below.
function encryption(s) {
    s = s.replace(/\s+/g, '');
    var upper = Math.ceil(Math.sqrt(s.length));
    var lower = parseInt(Math.sqrt(s.length));
    if(lower * upper < s.length) {
        lower = lower + 1;
    }
    var arr = new Array();
    var k = 0;
    var l = 0;
    for(var i=0;i<lower;i++) {
        var temp = [];
        for(var j=0;j<upper;j++) {
            if(s[k] == null) {
                temp.push("");
                k++;
            }
            else {
                temp.push(s[k]);
                k++;
            }
        }
        arr.push(temp);
    }
    var s = "";
    
    for(var i=0;i<upper;i++) {
        for(var j=0;j<lower;j++) {
            s += arr[j][i];
        }
        s += " ";
    }
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
