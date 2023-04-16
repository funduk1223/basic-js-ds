const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface */
class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

function removeKFromList(l, k) {
	let curr = l;
	let prev = null;
	while (curr) {
		if (curr.value === k) {

			if (prev !== null) { 	// if prev is not a head of list
				prev.next = curr.next; 
				
				curr = curr.next; 	// not redifine prev as curr for checking prev one more for double k
			} else { 				// if prev is a head of list
				l = curr.next;
				
				prev = curr;
				curr = curr.next;
			}
		} else {
			prev = curr;
			curr = curr.next;
		}
		
	}
	return l;
}

module.exports = {
	removeKFromList
};
