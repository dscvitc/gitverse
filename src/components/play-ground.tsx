"use client"

import React, { useState } from 'react';
import {Tree} from 'react-d3-tree';


type Output = string[];

const PlayGround: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<Output>([]);
  const [branches, setBranches] = useState<string[]>(['master']);
  const [currentBranch, setCurrentBranch] = useState<string>('master');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutput([...output, input]);
    setInput('');
  };

  const handleCommit = () => {
    setOutput([...output, `Commit created on branch ${currentBranch}: ${input}`]);
    setInput('');
  };

  const handleCreateBranch = () => {
    setBranches([...branches, input]);
    setCurrentBranch(input);
    setInput('');
  };

  // Example tree data
  const treeData = {
    name: 'Root',
    children: [
      {
        name: 'Node 1',
        children: [
          { name: 'Leaf 1' },
          { name: 'Leaf 2' },
          { name: 'Leaf 3' },
        ],
      },
      {
        name: 'Node 2',
        children: [
          { name: 'Leaf 4' },
          { name: 'Leaf 5' },
        ],
      },
    ],
  };

  return (
    <div className="flex">
      <div className="bg-gray-900 text-white p-4 m-4 fixed left-0 top-0 bottom-0 w-1/2">
        <div className="flex flex-col h-48 overflow-y-scroll">
          {output.map((command: string, index: number) => (
            <p key={index}>{command}</p>
          ))}
        </div>
        <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-transparent text-white flex-1"
          />
        </form>
        <button onClick={handleCommit} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Commit
        </button>
        <button onClick={handleCreateBranch} className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Branch
        </button>
        
      </div> 
      <div className="ml-[50vw] w-1/2 h-screen">
        <Tree data={treeData} />
      </div>
    </div>
  );
};

export default PlayGround;
