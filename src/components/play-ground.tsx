"use client"

import React, { useState } from 'react';

type Output = string[];

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<Output>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOutput([...output, input]);
        setInput('');
    };

    return (
        <div className="bg-gray-900 text-white p-4 m-4 fixed left-0 top-0 bottom-0 w-2/5 ">
            <div className="flex flex-col h-48 overflow-y-scroll">
                {output.map((command: string, index: number) => (
                    <p key={index}>{command}</p>
                ))}
            </div>
            <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
                <span className="text-green-400 mr-2">$</span>
                <input type="text" value={input} onChange={handleInputChange} className="bg-transparent text-white flex-1" />
            </form>
        </div>
    );
};

export default Terminal;
