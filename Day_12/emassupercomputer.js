
function replaceChar(s, i, ch) {
    return s.substr(0, i) + ch + s.substr(i + ch.length);
}

function processData(input) {
    var lines = input.split("\n");
    var nm = lines[0].split(" "), n = 1*nm[0], m = 1*nm[1];
    var grid = lines.slice(1);
    
    function rank(grid, i, j) {
        for (var o = 1; o <= Math.min(i, j, n - 1 - i, m - 1 - j); o++)
            if (grid[i-o][j] === "B" ||
                grid[i+o][j] === "B" ||
                grid[i][j-o] === "B" ||
                grid[i][j+o] === "B")
                break;
        return o;
    }
    
    function area(r) { return 4 * (r-1) + 1; }
    
    var maxprod = 0;
    for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++)
        if (grid[i][j] === "G") {
            var r = rank(grid, i, j);
            var ngrid = grid.concat();
            ngrid[i] = replaceChar(ngrid[i], j, "B");
            for (var o = 1; o < r; o++) {
                ngrid[i-o] = replaceChar(ngrid[i-o], j, "B");
                ngrid[i+o] = replaceChar(ngrid[i+o], j, "B");
                ngrid[i] = replaceChar(ngrid[i], j-o, "B");
                ngrid[i] = replaceChar(ngrid[i], j+o, "B");
            }
            
            var r2 = 0;
            for (var k = 0; k < n; k++)
            for (var l = 0; l < m; l++)
                if (ngrid[k][l] === "G")
                    r2 = Math.max(r2, rank(ngrid, k, l));
            
            maxprod = Math.max(maxprod, area(r)*area(r2));
        }
    
    console.log(maxprod);
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