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

    let productList = products.map((product) => (
        <div key={product.id}>
            <h3>name: {product.name} , Price: {product.price} </h3>
        </div>
    ))

    const filteredProducts = products.filter(p => p.price > 500)
        .map((product) => (
            <div key={product.id}>
                <p>name: {product.name} , price: {product.price}</p>
            </div>
        ))
    return (
        <div >
            {productList}
            <button className="bg-red-500 hover:bg-red-400 rounded m-5 p-3" onClick={() => setShowProducts(!showProducts)}>
                Show Products Above 500
            </button>
            {showProducts && filteredProducts}
        </div>
    )
}
