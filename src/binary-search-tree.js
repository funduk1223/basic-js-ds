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
		let nextNode = this.rootTree;
		while (nextNode){
			if (data > nextNode.data) {
				nextNode = nextNode.rigthNode;
			}
			else if (data < nextNode.data) {
				nextNode = nextNode.leftNode;
			}
			if (data === nextNode.data) return nextNode; // !
		}
		return null;
	}

	remove(data) {
		let nextNode = this.rootTree;
		let prevNode = null;
		let removedNode = null;
		while (nextNode){
			if (data > nextNode.data) {
				prevNode = nextNode;
				nextNode = nextNode.rigthNode;
			}
			else if (data < nextNode.data) {
				prevNode = nextNode;
				nextNode = nextNode.leftNode;
			}
			else if (data === nextNode.data)  {
				removedNode = nextNode;
				break;
			}
		}
		console.log(`removed Node = ${JSON.stringify(removedNode)} `);

		if (!removedNode)
			return;

		// if node has not a child;	
		if (!removedNode.leftNode && !removedNode.rigthNode) { 

			if (prevNode.leftNode === removedNode) {
				prevNode.leftNode = null;
				removedNode = null;
			}
			if (prevNode.rigthNode === removedNode) {
				prevNode.rigthNode = null;
				removedNode = null;
			}
			return ;
		}

		// if node has both a child;	
		else if (removedNode.leftNode && removedNode.rigthNode) {

			let nextNode = removedNode.rigthNode
			let min = nextNode.data;
			//console.log(`min = ${JSON.stringify(nextNode.data)}`);
			let minNode = nextNode;
			let minPrevNode = nextNode;
			while (nextNode){
				if (min > nextNode.data) {
					min = nextNode.data;
					minNode = nextNode;
				}
				nextNode = nextNode.leftNode;
			}
			
			console.log(`minNode = ${JSON.stringify(minNode)}`);
			
			//set links on new places {insted removed,node};
			minNode.rigthNode = removedNode.rigthNode;
			minNode.leftNode = removedNode.leftNode;
			minPrevNode.leftNode = null; //! minPrevNode
			

			if (!prevNode) {
				this.rootTree = minNode;
				this.head = minNode;
				return this;
			}
			else if (prevNode.rigthNode === removedNode) {
				//console.log(`removedNode is a rigthNode in a prevNode`);
				removedNode = null; 
				prevNode.rigthNode = minNode
			}
			else if (prevNode.leftNode === removedNode) {
				//console.log(`removedNode is a leftNode in a prevNode`);
				removedNode = null; 
				prevNode.leftNode = minNode
			} 
			//console.log(`prevNode = ${JSON.stringify(prevNode)}`);
			return ;
		}

		// if node has just one a child;	
		else {

			if (prevNode.leftNode === removedNode) {
				if (removedNode.leftNode) {
					prevNode.leftNode = removedNode.leftNode;
				}
			
				else if (removedNode.rigthNode) {
					prevNode.leftNode = removedNode.rigthNode;
				}
				removedNode = null;
			}
			if (prevNode.rigthNode === removedNode) {
				if (removedNode.leftNode) {
					prevNode.rigthNode = removedNode.leftNode;
				}
			
				else if (removedNode.rigthNode) {
					prevNode.rigthNode = removedNode.rigthNode;
				}
				removedNode = null;
			}
			return ;
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
console.log(`output: \n ${tree.toJSON()}`)

console.log(`remove(14):\n  ${tree.remove(14)} \n ${tree.toJSON()}`)
//tree.remove(8);
console.log(`remove(8): \n ${tree.remove(8)} \n ${tree.toJSON()}`)
//tree.remove(9);
console.log(`remove(9):\n  ${tree.remove(9)} \n ${tree.toJSON()}`)
console.log(tree.has(14));
console.log(tree.has(8));
console.log(tree.has(9));
console.log(tree.has(54));
// console.log(tree.has(8));
// console.log(tree.root());
