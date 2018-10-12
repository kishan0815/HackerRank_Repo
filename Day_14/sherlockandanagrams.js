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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    var count = 0;
    for(var i=0;i<s.length - 1;i++) {
        for(var j=0;j<s.length - 1;j++) {
            for(var k=j+1;k<s.length;k++) {
                if(i+1+k <= s.length ) {
                    var check = 0;
                    var str1 = s.substr(j,i+1);
                    var str2 = s.substr(k,i+1);
                    var countArr = [];
                    for(var l=0;l<26;l++) {
                        countArr[l] = 0;
                    }
                    for(var m=0;m<str1.length;m++) {
                        countArr[str1.charCodeAt(m) - 97]++;
                    }
                    for(var m=0;m<str2.length;m++) {
                        if(countArr[str2.charCodeAt(m) - 97] != 0) {
                            countArr[str2.charCodeAt(m) - 97]--;
                            check++;
                        }
                    }
                    if(check == str2.length) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }
    ws.end();
}
