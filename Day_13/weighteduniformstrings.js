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

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    var countArr = [];
    var weightArr = [];
    s = s.split("").sort().join("");
    console.log(s);
    for(var i=0;i<26;i++) {
        countArr[i] = 0;
    }
    var sum = 0;
    for(var i =0;i<s.length;i++) {
        countArr[s.charCodeAt(i)-97]++;
    }
    for(var i=0;i<26;i++) {
        if(countArr[i] !=0) {
            var sum = 0;
            for(var j=0;j<countArr[i];j++) {
                sum += i + 1;
                weightArr.push(sum);
            }
        }
    }
    console.log(weightArr);
    var answer = [];
    for(var k =0 ;k<queries.length;k++) {
        if(weightArr.includes(queries[k])) {
            answer.push("Yes");
        }
        else {
            answer.push("No");
        }
    }
    return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
