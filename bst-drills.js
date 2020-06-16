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
  console.log(BST);

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
  console.log(BST2);

  //4. What does this program do?
  // adds all values of the tree
  // Linear time O(n)

  //5. Height of a BST
  console.log(treeHeight(BST));
  console.log(treeHeight(BST2));

  //6. Is it a BST?
  console.log(isItBst(BST));
  console.log(isItBst(BST2));

  //7. 3rd largest node
  console.log(thirdLargest(BST));
  console.log(thirdLargest(BST2));
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
  if (!tree) return false;

  if(tree.right && tree.left){
    if (tree.left.key > tree.right.key) return false;
  }
  
  if(tree.left && tree.key > tree.left.key){
    isItBst(tree.left); 
  }
  else if(tree.left && tree.key < tree.left.key)return false;
  
  if(tree.right && tree.key < tree.right.key){
    isItBst(tree.right); 
  }
  else if(tree.right &&tree.key > tree.right.key)return false;
  return true;
}

function max(tree){
  if (!tree.right) {
    return tree;
  }
  return max(tree.right);
}

function thirdLargest(tree){
  tree.remove(max(tree).key);
  tree.remove(max(tree).key);
  return max(tree).key;
}