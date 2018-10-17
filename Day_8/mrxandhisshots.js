function processData(input) {
    var input = input.split("\n");
    var firstRow = input[0];
    var nShots = parseInt(firstRow.split(' ')[0]);
    var mPlayers = parseInt(firstRow.split(' ')[1]);
    var shotRanges = [], playerRanges=[]; 
    var startPos = 0;
    var found;
    var strengthCount = 0;
    if(nShots>0 && mPlayers>0){
    
    for(var i=1;i<input.length;i++){
        if(i<nShots+1){
            shotRanges.push(input[i].split(' ').map(Number));
        }else{
            playerRanges.push(input[i].split(' ').map(Number));
        } 
    }
    var sorter = function(o1, o2) {
        var result = o1[0] - o2[0];
        if (result == 0) {
            result = o1[1] - o2[1];
        }
        return result;
    };

    shotRanges.sort(sorter);
    playerRanges.sort(sorter);
       // console.log(shotRanges);
       // console.log(playerRanges);
    var end3 = (playerRanges[mPlayers-1][1]);
        
    for(var i = 0; i< mPlayers; i++){
        var start1 = (playerRanges[i][0]);
        var end1 = (playerRanges[i][1]);
        if (i < mPlayers - 1) {
            end3 = (playerRanges[i + 1][1]);
        }
        found = false;
        for (var j = startPos; j < nShots; j++) {
            var start2 = (shotRanges[j][0]);
            var end2 = (shotRanges[j][1]);

            if (start1 <= end2) {
                if (end1 >= start2) {
                    if (!found && (end3 >= start2)) {
                        //start comparing the next fielder from the first found position of the last fielder
                        startPos = j;
                        found = true;
                    }
                    strengthCount++;
                } else {
                    break;
                }
            }
        }
    }
    }
    console.log(strengthCount);
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