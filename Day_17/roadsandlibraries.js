'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nmC_libC_road = readLine().split(' ');

        const n = parseInt(nmC_libC_road[0], 10);

        const m = parseInt(nmC_libC_road[1], 10);

        const c_lib = parseInt(nmC_libC_road[2], 10);

        const c_road = parseInt(nmC_libC_road[3], 10);
        
        var forest = [];
        for(var a = 0; a < m; a++){
            var city_1_temp = readLine().split(' ');
            var city_1 = parseInt(city_1_temp[0]);
            var city_2 = parseInt(city_1_temp[1]);
            
            if(!forest[city_1]){
                forest[city_1] = [];
            }
            forest[city_1].push(city_2);
            
            if(!forest[city_2]){
                forest[city_2] = [];
            }
            forest[city_2].push(city_1);
        }
        console.log(forest);
        if(c_lib<=c_road) {
            ws.write(n*c_lib + '\n');
        }
        else {
            var count = 0;
            for(var i=1; i<=n; i++){
                if(forest[i]==undefined){
                    count++;
                }
                if(!Array.isArray(forest[i])){
                    continue;
                }
                var c = ++count;
                var que = [i];
                while(que.length){
                    var j = que.pop();
                    for(var k=0; k<forest[j].length; k++){
                        if(Array.isArray(forest[forest[j][k]]) && que.indexOf(forest[j][k])<0){
                            que.push(forest[j][k]);
                        }
                    }
                    forest[j] = count;
                }
            }
            ws.write(c_lib*count+(n-count)*c_road + '\n');
        }
    }

    ws.end();
}
