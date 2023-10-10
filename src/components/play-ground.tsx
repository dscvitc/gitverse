"use client";

import useTree from "@/utils/useTree";
import React, { useState } from "react";
import { Tree } from "react-d3-tree";

type Output = string[];

const PlayGround: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<Output>([]);
  const [branches, setBranches] = useState<string[]>(["master"]);
  const [currentBranch, setCurrentBranch] = useState<string>("master");

  const [headPointer, setHeadPointer] = useState<number>(2);

  const { treeState, addChildToNode } = useTree();

  // // Example tree data
  // const treeData = {
  //   name: "Root",
  //   id: "root",
  //   children: [
  //     {
  //       name: "Node 1",
  //       id: 1,
  //       children: [
  //         { name: "Leaf 1", id: 3 },
  //         { name: "Leaf 2", id: 4 },
  //         { name: "Leaf 3", id: 5 },
  //       ],
  //     },
  //     {
  //       name: "Node 2",
  //       id: 2,
  //       children: [
  //         { name: "Leaf 4", id: 6 },
  //         { name: "Leaf 5", id: 7 },
  //       ],
  //     },
  //   ],
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutput([...output, input]);
    setInput("");
  };

  const handleCommit = () => {
    setOutput([...output, `Commit created on branch ${currentBranch}: ${input}`]);
    addChildToNode(headPointer, { id: 8, name: "New Node", children: [] });
    setInput("");
  };

  const handleCreateBranch = () => {
    setBranches([...branches, input]);
    setCurrentBranch(input);
    setInput("");
  };

  return (
    <div className="flex flex-row">
      <div className="bg-gray-900 text-white p-4 m-4 w-1/2">
        <div className="flex flex-col h-48 overflow-y-scroll">
          {output.map((command: string, index: number) => (
            <p key={index}>{command}</p>
          ))}
        </div>
        <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input type="text" value={input} onChange={handleInputChange} className="bg-transparent text-white flex-1" />
        </form>
        <button
          onClick={handleCommit}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Commit
        </button>
        <button
          onClick={handleCreateBranch}
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Branch
        </button>
      </div>
      <div id="treeWrapper" className="w-1/2 h-screen p-8">
        <Tree draggable={false} data={treeState} />
      </div>
    </div>
  );
};

export default PlayGround;
