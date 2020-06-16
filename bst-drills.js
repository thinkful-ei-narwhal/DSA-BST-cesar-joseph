const BinarySearchTree = require('./BinarySearchTree');

//1. Draw a BST
//A:           3
//            /  \
//          1      4
//           \      \
//            2       6
//                   /  \
//                  5    9
//                      /
//                     7

//B.           E
//           /   \
//          A      S
//         /      /  \
//        E      Q    Y
//              / \   /
//             I   S  U 
//             \      /
//              O    T
//              /
//             N

//2. Remove the root
//            
//                 4
//                / \
//              1    6
//              \   / \
//               2  5  9
//                     /
//                    7

//B.           E
//           /    \
//          A       S
//                /   \
//               Q     Y
//              / \    /
//             I   S  U 
//              \    /
//              O   T
//             /
//            N


//3. Create a BST class

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 'A');
  BST.insert(1, 'B');
  BST.insert(4, 'C');
  BST.insert(6, 'D');
  BST.insert(9, 'E');
  BST.insert(2, 'F');
  BST.insert(5, 'G');
  BST.insert(7, 'H');
  BST.remove(3);
  //   console.log(BST);

  const BST2 = new BinarySearchTree();
  BST2.insert('E', '1');
  BST2.insert('A', '2');
  BST2.insert('S', '3');
  BST2.insert('Y', '4');
  BST2.insert('Q', '5');
  BST2.insert('U', '6');
  BST2.insert('E', '7');
  BST2.insert('S', '8');
  BST2.insert('T', '9');
  BST2.insert('I', '10');
  BST2.insert('O', '11');
  BST2.insert('N', '12');
  BST2.remove('E');
  //   console.log(BST2);

  //4. What does this program do?
  // adds all values of the tree
  // Linear time O(n)

  //5. Height of a BST
  console.log(treeHeight(BST));
  console.log(treeHeight(BST2));

  //6. Is it a BST?
  console.log(isItBst(BST));
}

main();

function treeHeight(tree){
  if(!tree){
    return 0;
  }
  let left= treeHeight(tree.left)+1;
  let right= treeHeight(tree.right)+1;
  return (left>right)?left : right;
}

function isItBst(tree){
  if(!tree){
    return false;
  }
  //(tree.left&&tree.right)
  //left < right 
  // return 

}

