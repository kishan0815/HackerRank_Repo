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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var numbers = "0123456789";
    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special_characters = "!@#$%^&*()-+";
    
    var numberCheck=false, lowerCheck=false, upperCheck=false, specialCheck=false;
    
    for(var i = 0; i<n; i++){
        if(numbers.indexOf(password[i]) !== -1){
            numberCheck = true;
        }
        else if(lower_case.indexOf(password[i]) !== -1){
            lowerCheck = true;
        }
        else if(upper_case.indexOf(password[i]) !== -1){
            upperCheck = true;
        }
        else if(special_characters.indexOf(password[i]) !== -1){
            specialCheck = true;
        }
    }
    var count = 0;
    if(!numberCheck){
        count++;
    }
    
    if(!lowerCheck){
        count++;
    }
    
    if(!upperCheck){
        count++;
    }
    
    if(!specialCheck){
        count++;
    }
    
    if( 6 - n > 0 && 6 - n > count){
        count = 6 - n;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
