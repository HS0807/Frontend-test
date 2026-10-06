"use client";

import React from "react";

export default function Parent() {
    const username = "rahul";

    function Child({ username }) {
        return <h2>Welcome, {username}</h2>;
    }

    return (
        <div className="m-2 font-bold">
            <Child username={username} />
        </div>
    );
}