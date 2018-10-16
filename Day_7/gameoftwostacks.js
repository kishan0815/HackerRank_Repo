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
function twoStacks(x, a, b,n,m) {
    
    var sum=0,count=0,temp=0,i=0,j=0;        
        
        while(i<n && sum+a[i]<=x){   
            sum+=a[i];
            i++;
        }
        count=i;        
       
        while(j<m && i>=0){            
            sum+=b[j];             
            j++;
            while(sum>x && i>0){
                i--;
                sum-=a[i];
            }
            if(sum<=x && i+j>count)
                count=i+j;
        }
return count;
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

        let result = twoStacks(x, a, b,n,m);

        ws.write(result + "\n");
    }

    ws.end();
}