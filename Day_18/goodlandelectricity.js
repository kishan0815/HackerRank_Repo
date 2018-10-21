function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var line1 = lines[0].split(' ');
    var n = Number(line1[0]);
    var k = Number(line1[1]) - 1;
    var arr = lines[1].split(' ');
    // console.log(n, k, arr)
    var flag_target_last = -1;
    var flag_target = -1;
    var on_arr = [];
    while (flag_target < n - 1) {
        if (flag_target === -1) {
            flag_target += k + 1;
        } else {
            if (flag_target + k >= n - 1) {
                break;
            } else {
                flag_target += 2 * k + 1;
            }
        }
        if (flag_target > n - 1) {
            flag_target = n - 1;
        }
        var conti_zero = 0;
        while (arr[flag_target] === '0' && flag_target > flag_target_last) {
            if (flag_target_last === -1 || flag_target_last + 2 * k + 1 >= n - 1) {
                if (++conti_zero > k) {
                    console.log(-1);
                    return;
                }
            } else {
                if (++conti_zero > 2 * k) {
                    console.log(-1);
                    return;
                }
            }
            flag_target--;
        }
        on_arr.push(flag_target);
        flag_target_last = flag_target;
    }
    console.log(on_arr.length);
    // console.log(on_arr.length, on_arr);
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