function processData(input) {
    //Enter your code here
    
    var nums = input.split(/\s+/);
    
    var n = parseInt(nums[0]);
    
    //initialize collection of sets, indexed by node index
    var setLookup = [];
    
    for(var i=1; i<nums.length; i++){
        var x = parseInt(nums[i]);
        
        if(setLookup[x] === undefined){
            setLookup[x] = { indexlist: [x], size: 1 };
        }
    }
    
    //join sets corresponding to nodes of each edge
    for(var i=1; i<nums.length; i+=2){
        var x = parseInt(nums[i]);
        var y = parseInt(nums[i+1]);
        
        var xSet = setLookup[x];
        var ySet = setLookup[y];
        
        if(xSet === ySet){ continue; }
        
        //join sets x and y
        var newIndexList = xSet.indexlist.concat(ySet.indexlist);
        var newSet = {
            size: xSet.size + ySet.size,
            indexlist: newIndexList
        }
        
        //fix lookups for new common set
        for(var j=0; j<newIndexList.length; j++){
            setLookup[newIndexList[j]] = newSet;
        }
    }
    
    //pick out min and max sizes
    var maxSize = -1;
    var minSize = 2*n+1;
    for(var i=0; i<2*n; i++){
        if(setLookup[i] === undefined){ continue; }
        
        var set = setLookup[i];
        if(set.size > maxSize){ maxSize = set.size; }
        if(set.size < minSize){ minSize = set.size; }
    }
    
    //required output
    console.log(minSize + " " + maxSize);
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