const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class ListNodeTree {
	constructor(data, left, right) {
		this.data = data;
		this.leftNode = left == null ? null : left; // set leftNode
		this.rigthNode = right == null ? null : right; // set rightNode
	}
}

class BinarySearchTree {

	constructor() {
		this.rootTree = null;
		this.head = null;
	}

	root() {
		return this.rootTree !== null ? this.rootTree : null;
	}

	add(data) {
		let node = new ListNodeTree(data);
		if (this.rootTree === null) { //update rootTree by first tree added; 
			this.rootTree = node;
			this.head = node;
			return this;
		}
		let nextNode = this.head;
		let lastNode = null;
		
		while (nextNode){
			lastNode = nextNode;
			if (data > nextNode.data) {
				nextNode = nextNode.rigthNode;
			}
			else if (data < nextNode.data) {
				nextNode = nextNode.leftNode;
			}
			else if (data === nextNode.data) return this;
		}
		
		if (lastNode.data < node.data) {
			lastNode.rigthNode = node;
		} else {
			lastNode.leftNode = node;
		}
		return this;
	}

	toJSON() {
		console.log(JSON.stringify(this.rootTree, null, 4));
	}

	has(data) {
		let nextNode = this.rootTree;
		while (nextNode){
			if (data > nextNode.data) {
				nextNode = nextNode.rigthNode;
			}
			else if (data < nextNode.data) {
				nextNode = nextNode.leftNode;
			}
			else if (data === nextNode.data) return true;
		}
		return false;
	}

	find(data) {
		let nextNode = this.head;
		while (nextNode){
			if (data > nextNode.data) {
				nextNode = nextNode.rigthNode;
			}
			else if (data < nextNode.data) {
				nextNode = nextNode.leftNode;
			}
			else if (data === nextNode.data) return nextNode; // !
		}
		return null;
	}

	remove(data) {
		this.rootTree = removeNode(this.rootTree , data);

		function removeNode(node, data) {
			if(!node) {
				return null;
			}

			// find node with input data;
			if (data < node.data) {
				node.leftNode = removeNode(node.leftNode, data);
				return node;
			} else if (data > node.data) {
				node.rigthNode = removeNode(node.rigthNode, data);
				return node;
			} else { // get node with input data;
				// if node has not a child;
				if (!node.leftNode && !node.rigthNode) {
					return null;
				}
				// if node hasn't left child get right;
				if (!node.leftNode) {
					node = node.rigthNode;
					return node;
				}
				
				// if node hasn't right child get left;
				if (!node.rigthNode) {
					node = node.leftNode;
					return node;
				}

				//find min node in right branch from removed node;
				let minRightNode = node.rigthNode;

				while (minRightNode.leftNode) {
					minRightNode = minRightNode.leftNode;
				}

				node.data = minRightNode.data;

				node.rigthNode = removeNode(node.rigthNode, minRightNode.data);

				return node;
			}
		}
		
	}

	min() {
		let nextNode = this.head;
		if (!nextNode) return null;
		let min = nextNode.data;
		while (nextNode){
			if (min > nextNode.data) {
				min = nextNode.data;
			}
			nextNode = nextNode.leftNode;
		}
		return min;
	}

	max() {
		let nextNode = this.head;
		if (!nextNode) return null;
		let max = nextNode.data;
		while (nextNode){
			if (max < nextNode.data) {
				max = nextNode.data;
			}
			nextNode = nextNode.rigthNode;
		}
		return max;
	}
}

module.exports = {
	BinarySearchTree
};
