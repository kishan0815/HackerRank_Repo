function processData(input) {
    var lines = input.split('\n');
    run(lines, 1, lines.length)
} 

function run(strings, start, end) {
    var tree = {};
    for (var i=start; i<end; i++) {
        var string = strings[i];
        var success = trie(tree, string, 0, false);
        if (success !== true) {
            console.log('BAD SET');
            console.log(success);
            return;
        }
    }
    console.log('GOOD SET')
}

function trie(tree, string, level, created) {
    var ch = string.charAt(level);
    var existing = tree[ch];

    if (existing == undefined) {        
        if (level > 0 && created == false && tree.children == false) {
            return string;
        }
        tree.children = true;
        tree[ch] = { children : false };
        created = true;
    }

    if (level < string.length-1)
        return trie(tree[ch], string, level+1, created);
    else 
        if (created == false)
            return string;
        else 
            return true;
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