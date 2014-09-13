var makeTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = makeTree(value);
  this.children = this.children || [];
  // if(!Array.isArray(this.children)){
  //   this.children = [];
  // }
  this.children.push(newChild);

};

treeMethods.contains = function(target) {
  var currentVal = this;
    if (currentVal.value === target) {
      return true;
    }
    for(var i=0; i<currentVal.children.length; i++){
      if(currentVal.children[i].contains(target)){
        return true;
      }
    }
  return false;
}
