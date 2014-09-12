var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
    if(Array.isArray(this._storage.get(i))){
      this._storage.get(i)[k] = v;
    } else {
      var arr = [];
      arr[k] = v;
      this._storage.set(i, arr);
    }



};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);

  for(var key in arr){
    if(arr[key] === arr[k]){
      return arr[key];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for(var key in arr){
    if(arr[key] === arr[k]){
      arr[key] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
