import React, { useState } from "react";

interface Tree {
  id: number;
  //   parentId: number;
  name: string;
  children: Tree[];
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

const useTree = (initialState: Tree = exampleTree) => {
  const [treeState, setTreeState] = useState(initialState);
};
