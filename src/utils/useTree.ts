import { produce } from "immer";
import React, { useState } from "react";

interface TreeNode {
  id: number;
  //   parentId: number;
  name: string;
  children: TreeNode[];
}

const exampleTree = {
  name: "Root",
  id: 0,
  children: [
    {
      name: "Node 1",
      id: 1,
      children: [
        { name: "Leaf 1", id: 3, children: [] },
        { name: "Leaf 2", id: 4, children: [] },
        { name: "Leaf 3", id: 5, children: [] },
      ],
    },
    {
      name: "Node 2",
      id: 2,
      children: [
        { name: "Leaf 4", id: 6, children: [] },
        { name: "Leaf 5", id: 7, children: [] },
      ],
    },
  ],
};

const useTree = (initialState: TreeNode = exampleTree) => {
  const [treeState, setTreeState] = useState(initialState);

  const findNodeById = (id: number, node: TreeNode): TreeNode | null => {
    if (node.id === id) return node;
    if (!node.children || node.children.length === 0) return null;
    let found = null;
    for (let n of node.children) {
      if (found) break;
      found = findNodeById(id, n);
    }
    return found;
  };

  const addChildToNode = (id: number, newNode: TreeNode) => {
    setTreeState(
      produce((draft: any) => {
        const currNode = findNodeById(id, draft);
        if (currNode) {
          currNode.children.push(newNode);
        } else {
          console.log("Error");
        }
      })
    );
  };

  return { treeState, findNodeById, addChildToNode };
};

export default useTree;
