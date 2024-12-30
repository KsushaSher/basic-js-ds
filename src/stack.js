const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element) {
    const node = new Node(element);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }

    this.length++;
  }

  pop() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  peek() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack,
};
