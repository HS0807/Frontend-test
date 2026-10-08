"use client";
import React, { useState } from "react";

export default function SearchFunctionality() {
    const [search, setSearch] = useState("");

    const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    const result = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(search.toLowerCase())
    );

    let searchedfruit = result.map((fruit) => (
        <p key={fruit}>
            {fruit}
        </p>
    ))

    return (
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search fruit"
                    className="m-3 p-2 border"
                />
                {searchedfruit}
            </div>
    );
}