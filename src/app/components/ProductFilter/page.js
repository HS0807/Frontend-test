"use client";
import React from 'react'
import { useState } from 'react';

export default function ProductFilter() {

    const [showProducts, setShowProducts] = useState(false);

    const products = [
        { id: 1, name: "Shirt", price: 500 },
        { id: 2, name: "Shoes", price: 1200 },
        { id: 3, name: "Watch", price: 800 }
    ];

    const filteredProducts = products.filter(p => p.price > 500)
    return (
        <div >
            {products.map((product) => (
                <div key={product.id}>
                    <h3>name: {product.name} , Price: {product.price} </h3>
                </div>
            ))}
            <button className="bg-red-500 hover:bg-red-400 rounded m-5 p-3" onClick={() => setShowProducts(true)}>
                Show Products Above 500
            </button>

            {showProducts &&
                filteredProducts.map((product) => (
                    <div className='' key={product.id}>
                        <p>name: {product.name} , price: {product.price}</p>
                    </div>
                ))}
        </div>
    )
}
