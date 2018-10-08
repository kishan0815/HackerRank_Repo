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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    var power = 100
    var i = 0;
    do {
        if((i+k)%c.length == 0) {
            if(c[(i+k)%c.length] == 1)
                return power - 3;
            else 
                return power - 1;
        }
        else if(c[(i+k)%c.length] == 1) {
            i = (i+k)%c.length;
            power = power - 3;
        }
        else {
            i = (i+k)%c.length;
            power = power - 1;
        }
    }while(power >=0);
    return power;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
