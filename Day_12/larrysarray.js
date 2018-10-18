function processData(input) {
    var lines = input.split("\n");
    for (var t = 2; t < lines.length; t += 2) {
        var a = lines[t].split(' ').map(Number);
        var d = 0;
        for (var i = 0; i < a.length; i++) {
            for (var j = i; j < a.length; j++) {
                d ^= a[i] > a[j] ? 1 : 0;
            }
        }
        console.log(d ? "NO" : "YES");
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