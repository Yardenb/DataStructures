class BinarySearchNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new BinarySearchNode(value);
        !this.root ? this.root = newNode : this.addNode(this.root, newNode);
        return this;
    }
    addNode(node, newNode) {
        if (node.value >= newNode.value) {
            //If the new node has lesser value than current node - it should go left.
            //If we have a spot - insert, otherwise - keep going down left
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            }
        } else if (node.value < newNode.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }
}

const binarySearchTree = new BinarySearchTree();