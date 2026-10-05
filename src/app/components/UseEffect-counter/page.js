"use client";
import React from 'react'
import { useState, useEffect } from 'react';

export default function SecondCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
         <div className="text-3xl m-2 p-2">
            <h2 className="flex item-center justify-center">Count: {count}</h2>
            <div className="grid grid-cols-3 m-4 gap-4" >
                <button className=" rounded p-2 bg-blue-500 hover:bg-red-400 " onClick={() => setCount(count + 1)}>+</button>
                <button className=" rounded p-2 bg-gray-500 hover:bg-gray-400" onClick={() => setCount(0)}>Reset</button>
                <button className=" rounded p-2 bg-blue-500 hover:bg-red-400 " onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}
