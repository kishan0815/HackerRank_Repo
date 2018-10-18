function maxHashValue(hash) {
  var max = 0;
  
  for (var ch in hash) {
    if (hash[ch] > max) {
      max = hash[ch];
    }
  }
  
  return max;
}

function maxValue(arr) {
  var max = Math.max.apply(null, arr);
  var hash = {};
  
  for (var i = 1; i <= max; i++) {
    hash[i] = i * arr.reduce(function(result, item) {
      return result + Math.max(item - i + 1, 0);
    }, 0);
  }

  return maxHashValue(hash);
}

function calcMaxValue(str) {
  var hash = {}, last = '', count = 0;
  
  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === last) {
      count += 1;
    } else {
      if (count > 0) {
        if (!hash[last]) {
          hash[last] = [];
        }
        
        hash[last].push(count);        
      }
      
      count = 1;
      last = str[i];
    }
  }
  
  if (!hash[last]) {
    hash[last] = [];
  }

  hash[last].push(count); 
  
  for (var ch in hash) {
    hash[ch] = maxValue(hash[ch]);
  }
  
  return Math.max(maxHashValue(hash), str.length);
}

function processData(input) {
  console.log(calcMaxValue(input));
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