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

// Complete the largestRectangle function below.
function largestRectangle(h) {
    var s = []; 
    var n = h.length;
    var max = 0;
    var top;  
    var temp_area;

    var i = 0; 
    while (i < n) 
    { 
        if (s.length == 0 || h[s[s.length - 1]] <= h[i]) 
            s.push(i++); 
        else
        { 
            top = s[s.length - 1];  
            s.pop(); 

            temp_area = h[top] * (s.length == 0 ? i : i - s[s.length - 1] - 1); 

            if (max < temp_area) 
                max = temp_area; 
        } 
    }
    while (s.length > 0) 
    { 
        top = s[s.length - 1]; 
        s.pop(); 
        temp_area = h[top] * (s.length == 0 ? i : i - s[s.length - 1] - 1); 

        if (max < temp_area) 
            max = temp_area; 
    } 
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    let result = largestRectangle(h);

    ws.write(result + "\n");

    ws.end();
}
