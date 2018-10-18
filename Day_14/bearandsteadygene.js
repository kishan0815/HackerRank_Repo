function processData(input) {
    var lines = input.split('\n');
    var n = +lines.shift();
    var sequence = lines.shift().split('');
    var counts = {A:0, C:0, T:0, G:0}
    sequence.forEach(char => counts[char]++);
    var target_count = n / 4;
    var i = 0;
    var j = 0;
    var best = Number.POSITIVE_INFINITY;
    var sub_counts = {A:0, C:0, T:0, G:0}
    var splices = 0;
    while (j < sequence.length) {
        var max_count = Math.max(counts.A, counts.C, counts.T, counts.G);
        if (max_count <= target_count) {
            best = Math.min(best, j - i);
            counts[sequence[i]]++;
            i++;
        } else {
            counts[sequence[j]]--;
            j++;
        }
    }
    console.log(best);
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