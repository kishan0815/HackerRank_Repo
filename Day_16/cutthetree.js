function processData(input) {
  var _ = require('lodash')
  input = input.split('\n')
  var N = Number(input.shift())
  var weights = input.shift().split(' ').map(Number)
  var nodes = []

  weights.forEach(function(x, i) {
    nodes.push({weight: x, edges: [], visited: false})
  })

  for (var i = 0; i < N - 1; i++) {
    var f = Number(input[i].substr(0, input[i].indexOf(' ')))
    var t = Number(input[i].substr(input[i].indexOf(' ') + 1))
    nodes[f - 1].edges.push(t - 1)
    nodes[t - 1].edges.push(f - 1)
  }

  var total = _.reduce(weights, (a,v) => a + v);
  var min = Infinity;

  function traverse(n, cb) {
    var node = nodes[n];
    node.visited = true;

    var subTreeSum = 0;
    var stack = _.clone(node.edges);

    (function _traverse() {
      if (!stack.length) return cb(subTreeSum + node.weight);
      process.nextTick(function() {
        var nextNode = stack.pop()
        if (nodes[nextNode].visited) return process.nextTick(_traverse);

        traverse(nextNode, function(sum) {
          min = Math.min(min, Math.abs(total - 2 * sum));
          subTreeSum += sum;
          return process.nextTick(_traverse);
        });
      });
    })();
  }

  traverse(0, (ans) => {
    console.log(min);
  })
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