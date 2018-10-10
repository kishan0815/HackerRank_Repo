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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    var original = "abcdefghijklmnopqrstuvwxyz";
    var rotated = "";
    var res = "";
    k = k % 26;
    rotated = original.substring(k) + original.substring(0,k);
    for(var i = 0;i<s.length;i++) {
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) {
            res += rotated.charAt(original.indexOf(s.toLowerCase().charAt(i))).toUpperCase();
        }
        else if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) {
            res += rotated.charAt(original.indexOf(s.charAt(i)));        
        }
        else {
            res += s.charAt(i);
        }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
