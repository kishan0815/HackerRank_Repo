function processData(input) {
            var lines = input.split("\n");
            var T = parseInt(lines[0]);

            var index = 1;
            for (var i = 0; i < T; i++) {
                var l = lines[index].split(" ").map(Number);
                var N = parseInt(l[0]);
                var M = parseInt(l[1]);

                cube = {};

                for (var j = 0; j < M; j++) {
                    var ll = lines[index + j + 1].split(" ");
                    var command = ll[0];

                    if (command == "UPDATE")
                        doUpdate(parseInt(ll[1]), parseInt(ll[2]), parseInt(ll[3]), parseInt(ll[4]));
                    else if (command == "QUERY")
                        doQuery(parseInt(ll[1]), parseInt(ll[2]), parseInt(ll[3]), parseInt(ll[4]), parseInt(ll[5]), parseInt(ll[6]));
                }

                index += M + 1;
            }
        }

        function doUpdate(x, y, z, val) {
            cube[x * 1000 * 1000 + y * 1000 + z] = val;
        }

        function doQuery(x1, y1, z1, x2, y2, z2) {

            var sum = 0;
            for (var key in cube) {
                var x = Math.floor(key / 1000000);
                var y = Math.floor((key - x * 1000000) / 1000);
                var z = Math.floor((key - x * 1000000 - y * 1000));

                if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2)
                    sum += cube[key];
            }
            process.stdout.write(sum + "\n");
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