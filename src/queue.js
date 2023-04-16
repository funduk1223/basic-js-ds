const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

class Queue {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	getUnderlyingList() {
		return this.head;
	}

	enqueue(value) {
		let node = new ListNode(value);

		if (!this.head) {
			this.tail = node;
			this.head = node;
			return this;
		}
		this.tail.next = node;
		this.tail = node;
		return this;
	}

	dequeue() {
		let first = this.head;
		this.head = this.head.next;
		return first.value;
	}
}

module.exports = {
	Queue
};
