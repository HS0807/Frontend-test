"use client";
import React from 'react'
import { useState } from 'react';

export default function DisableButton() {

    const [text, setText] = useState("");

    return (
        <div >
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='border-gray m-2'
            />
            <button className="bg-red-500 rounded p-2">submit</button>
        </div>
    )
}
