const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rot = null;
  }
  root() {
    return this.rot;
  }

  add(data) {
    const node = this.rot;
    if (node === null) {
      this.rot = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }
  find(data) {
    let current = this.rot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has only right child
        if (node.left == null) {
          return node.right;
        }
        // node has only left child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.rot, data);
  }

  min() {
    let min = this.rot;
    while (min.left !== null) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.rot;
    while (max.right !== null) {
      max = max.right;
    }
    return max.data;
  }
}
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
module.exports = {
  BinarySearchTree,
};
