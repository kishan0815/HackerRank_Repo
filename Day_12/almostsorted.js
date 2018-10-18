function processData(input) {
    var input_ref = input.split('\n');
    var arr = []; 
    input_ref[1].split(' ').forEach(function(e){arr.push(parseInt(e));});
    var n = arr.length;
    var j = 0;
    var i = null;
    var v = null;
   
    if(sorted())
        {
            console.log("yes");
            return;
        }
    
    while(j<n-1)
        {
            if(arr[j]>arr[j+1])
                {
                    i = j;
                    j = n;
                }
            j++;
        }
    j = n -1;
    while(j>i)
        {
            if(arr[j]<arr[j-1])
                {
                    v = j;
                    j = -1;
                }
            j--;
        }
 
    swap(i,v);
    if(sorted())
        {
            console.log("yes");
            console.log("swap "+(i+1)+" "+(v+1));
            return;
        }
  
    else
        {
            swap(i,v);
            reverse(i,v);
            if(sorted())
            {
                console.log("yes");
                console.log("reverse "+(i+1)+" "+(v+1));
                return;
            }
            else
            {
                console.log("no");
                return;
            }
          
        }
    function swap(a,b)
    {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    
    function reverse(a,b)
    {
        while(a<b)
            {
                swap(a,b);
                a++;
                b--;
            }
    };
    
    function sorted()
    {
        for(var t = 0; t<(n-1);t++)
        {
            if(arr[t]>arr[t+1])
                return false;
        }
        return true;
    };
        
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