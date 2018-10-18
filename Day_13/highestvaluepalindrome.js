function processData(input) {
    input = formatInput(input);
    makePalindrome(input);
    if(input.k < 0) {
        console.log(-1);
        return;
    }
    maximize(input);
    
    console.log(input.k < 0 ? -1 : input.n.join(''));
}

function maximize(input) {
    for(var i = 0; i < Math.floor(input.n.length / 2) && input.k > 0; i++) {        
        if(input.n[i] != 9 && typeof(input.n[i]) == 'number') {
            input.n[i] = 9;
            input.n[input.n.length-i-1] = 9;
            input.k--;
        } else if(input.n[i] != 9 && input.k > 1) {
            input.n[i] = 9;
            input.n[input.n.length-i-1] = 9;
            input.k -= 2;
        }
    }
    if(input.k > 0 && input.n.length % 2 != 0) {
        input.n[Math.floor(input.n.length / 2)] = 9;
    }
}

function makePalindrome(input) {
    for(var i = 0; i < Math.floor(input.n.length / 2); i++) {
        if(input.n[i] != input.n[input.n.length-i-1]) {
            var j = input.n.length-i-1;
            var max = Math.max(input.n[i], input.n[j])
            input.n[i] = max;
            input.n[j] = max;
            input.k--;
        }
    }
}

function formatInput(input) {
    input = input.split(/[\n ]/);
    return {k: parseInt(input[1]), n: input[2].split('')};
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