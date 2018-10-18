function processData(input) {
    var lines = input.split('\n');
    
    var str_1 = lines.shift();
    var str_2 = lines.shift();

    var s1len = str_1.length;
    var s2len = str_2.length;
    
    var len = new Array(s1len + 1);
    for(var i = 0; i < s1len + 1; i++) {
        len[i] = new Array(s2len + 1);
        for(var j = 0; j < s2len + 1; j++) {
            len[i][j] = 0;
        }
    }

    for(var i = 0; i < s1len; i++) {
        for(var j = 0; j < s2len; j++) {
            if(str_1.charAt(i) === str_2.charAt(j)) {
                len[i+1][j+1] = len[i][j] + 1;
            }
            else {
                len[i+1][j+1] = Math.max(len[i][j+1], len[i+1][j]);
            }
        }
    }
    
    console.log(len[s1len][s2len]);
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