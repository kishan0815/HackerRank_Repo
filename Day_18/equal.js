function processData(input) {
    var data = input.split("\n");
    for(var i=0;i<Number(data[0]);i++){
        var numbers = data[2 + i*2].split(" ").map(a => Number(a));
        var Rmin = Math.min(...numbers);
        var resultMin = Number.MAX_VALUE;
        for(var k=0;k<=5;k++){
            var min = Rmin - k;
            var result = 0;
            for(var j=0;j<numbers.length;j++){
                if(numbers[j] == min){
                    continue;
                }

                var dif = numbers[j] - min;
                result += Math.floor(dif / 5);
                dif = dif % 5;
                result += Math.floor(dif / 2);
                dif = dif % 2;
                result += dif;
            }
            if(result < resultMin){
                resultMin = result; 
            }
        }
        console.log(resultMin);
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