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
class Stack {
  constructor() {
    this.stack = [];
    this.stackLength = 0;
  }
  push(el) {
    this.stack.push(el);
    this.stackLength++;
  }

  pop() {
    const lastEl = this.stack.pop();
    this.stackLength--;
    return lastEl;
  }

  peek() {
    return this.stack[this.stackLength - 1];
  }
}

module.exports = {
  Stack,
};
