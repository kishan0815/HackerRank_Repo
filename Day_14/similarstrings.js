function findSimilar(str, subStart, subLen) {
    var strLen = str.length;
    if (subLen == 1)
        return strLen;
    var values = []
    var used = {};
    var counter = 1;
    for (var j = 0; j < subLen; j++) {
        var ch = str[subStart + j];
        values[j] = used[ch] ?  used[ch]:used[ch] = counter++ ;
    }
    var iters = str.length - subLen + 1;
    var result = 0;
    used = {};
    
    for (var i = 0; i < iters; i++) {
        var areSimilar = true;
        counter = 1; 
        for (var j = 0; j < subLen; j++) {
            var p = str[i + j];
            var v = used[p] ?  used[p]:used[p] = counter++ ;
            if (v != values[j]) {
                areSimilar = false;
                break;
            }
        }
        used['a']=used['b']=used['c']=used['d']=used['e']=used['f']=used['g']=used['h']=used['j']=used['i']=0;
        if (areSimilar)
            result++;
    }
    return result;
}

function similarStrings(str, n, q, queries) {

    for (var i = 0; i < q; i++) {
        var subLen = queries[i][1] - queries[i][0] + 1;
        console.log(
            findSimilar(str, queries[i][0] - 1, subLen)
       );
    }

}

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var nq = lines[0].split(' ').map(Number);
    var str = lines[1];
    var queries = [];
    for (var i = 0; i < nq[1]; i++) {
        queries.push(lines[i + 2].split(' ').map(Number));
    }
    similarStrings(str, nq[0], nq[1], queries);
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