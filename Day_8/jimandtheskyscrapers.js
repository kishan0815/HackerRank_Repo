function processData(input) {
    var lines = input.split("\n");
    var n = parseInt(lines[0]);
    var buildings = lines[1].split(" ");

    var stack = [];
    var paths = 0;
    for (var i = 0; i < buildings.length; ++i) {
        var height = parseInt(buildings[i]);
        while (stack.length > 0
            && stack[stack.length - 1].h < height) {
            stack.pop();
        }

        if (stack.length > 0) {
            var top = stack[stack.length - 1];
            if (top.h === height) {
                paths += top.c;
                top.c++;
                continue;
            }
        }

        stack.push({ h: height, c: 1 });
    }

    process.stdout.write((paths * 2) + "\n");
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