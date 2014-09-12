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
    console.log("line 39"+ thisNode);
    if(!hasValue){
      debugger;
        if(thisNode.value === target){
          console.log("this node === target")
          hasValue = true;
          console.log(hasValue)
          console.log("^^^this should say true")
          return hasValue;
          console.log("supposed to be true "+hasValue);
        } else {
          var nextNode = thisNode.next;
          // console.log("nextNode" + nextNode);
              console.log("supposed to be false "+hasValue)
            if(nextNode === null){
              return hasValue;
          }
          var newTarget = target;
          list.contains(newTarget, nextNode)
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
