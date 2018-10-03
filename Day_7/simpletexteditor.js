function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = parseInt(input[0],10);
    var stack = [];
    var text = "";
    stack.push(text);
    for(var i=1;i<=n;i++) {
        var operation = input[i].split(" ");
        var op = parseInt(operation[0]);
        if(op == 1) {
            var temp = operation[1];
            text += temp;
            stack.push(text);
        }
        else if(op == 2) {
            var limit = parseInt(operation[1]);
            text = text.substring(0,text.length-limit);
            stack.push(text);
        }
        else if(op == 3) {
            var limit = parseInt(operation[1]);
            console.log(text.charAt(limit - 1));
        }
        else {
            stack.pop();
            text = stack[stack.length - 1];
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
