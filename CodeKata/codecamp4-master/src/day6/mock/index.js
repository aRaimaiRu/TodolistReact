class Node {
	constructor(value) {
		this.right = undefined;
		this.left = undefined;
		this.value = value;
	}
}

function insert(root, node) {
	if (root === undefined) {
		root = node;
	} else {
		if (root.value < node.value) {
			if (root.right === undefined) {
				root.right = node;
			} else {
				insert(root.right, node);
			}
		} else {
			if (root.left === undefined) {
				root.left = node;
			} else {
				insert(root.left, node);
			}
		}
	}
}

module.exports = { Node, insert };
