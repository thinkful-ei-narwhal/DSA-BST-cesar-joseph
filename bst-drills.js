const BinarySearchTree = require('./BinarySearchTree');

//1. Draw a BST
//A:           3
//            /  \
//          1      4
//           \      \
//            2       6
//                   /  \
//                  5    9
//                       /
//                      7

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
//         /      /   \
//        E      Q     Y
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
  // console.log(BST);

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
  console.log(BST2);
}

main();