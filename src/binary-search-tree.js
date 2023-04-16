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

			if (data < node.data) {
				node.leftNode = removeNode(node.leftNode, data);
				return node;
			} else if (data > node.data) {
				node.rigthNode = removeNode(node.rigthNode, data);
				return node;
			} else {
				if (!node.leftNode && !node.rigthNode) {
					return null;
				}

				if (!node.leftNode) {
					node = node.rigthNode;
					return node;
				}

				if (!node.rigthNode) {
					node = node.leftNode;
					return node;
				}

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

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.toJSON();
tree.remove(14);
tree.toJSON();
tree.remove(8);
tree.toJSON();
tree.remove(9);
tree.toJSON();
console.log(`tree.has(14) = ${tree.has(14)}, false`);
console.log(`tree.has(8) = ${tree.has(8)}, false`);
console.log(`tree.has(9) = ${tree.has(9)}, false`);
console.log(`tree.has(2) = ${tree.has(2)}, true`);
console.log(`tree.has(6) = ${tree.has(6)}, true`);
console.log(`tree.has(128) = ${tree.has(128)}, true`);
console.log(`tree.has(31) = ${tree.has(31)}, true`);
console.log(`tree.has(54) = ${tree.has(54)}, true`);
console.log(`tree.has(1) = ${tree.has(1)}, true`);

// const tree = new BinarySearchTree();
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// console.log(tree.find(33));

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.toJSON();
// tree.remove(14);
// tree.toJSON()
// tree.remove(8);
// tree.toJSON()
// tree.remove(9);
// tree.toJSON()
// // console.log(tree.has(8));
// // console.log(tree.has(9));
// // console.log(tree.has(54));
// console.log(tree.has(14));
// console.log(tree.has(8));
// console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(8));
// console.log(tree.root());
