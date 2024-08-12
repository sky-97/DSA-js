// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

/**
 * Performs depth-first traversal of a binary tree using an iterative approach.
 * @param {Node} root - The root node of the binary tree.
 * @returns {number[]} - An array of keys in the order they are visited.
 */
const depthFirstTraversal = (root) => {
    const values = []; // Array to store the traversal result
    const stack = [root]; // Stack to manage nodes for traversal
  
    // Continue while there are nodes to process
    while (stack.length > 0) {
      const node = stack.pop(); // Get the last node from the stack
      
      if (node !== null) {
        values.push(node.key); // Visit the current node
        
        // Push the right child first so the left child is processed first
        if (node.right !== null) {
          stack.push(node.right);
        }
        if (node.left !== null) {
          stack.push(node.left);
        }
      }
    }
  
    return values; // Return the result array
  };
  

/**
 * Performs depth-first traversal of a binary tree using recursion.
 * @param {Node} root - The root node of the binary tree.
 * @returns {number[]} - An array of keys in the order they are visited.
 */
const recursiveDepthFirstTraversal = (root) => {
    // Base case: if the node is null, return an empty array
    if (root === null) {
      return [];
    }
  
    // Recursively traverse the left subtree
    const leftValues = recursiveDepthFirstTraversal(root.left);
    // Recursively traverse the right subtree
    const rightValues = recursiveDepthFirstTraversal(root.right);
  
    // Combine the current node’s key with the results from left and right subtrees
    return [root.key, ...leftValues, ...rightValues];
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

console.log(depthFirstTraversal(root)); // Output: [1, 2, 4, 5, 3, 6]
console.log(recursiveDepthFirstTraversal(root)); // Output: [1, 2, 4, 5, 3, 6]