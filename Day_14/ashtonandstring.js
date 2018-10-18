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
  inputString = inputString.trim().split('\n').map(str => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the ashtonString function below.
 */
/*
* Write your code here.
*/
function ashtonString(s, k) {
    k = k - 1;
    let sub1d = [];
    for (let i=0; i<s.length; i++) {
        sub1d.push(s.substr(i, s.length));
    }
    sub1d = sub1d.sort();
    let sub = [];
    let temp = '';
    let loop = true;
    let result = undefined;
    let count = 0;
    for (let i=0; i<=sub1d.length && loop; i++) {
        temp = '';
        for (let j=0; j<sub1d[i].length && loop; j++) {
            temp = temp + sub1d[i][j];
            if (sub.indexOf(temp) == -1) {
                count += temp.length;
                sub.push(temp);
            }
            if (count >= k) {
                loop = false;
                result = temp[k - (count - temp.length)];
            }
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const k = parseInt(readLine(), 10);

        let res = ashtonString(s, k);

        ws.write(res + "\n");
    }

    ws.end();
}