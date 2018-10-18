
function findIslands(string, sub) {
    var indexes = [];
    var prev = -Infinity;
    for (var i = 0; i < string.length; i++) {
        var pos = string.indexOf(sub, i);
        if (pos > prev + sub.length) {
            indexes.push(pos);
        }
        prev = pos;
        if (pos === -1) {
            return indexes.length;
        } else {
            i = pos;
        }
    }

    return indexes.length;
}

function findSubStrings(s, islandsNo) {
    var sLength = s.length;
    var maxSubstringSize = Math.floor(sLength / islandsNo);
    var substrings = 0;

    for (var subSize = 1; subSize <= maxSubstringSize; subSize++) {
        var matches = [];
        for (var i = 0; i < sLength; i++) {
            var sub = s.substring(i, i + subSize);
            if (sub.length === subSize && matches.indexOf(sub) === -1) {
                if (findIslands(s, sub) === islandsNo) {
                    substrings++;
                }
                matches.push(sub);
            }
        }
    }

    return substrings;
}
function processData(input) {
    input = input.split("\n");
    var s = input[0];
    var islandsNo = parseInt(input[1], 10);
    var subStringsNo = findSubStrings(s, islandsNo);


    console.log(subStringsNo);
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