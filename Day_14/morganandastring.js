function processData(input) {
    var data = input.split(/\n/).slice(1);

    for (var i = 0; i < data.length; i += 2) {
        console.log(minLex(data[i], data[i + 1]));
    }
}

function minLex(a, b) {
    var result = [];
    while (a.length > 0 && b.length > 0) {
        if (compare(a, b) < 0) {
            result.push(a[0]);
            a = a.slice(1);
        } else {
            result.push(b[0]);
            b = b.slice(1);
        }
    }

    return result.concat(a, b).join("");
}

function compare(a, b) {
    a = a + "~";
    b = b + "~"
    if (a === b) {
        return 0;
    } else {
        return a < b ? -1 : 1;
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