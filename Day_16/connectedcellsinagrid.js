var array = null;
function processData(input) {
    var temp = input.split('\n');
    
    array = new Array();
    var rows = +temp[0],
        columns = +temp[1];
    
    var row_values = null;
    for(var i = 0; i < rows; i++) {
        array[i] = new Array();
        row_values = temp[2 + i].split(' ');
        for (var x = 0; x < columns && x < row_values.length; x++) {
            array[i][x] = row_values[x];
        }
    }
    var max = 0,
        temp = 0;
    for(var i=0;i<rows;i++) {
        for(var x=0;x<columns; x++) {
            if(array[i][x]==1) {
                temp = countConnectedCell(i, x, rows, columns);
                if(temp>max) {
                   max = temp;
                }
            }
        }
    }
    console.log(max);
}

function countConnectedCell(row, column, rows, columns) {
    if(row < 0 || column < 0 || row >= rows || column >= columns) {
        return 0;
    }
    if (array[row][column] == 0 || array[row][column] ==-1) {
        return 0;
    }
    array[row][column] = -1;
    return 1 
            + countConnectedCell(row, column + 1, rows, columns)
            + countConnectedCell(row, column - 1, rows, columns)
            + countConnectedCell(row +1 , column - 1, rows, columns)
            + countConnectedCell(row +1 , column, rows, columns)
            + countConnectedCell(row +1 , column + 1, rows, columns)
            + countConnectedCell(row -1, column - 1, rows, columns)
            + countConnectedCell(row -1, column, rows, columns)
            + countConnectedCell(row -1, column + 1, rows, columns);
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