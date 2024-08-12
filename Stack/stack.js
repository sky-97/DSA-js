// stack is special type of data structure like array but we control the value input and output

class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  // remove last value
  pop() {
    this.stack.pop();
  }

  // see  top of the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // check if stack empty or not
  isEmpty() {
    return this.stack.length === 0;
  }

  // give stack size
  size() {
    return this.stack.length;
  }

  // destroy stack
  clear() {
    this.stack = [];
  }

  // to check if elemnt exists
  contain(element) {
    return this.stack.includes(element);
  }

  // reverse stack
  reverse() {
    return this.stack.reverse();
  }

  // print stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;

  }
}

// usage

let myStack = new Stack();

myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.push(6);
myStack.push(7);
myStack.pop();

myStack.peek();
myStack.contain(2);

console.log(`myStack.printStack()`, myStack.printStack());
