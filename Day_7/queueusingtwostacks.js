function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = parseInt(input[0], 10);
    var firstStack = [];
    var secondStack = [];
    for(var i=1;i<=n;i++) {
        var query = input[i].split(" ");
        if(query[0] == "1") {
           firstStack.push(parseInt(query[1]));
        }
        else if(query[0] == "2") {
            if(secondStack.length == 0) {
                while(firstStack.length > 0) {
                    secondStack.push(firstStack.pop());
                }
            }
            secondStack.pop();
        }
        else {
            if(secondStack.length == 0) {
                while(firstStack.length > 0) {
                    secondStack.push(firstStack.pop());
                }
            }
            console.log(secondStack[secondStack.length - 1]);
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
