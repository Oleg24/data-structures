var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.amount = 0;

  _.extend(newQueue, queueMethods);
  return newQueue;
};

// var myQueue = makeQueue();

var queueMethods = {
  enqueue: function(value){
    this[this.amount] = value;
    this.amount++;
  },
  dequeue: function(){
    if(this.amount){
    var value = this["0"];

    this.amount--;
    for(var i=0; i<this.amount; i++){
      console.log(this[i]);
      this[i] = this[i+1];
    }
    delete this[this.amount];
    return value;
    }
  },

  size: function(){
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
