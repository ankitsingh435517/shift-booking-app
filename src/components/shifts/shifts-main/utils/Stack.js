class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.isEmpty()) return this.items.pop();

    return -1;
  }

  peek() {
    if (!this.isEmpty()) return this.items[this.items.length - 1];

    return -1;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

export default Stack;