function processData(input) {
    //Enter your code here
    var inputArray = input.split("\n");
    var N = Number(inputArray[0].split(" ")[0]);
    //var M = Number(inputArray[0][1]);
    var array = inputArray[1].trim().split(" ").map(Number);
    var res = countWays(N, array);
    //console.log(N);
    //console.log(array);
    console.log(res);
    
} 

function countWays(N, array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        res[i] = 1;
    }
    var result = [res];
    for (var i = 1; i <= N; i++) {
        result[i] = [];
        for (var j = 0; j< array.length; j++) {
            result[i][j] = j==0?0:result[i][j-1];
            if (i-array[j]>=0) {
                result[i][j]+=result[i-array[j]][j];
            } 
        }
    }
    //console.log(result);
    return result[N][array.length-1];
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});