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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var new_time = "";
    if(s.includes("AM")) {
        if(parseInt(s.substring(0,2)) == 12) {
            new_time = "00" + s.substring(2,8);
            return new_time;
        }
        return s.substring(0,8);
    }
    else {
        if(parseInt(s.substring(0,2)) > 0 && parseInt(s.substring(0,2)) < 12) {
            var hour = parseInt(s.substring(0,2));
            hour = hour + 12;
            var h2 = hour % 10;
            hour = hour/10;
            var h1 = parseInt(hour%10);
            new_time = ""+h1+h2+s.substring(2,8);
            return new_time;
        }
    }
    return s.substring(0,8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
