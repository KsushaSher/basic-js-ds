const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }

  root() {
    return this.rootElem;
  }

  add(data) {
    this.rootElem = addNode(this.rootElem, data);

    function addNode(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.rootElem, data);
    function hasNode(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (data < node.data) return hasNode(node.left, data);
      else return hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootElem, data);
    function findNode(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) return findNode(node.left, data);
      else return findNode(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
