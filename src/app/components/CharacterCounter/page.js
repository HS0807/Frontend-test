"use client";
import React, { useState } from 'react'

export default function CharacterCounter() {
    const [text, setText] = useState("");

    return (
        <div>
            <textarea
                value={text}
                placeholder='write here....'
                onChange={(e) => setText(e.target.value)}
                className='border m-4'
            />

            <p className='m-4'>Characters: {text.length}</p>
        </div>
    )
}
