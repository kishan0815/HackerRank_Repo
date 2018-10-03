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
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    var s1 = [];
    var s2 = [];
    var s3 = [];
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    for(var i=h1.length-1;i>=0;i--) {
        s1.push(h1[i]);
        sum1 += h1[i];
    }
    for(var i=h2.length-1;i>=0;i--) {
        s2.push(h2[i]);
        sum2 += h2[i];
    }
    for(var i=h3.length-1;i>=0;i--) {
        s3.push(h3[i]);
        sum3 += h3[i];
    }
    while(!( sum1==sum2 && sum2==sum3 && sum3==sum1 )) {
        if(sum1==0 || sum2 ==0 || sum3 == 0) {
            return 0;
        }
        else if(sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= s1.pop();
        }
        else if(sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= s2.pop();
        }
        else if(sum3 >= sum1 && sum3 >= sum2) {
            sum3 -= s3.pop();
        }
    }
    return sum1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
