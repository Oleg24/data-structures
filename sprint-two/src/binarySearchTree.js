var makeBinarySearchTree = function(value){
  var newBSTree = Object.create(methods);
  newBSTree.value = value;
  newBSTree.right = null;
  newBSTree.left = null;
  return newBSTree;
};


var methods = {};




methods.insert = function(value){
  //if value is less than this.value
  if(value < this.value){
  //  we check if the left value exists
   if(this.left === null){
    this.left = makeBinarySearchTree(value);
   } else {
    this.left.insert(value);
   }
  } else if (value > this.value){
    if(this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

  methods.contains = function(target){
    // check if this.value === target
    if(this.value === target){
      return true;
    } else if (this.left !== null && target < this.value ){
      return this.left.contains(target);
    } else if (this.right !== null && target > this.value) {
      return this.right.contains(target);
    } else {
      return false;
    }
  };

  methods.depthFirstLog = function (func){
    // executes a callback on every value in a tree

// if this.value exists, run callback(this.value)
// check the children
//  if (this.left !== null){ recurse on this.left }
//  if (this.right !== null){ func(this.right) }
  if(this.value !== null) {
    func(this.value);
  }
  if (this.left !== null) {
    this.left.depthFirstLog( func );
  }
  if (this.right !== null) {
    this.right.depthFirstLog( func );
  }

  };
//tree.depthFirstLog(function(x){console.log(x*2)})




/*
 * Complexity: What is the time complexity of the above functions?
 */

// var tree = new makeBinarySearchTree
