var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if(list.head !== null){
      list.tail.next = node;
      if (list.head.next === null){
        list.head.next = node;
        }
      };
    list.tail = node;

    if(list.head === null){
      list.head = list.tail;
      list.head.next = null;
    }
    };

  list.removeHead = function(){
    if(list.head !== null){
    var value = list.head.value;
    if(list.head===list.tail){
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return value;
    }
  };

  list.contains = function(target){
    var hasValue = false;
    var thisNode = arguments[1] || list.head;
    if(!hasValue){
        if(thisNode.value === target){
          hasValue = true;
          return hasValue;
        } else {
          var nextNode = thisNode.next;
            if(nextNode === null){
              return hasValue;
          }
          var newTarget = target;
          return list.contains(newTarget, nextNode)
        }
    };
  }
  return list;
};



var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
