'use strict';


function solve(A, N) {
    var T = 0;
    var res = 0;
    var B = [];
    while (A.length > 0 || B.length > 0) {
        if (A.length > 0) {
            var idx = 0;
            for (; idx < A.length; idx++) {
                if (A[idx].t > T) { idx--; break; }
            }
            if (B.length == 0) {
                if (idx == -1) {
                    idx = 0;
                }
                B = A.splice(0, idx + 1);
            } else {
                if (idx > -1) {
                    B = B.concat(A.splice(0, idx + 1));
                }
            }
            B.sort(function (o1, o2) {
                if (o1.l == o2.l) {
                    return o1.t - o2.t;
                } else {
                    return o1.l - o2.l;
                }
            });
        }
        if (B.length > 0) {
            var o = B.shift();
            T = Math.max(o.t, T) + o.l;
            res += T - o.t;
        }
    }
    console.log(Math.floor(res / N));
}


function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var N = parse_fun(lines.shift());

    var A = [];
    for (var i = 0; i < N; i++) {
        var data = lines[i].trim().split(' ').splice(0, 2).map(parse_fun);
        A[i] = { t: data[0], l: data[1] };
    }

    A.sort(function (o1, o2) {
        if (o1.t == o2.t) {
            return o1.l - o2.l;
        } else {
            return o1.t - o2.t;
        }
    });

    solve(A, N);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });