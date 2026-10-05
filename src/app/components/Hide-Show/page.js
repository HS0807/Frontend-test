"use client";
import { useState } from "react";
import React from 'react'

export default function HideShow() {

    const [show, setShow] = useState(false);
    return (
        <div className="flex item-center justify-center m-10">
            <button className="rounded text-2xl bg-red-500 hover:bg-red-300 p-2" onClick={() => setShow(show)}>Show Details</button>
            {show && <p>Welcome to React</p>}
        </div>
    ) 
}
 