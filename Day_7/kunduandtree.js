function c(n, k) {
    let numerator = 1;
    for (let x = n; x > n - k; x--) {
        numerator *= x;
    }
    let denominator = 1;
    for (let y = k; y > 0; y--) {
        denominator *= y;
    }
    return numerator / denominator;
        
}
function findRoot(parents, i) {
    if (parents[i] === i) return i;
    return findRoot(parents, parents[i]);
}
function processData(input) {
    //Enter your code here
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    let parents = [];
    for (let i = 0; i <= n; i++) parents.push(i);
    let sizes = new Array(n + 1).fill(1);
    let isRoot = new Array(n + 1).fill(true);
    isRoot[0] = false;
    
    for (let i = 1; i < n; i++) {
        const line = lines[i].split(" ");
        const u = parseInt(line[0]);
        const v = parseInt(line[1]);
        const color = line[2];
        if (color === "r") continue;
        const ur = findRoot(parents, u);
        const vr = findRoot(parents, v);
        if (ur !== vr) {
            
            if (sizes[ur] >= sizes[vr]) {
                parents[vr] = ur;
                sizes[ur] += sizes[vr];
                isRoot[vr] = false;
            }
            else {
                parents[ur] = vr;
                sizes[vr] += sizes[ur];
                isRoot[ur] = false;
            }
        }
    }
    let subtracted = 0;
    for (let j = 1; j <= n; j++) {
        if (isRoot[j] && sizes[j] > 1) {
            
            subtracted += (n - sizes[j]) * c(sizes[j], 2) + c(sizes[j], 3);
        }
    }
    let ans = (c(n, 3) - subtracted) % (Math.pow(10, 9) + 7);
    
    console.log(ans);

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