function processData(input) {
    //Enter your code here
    
    input = input.split("\n");
    var n = parseInt(input[0], 10);
    var stack = [];
    var largestStack = [];
    largestStack.push(0);
    for(var i=1;i<=n;i++) {
        var query = input[i].split(" ");
        if(query[0] == "1") {
            stack.push(parseInt(query[1],10));
            if(stack[stack.length - 1] >= largestStack[largestStack.length - 1]) {
                largestStack.push(stack[stack.length - 1]);
            }
        }
        else if(query[0] == "2") {
            if(stack[stack.length - 1] == largestStack[largestStack.length - 1]) {
                largestStack.pop();
            }
            stack.pop();
        }
        else {
            console.log(largestStack[largestStack.length - 1]);
        }
    }
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
