import React from 'react'

export default function ProductList() {

    const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watch", price: 800 }
  ];

  return (    
    <div className='m-5'>
       <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>name: {product.name} , Price: {product.price} </h3>
        </div>
      ))}
    </div>
    </div>
  )
}
