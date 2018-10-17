function processData(input) {
    //Enter your code here
    var currentInput=input.split('\n');
    var arr=currentInput[1].trim().split(' ').map(Number);
    var n= currentInput[0].trim().split(' ').map(Number)[1];
    for(var i=0;i<n;i++){
        var current=currentInput[i+2].toString().trim().split(' ').map(Number);
        var op=current[0];
        var st=current[1]-1;
        var end=current[2]-1;
        var tmp=arr.splice(st,1+end-st);
        if(op===1)
            {
                arr=tmp.concat(arr);
            }
        if(op===2)
            {
                 arr=arr.concat(tmp);
            }
    }
    console.log(Math.abs(arr[0]-arr[arr.length-1]));
    console.log(arr.join(' '));
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