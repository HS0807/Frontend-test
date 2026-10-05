"use client";
import React from 'react'
import { useState } from 'react';

export default function ShoppingCart() {

  const [quantity, setQuantity] = useState(1);
  const price = 500;

  return (
    <div className='m-5'>
      <h2>product: T-shirt</h2>
      <h2>price: {price}</h2>

      <button className='bg-blue-400 hover:bg-blue-200 p-2 ' onClick={() => setQuantity(quantity + 1)}> + </button>

      <p>Total quantity: {quantity}</p>

      <button className='bg-gray-500 hover:bg-gray-300 p-2' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}> - </button>
      <h3>total price: {price * quantity}</h3>

    </div>
  )
}
