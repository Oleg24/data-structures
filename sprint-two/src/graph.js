var Graph = function(){
  this.vertices = [];
  this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
// if newNode the 1st node
//  add it to vertices / no edge needed
    if( this.vertices.length === 0 ){
     this.vertices.push(newNode);
// else if... vertices.length = 1
//  add edge between newNode and vertices[0]
    } else if( this.vertices.length === 1 ){
      this.vertices.push(newNode);
      this.addEdge( this.vertices[0] , newNode)
// else ...
    } else {
//    add newNode to vertices
     this.vertices.push( newNode );
//    add edge between newNode and toNode
     this.addEdge( newNode, toNode );
    }
};

Graph.prototype.contains = function(node){
  // look through vertices to see if node matches node
  return this.vertices.indexOf(node) >= 0;
};

Graph.prototype.removeNode = function(node){


  if(this.vertices.indexOf(node) >= 0 ) {
    this.vertices.splice(this.vertices.indexOf(node), 1);
    for (var i=0; i<this.edges.length; i++) {
      //sub array is this.edges[i]
      if(this.edges[i].indexOf(node) >= 0 ) {
        this.edges.splice(i, 1);
      }
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // iterate through edges
  // any of the sub array contain fromNode & toNode
  // if yes return true ; else return false;
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i].indexOf(fromNode) >= 0 && this.edges[i].indexOf( toNode ) >= 0 ){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var edge = [ fromNode , toNode ];
  this.edges.push( edge );
};
Graph.prototype.verticesChecker = function(node){
  var bool = false;
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i].indexOf(node) >=0 ){
      bool = true;
      break;
    }
  }
  if(!bool) {
    for (var i=0; i<this.vertices.length; i++ ){
      this.vertices.splice(this.vertices.indexOf(node), 1);
    }
  }
}
Graph.prototype.removeEdge = function(fromNode, toNode){
  //iterate through edges
  //if both inputs are in the sub array, remove that sub array
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i].indexOf(fromNode) >= 0 && this.edges[i].indexOf( toNode ) >= 0 ){
      this.edges.splice(i, 1);
    }

  // V = [1, 2, 3, 4, 5]
  // E = [ [2,4],[3,5],[1,2],[3,6] ]
  //
  //
  // check the edges array for fromNode and toNode
  //  if not found, remove from vertices


  this.verticesChecker(fromNode);
  this.verticesChecker(toNode);
}
};

Graph.prototype.forEachNode = function(func){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
