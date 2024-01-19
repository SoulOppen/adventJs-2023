function transformTree(tree) {
  if (tree.length == 0 || tree[0] == null) {
    tree = null;
  } else if (tree.length == 1) {
    tree = {
      value: tree[0],
      left: null,
      right: null,
    };
  } else {
    let treeRight = [];
    let treeLeft = [];
    let value = tree.shift();
    let level = 1;
    while (tree.join("") != "") {
      for (let i = 0; i < Math.pow(2, level - 1); i++) {
        treeLeft.push(tree.shift());
      }
      for (let i = 0; i < Math.pow(2, level - 1); i++) {
        treeRight.push(tree.shift());
      }
      level++;
    }
    tree = {
      value: value,
      left: transformTree(treeLeft),
      right: transformTree(treeRight),
    };
  }
  return tree;
}

console.log(transformTree([3]));
console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
console.log(transformTree([1, 2, 3, 4, 5]));
/*  {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 8,
        left: null,
        right: null
      },
      right: {
        value: 12,
        left: null,
        right: null
      }
    },
    right: {
      value: 0,
      left: null,
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }*/
