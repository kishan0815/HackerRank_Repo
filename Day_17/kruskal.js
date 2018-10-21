var vertices,V,N,total;

function prim(visited){
  if(visited.length===V)
    return;
  
  var closest=Infinity;
  var closest_node=null;
  for(var i=0;i<visited.length;i++){
    var cur=visited[i];
    for(var j=0;j<cur.neighbours.length;j++){
      if(!cur.neighbours[j].vertex.visited&&cur.neighbours[j].weight<closest){
        closest=cur.neighbours[j].weight;
        closest_node=cur.neighbours[j].vertex;
      }
    }
  }
  
  if(closest===Infinity)
    console.log('error');
  
  total+=closest;
  closest_node.visited=true;
  visited.push(closest_node);
  prim(visited);
}

function processData(input) {
  input=input.trim().split('\n').map(function(x){return x.trim().split(' ').map(function(x){return ~~x})});
  var t=input.shift();
  V=t[0],N=t[1];
  var start=input.pop()[0];
  vertices=[];
  for(var i=1;i<=V;i++){
    vertices[i]={i:i,neighbours:[],visited:0};
  }
  for(var i=0;i<input.length;i++){
    vertices[input[i][0]].neighbours.push({weight:input[i][2],vertex:vertices[input[i][1]]})
    vertices[input[i][1]].neighbours.push({weight:input[i][2],vertex:vertices[input[i][0]]})
  }
  
  total=0;
  vertices[start].visited=1;
  prim([vertices[start]]);
  console.log(total);
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