var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.first = 0;


};

Queue.prototype.enqueue = function(value){
  this[this.count + this.first] = value;
  this.count++;
};
Queue.prototype.dequeue = function(){
  if(this.count>0){
    var value = this[this.first];
    delete this[this.first];
    this.first++;
    this.count--;
    return value
  }
};
Queue.prototype.size = function(){
  return this.count;
}
