function processData(input) {
    var args = input.split('\n');
    var N = Number(args[0]);
    var t = args[1].split(' ').map(x => Number(x));
    var c = t.map(x => 0);
    
    for (var i = 0; i < N; i++) {
        if (t[i] < N) {
            c[(i + 1) % N]++;
            c[(i - t[i] + 1 + N) % N]--;
        }
    }
    

    var pos, max = -1, curr = 0;
    for (var i = 0; i < N; i++) {
        curr += c[i];
        if (curr > max) {
            pos = i;
            max = curr;
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