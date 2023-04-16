const { NotImplementedError } = require('../extensions/index.js');

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
	}

	push(element) {
		this.stack.push(element);
	}

	pop() {
		let res = this.stack[this.stack.length-1];
		this.stack = this.stack.slice(0, -1);
		return res;
	}

	peek() {
		let max = this.stack[0];
		this.stack.forEach((item)=> {
			max = item > max ? item : max;
		});
		return max;
	}
}

module.exports = {
	Stack
};
// const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(7);

// console.log(stack);
// console.log(stack.peek()); // returns the peek, but doesn't delete it, returns 1
// console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
// console.log(stack.peek()); // undefined

