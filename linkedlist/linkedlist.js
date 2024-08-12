/**
 * Represents a Node in a linked list with data and a reference to the next node.
 */
// consider  Data as node.
//  Array(collection of data) as linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // In linkedlist first object is 'head' and last is called 'tail'
    // here we consider linkedlist is empty so we adding head as null
    this.head = null;
  }
}

// Insert at the beginning

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head; // point the new node to the current head
  this.head = newNode; // update head to the new node
};

// Insert at the end

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    // if the list is empty
    this.head = newNode;
    return;
  }

  let last = this.head; // start with the head of the list
  while (last.next) {
    // traverse to the end of the list
    last = last.next;
  }

  last.next = newNode; // add the new node at the end
};

// Insert at given node

LinkedList.prototype.insertAFter = function (prevNode, data) {
  if (!prevNode) {
    console.log("the given prev node cannot be null");
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete the first node (delete head)

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

// Delete last node

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // nothing to delete if list is empty
  }
  if (!this.head.next) {
    this.head = null; // if there is only one node
    return;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

// Delete by given key

LinkedList.prototype.deleteByKey = function (key) {
  //if list empty
  if (!this.head) {
    console.log("List is empty");
    return;
  }
  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log(`No no node found with key : ${key}`);
};

// search operation

LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }
  return false;
};

// traversal

LinkedList.prototype.printList = function () {
  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data); // add data to list
    current = current.next; // move to next node
  }
 return listValues.join(" -> ")
};

// reverse a linkedlist

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  // because next and prev becomes null, only prev have value
  this.head = prev;
};


let newlink = new LinkedList()
newlink.insertAtBeginning(2)
newlink.insertAtBeginning(1)
newlink.insertAtBeginning(3)


console.log(`printList`, newlink.printList());