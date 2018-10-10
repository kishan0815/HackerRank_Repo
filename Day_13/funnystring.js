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

// Complete the funnyString function below.
function funnyString(s) {
    var flag = 1;
    var revString = s.split("").reverse().join("");
    
    for(var i=1;i<s.length-1;i++) {
        if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) != Math.abs(revString.charCodeAt(i) - revString.charCodeAt(i+1))) {
            flag = 0;
            break;
        }
    }
    if(flag) {
        return "Funny";
    }
    else {
        return "Not Funny";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
