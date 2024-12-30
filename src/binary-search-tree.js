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

  remove(data) {
    this.rootElem = removeNode(this.rootElem, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRightChild = node.right;

        while (minRightChild.left) {
          minRightChild = minRightChild.left;
        }
        node.data = minRightChild.data;
        node.right = removeNode(node.right, minRightChild.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootElem) return null;

    let node = this.rootElem;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootElem) return null;

    let node = this.rootElem;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
