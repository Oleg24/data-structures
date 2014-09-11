var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var qInstance = Object.create(queueMethods);

  qInstance.first = 0;
  qInstance.count = 0;
  return qInstance;
};
// var newQueue = makeQueue();

var queueMethods = {
  dequeue: function(){
    if(this.count>0){
    var value = this[this.first];
    delete this[this.first];
    this.first++;
    this.count--;
    return value;
    }
  },
  enqueue: function(value){
    this[this.first+this.count] = value;
    this.count++;
    },
  size: function(){
    return this.count;
  }
};


