// Node class represents a node in the doubly linked list
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data; // Data stored in the node
    this.next = next; // Pointer to the next node in the list
    this.prev = prev; // Pointer to the previous node in the list
  }
}

// DoublyLinkedList class represents a doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
  }
}

// Insert a node at the beginning of the list
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  // Create a new node with 'data', pointing to the current head and having no previous node
  const newNode = new Node(data, this.head, null);

  // If the list is not empty, update the previous head's previous pointer to the new node
  if (this.head !== null) {
    this.head.prev = newNode;
  }

  // Update the head to be the new node
  this.head = newNode;

  // If the list was empty, update the tail to be the new node as well
  if (this.tail === null) {
    this.tail = newNode;
  }
};

// Insert a node at the end of the list
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  // Create a new node with 'data', having no next node and pointing to the current tail
  const newNode = new Node(data, null, this.tail);

  // If the list is not empty, update the current tail's next pointer to the new node
  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  // Update the tail to be the new node
  this.tail = newNode;

  // If the list was empty, update the head to be the new node as well
  if (this.head === null) {
    this.head = newNode;
  }
};

// Insert a node with 'data' after the given 'prevNode'
DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  // Check if the provided prevNode is valid
  if (!prevNode) {
    return "Invalid prev node"; // Return an error message if prevNode is not valid
  }

  // Create a new node with 'data', setting its 'next' pointer to the next node of prevNode
  // and its 'prev' pointer to prevNode
  const newNode = new Node(data, prevNode.next, prevNode);

  // If prevNode has a next node, update the next node's previous pointer to the new node
  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }

  // Set the next pointer of prevNode to the new node
  prevNode.next = newNode;

  // If the new node has no next node (i.e., it is now the last node), update the tail to the new node
  if (newNode.next === null) {
    this.tail = newNode;
  }
};

// Delete the first node of the doubly linked list
DoublyLinkedList.prototype.deleteFirstNode = function () {
  // Check if the list is empty
  if (!this.head) {
    return "List is already empty"; // Return an error message if the list is empty
  }

  // If the list has only one node
  if (this.head === this.tail) {
    this.head = null; // Set head to null
    this.tail = null; // Set tail to null
  } else {
    // If there are multiple nodes
    this.head = this.head.next; // Move the head to the next node
    this.head.prev = null; // Set the new head's prev pointer to null
  }
};

// Delete the last node of the doubly linked list
DoublyLinkedList.prototype.deleteLastNode = function () {
  // Check if the list is empty
  if (!this.tail) {
    return "List is already empty"; // Return an error message if the list is empty
  }

  // If the list has only one node
  if (this.head === this.tail) {
    this.head = null; // Set head to null
    this.tail = null; // Set tail to null
  } else {
    // If there are multiple nodes
    this.tail = this.tail.prev; // Move the tail pointer to the previous node
    this.tail.next = null; // Set the new tail's next pointer to null
  }
};

// Reverse the order of the nodes in the doubly linked list
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head; // Start with the head of the list
  let temp = null; // Temporary variable for swapping

  // Traverse the list and swap the next and prev pointers for each node
  while (current !== null) {
    // Swap the next and prev pointers
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the next node in the original order (which is now prev in the reversed order)
    current = current.prev;
  }

  // After the loop, temp will be pointing to the new head of the list
  if (temp !== null) {
    // Update head and tail pointers
    this.tail = this.head;
    this.head = temp.prev;
  }
};
