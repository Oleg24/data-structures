var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);

  stackInstance.count = 0;

  return stackInstance;
};
// my myStack = makeStack();
// --> new object myStack;
//
var stackMethods = {
  pop : function(){
    if(!!this.count){
      this.count--;
      var value = this[this.count];
      delete this[this.count];
    return value;
    }
  },
  push : function(value){
    this[this.count] = value;
    this.count++;
  },
  size: function(){
    return this.count;
  }
};


