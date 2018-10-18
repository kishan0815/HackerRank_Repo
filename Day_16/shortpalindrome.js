function processData(s) {
    //Enter your code here
    
    const mod       = 1000 * 1000 * 1000 +7;
    let freq        = Array(26).fill(0);
    let cfreq       = Array(26).fill(0);  
    let pairfreq    = Array(26 * 26).fill(0);  
    let ans         = 0;  
    
    for(letter in s) {  
        const  v = s.charCodeAt(letter) - 'a'.charCodeAt(0);  
        ans = (ans + cfreq[v]) % mod; 
 
        for(let nc = 0; nc < 26; ++nc) {  
            cfreq[nc] = (cfreq[nc] + pairfreq[mix(nc, v)]) % mod;
        }
 
        for(let nc = 0; nc < 26; ++nc) {  
            const idx = mix(nc, v);
            pairfreq[idx] = (pairfreq[idx] + freq[nc]) % mod;
        }
 
        freq[v]++;  
    }
    console.log(ans);  
    return 0;
    
    
} 

function mix(ch1, ch2){
    return ch1 * 26 + ch2;
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