function processData(input) {
    input.split("\n").splice(1).map(ligne => console.log(z_function(ligne).reduce((a, b) => a + b)))
} 

function z_function(s) {
    var n = s.length,
     z = [];
    z[0] = n
    for (var i = 1, l = 0, r = 0; i < n; ++i) {
        if (typeof z[i] === "undefined") z[i] = 0;
        if (i <= r)
            z[i] = Math.min (r - i + 1, z[i - l]);
        while (i + z[i] < n && s[z[i]] == s[i + z[i]])
            ++z[i];
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
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