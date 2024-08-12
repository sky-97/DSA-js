// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

/**
 * Performs breadth-first search (BFS) traversal of a binary tree.
 * @param {Node} root - The root node of the binary tree.
 * @returns {number[]} - An array of keys in the order they are visited.
 */
const breadthFirstSearch = (root) => {
  if (root === null) {
    return []; // Return an empty array if the root is null
  }

  const values = []; // Array to store the traversal result
  const queue = [root]; // Queue to manage nodes for traversal

  // Continue while there are nodes to process
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the first node

    values.push(node.key); // Visit the current node

    // Enqueue left child if it exists
    if (node.left !== null) {
      queue.push(node.left);
    }

    // Enqueue right child if it exists
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values; // Return the result array
};

// Example Tree:
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(breadthFirstSearch(root)); // Output: [1, 2, 3, 4, 5, 6]
