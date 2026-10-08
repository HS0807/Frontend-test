import React from 'react'

export default function ProductList() {

  const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watchs", price: 800 }
  ];

  let productsList = products.map((p) => (
    <div key={p.id}>
      <h3>name: {p.name} , Price: {p.price} </h3>
    </div>
  ))

  return (
    <div className='m-5'>
      {productsList}
    </div>

  )
}
