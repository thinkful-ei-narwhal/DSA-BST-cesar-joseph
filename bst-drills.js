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
  console.log(BST);
}

main();