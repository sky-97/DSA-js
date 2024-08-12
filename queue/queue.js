class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift(); // first element will come out
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

let myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(7);
myQueue.enqueue(0);
myQueue.enqueue(2);
myQueue.enqueue(1);
console.log(myQueue.printQueue());
