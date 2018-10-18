function processData( input ) {

    var data = input.split('\n'),
        info = data.shift().split(' '),
        rows = +info[0],
        cols = +info[1],
        N = +info[2],
        split = function( el ) { return el.split(' ') },
        matrix = data.map( split ),
        newMatrix = data.map( split ),
        newP = 0,
        getNewPos = function( row,col,border,N ) {

            var maxN = rows*2 - 2 + cols*2 - 2 - border* 8,
                adjN = N > maxN ? N - Math.floor( N / maxN ) * maxN : N;

            while( adjN > 0 ) {

                switch( true ) {

                    case col === border && row !== ( rows - 1 - border ):

                        row++;

                        break;

                    case row === ( rows - 1 - border ) && col !== ( cols - 1 - border ):

                        col++;

                        break;

                    case col === ( cols - 1 - border ) && row !== border:

                        row--;

                        break;

                    default:

                        col--;

                        break;

                }

                adjN--;

            }

            return [row,col];

        };

    for( var row = 0; row < rows; row++ ) {

        for( var col = 0; col < cols; col++ ) {

            var revRow = row >= rows / 2 ? rows - row - 1 : row,
                revCol = col >= cols / 2 ? cols - col - 1 : col;

            newP = getNewPos( row, col, Math.min( revRow,revCol ), N );

            newMatrix[ newP[0] ][ newP[1] ] = matrix[ row ][ col ];

        }

    }

    newMatrix.map( function( el ) { console.log( el.join(' ') ); } )

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