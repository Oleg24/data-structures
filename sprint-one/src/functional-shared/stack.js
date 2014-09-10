var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.amount = 0;
  _.extend(stack, stackMethods);
  return stack;
};

// var myStack = makeStack();

var stackMethods = {
  push : function(value){
    this[this.amount] = value;
    this.amount++;
  },
  pop : function(){
    if(this.amount>0){
      this.amount--;
      var value = this[this.amount];
      delete this[this.amount];
      return value;
    }
  },
  size : function(){
    return this.amount;
  }
};
var _ = {};
 _.extend = function(obj) {
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };
