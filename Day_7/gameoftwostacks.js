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
 * Complete the twoStacks function below.
 */
function twoStacks(x, a, b) {
    /*
     * Write your code here.
     */
    var s1 = [];
    var s2 = [];
    var sum = 0;
    var op = 0;
    for(var i=a.length-1;i>=0;i--) {
        s1.push(a[i]);
    }
    for(var i=b.length-1;i>=0;i--) {
        s2.push(b[i]);
    }
    while(sum <= x && (s1.length > 0 && s2.length > 0)) {
        if(s1.length > 0 && s2.length > 0) {
            if(s1[s1.length - 1] <= s2[s2.length - 1]) {
                sum += s1.pop();
                if(sum <= x) {
                    op++;
                }
            }
            else if(s2[s2.length - 1] < s1[s1.length - 1]) {
                sum += s2.pop();
                if(sum <= x) {
                    op++;
                }
            }
        }
        else if(s2.length == 0) {
            sum += s1.pop();
            if(sum <= x) {
                op++;
            }
        }
        else if(s1.length == 0) {
            sum += s2.pop();
            if(sum <= x) {
                op++;
            }
        }
    }
    return op;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const nmx = readLine().split(' ');

        const n = parseInt(nmx[0], 10);

        const m = parseInt(nmx[1], 10);

        const x = parseInt(nmx[2], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

        let result = twoStacks(x, a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
