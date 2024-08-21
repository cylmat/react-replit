namespace Dfs {

/**
 * https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/
 * 
 * https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 *
 * inorder : left - root - right
 * preorder: root - left - right
 * postorder: left - right - root
 */

class Node {
  root: any; left: any = null; right: any = null
  constructor(val: any) { this.root = val }
}

var msg = ''

// NODE init
let root = new Node(1)
let NodeLeft = new Node(2)
NodeLeft.left = new Node(4)
NodeLeft.right = new Node(5)
root.left = NodeLeft
root.right = new Node(3)

// 4,2,5,1,3 
function print_InOrder(node: Node): string {
  if (node === null) {
    return ''
  }
  print_InOrder(node.left)
  msg = msg + (node.root + ', ')
  print_InOrder(node.right)
  return msg
}

console.log(print_InOrder(root))

} // ns