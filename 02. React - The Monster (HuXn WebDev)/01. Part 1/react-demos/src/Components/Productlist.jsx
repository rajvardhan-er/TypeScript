import React from 'react'

const Productlist = () => {

    const products = [
        {id: 1, name: "Phone", price: 125},
        {id: 2, name: "Candy", price: 226},
        {id: 3, name: "Chocolate", price: 217}
    ]
  return (
    <div>
      {products.map (p =>(
        <div key = {p.id}>
            <h1>Name: ${p.name}</h1>
            <h1>Price: ${p.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default Productlist
