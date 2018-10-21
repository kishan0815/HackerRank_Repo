function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    var testCases = inputArray[0];
    for(var i = 1; i < inputArray.length; i++) {
        var number = inputArray[i];
        var b = inputArray[i+1]
            .split(' ')
            .map(function(item) {
                return parseInt(item, 10);
            });
        console.log(sum(b));
        i++;
    }
} 

function sum(b) {
    var counter = 0;
    var array1 = new Array(b.length);
    var array2 = new Array(b.length);
    
    array1[0] = 0;
    array2[0] = 0;
    
    for(var i = 1; i < b.length; i++) {
        array1[i] = Math.max(array1[i-1], array2[i-1] + Math.abs(1 - b[i-1]));
        array2[i] = Math.max(array2[i-1], array1[i-1] + Math.abs(b[i] - 1));
    }
    
    return Math.max(array1[b.length-1], array2[b.length-1]);
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