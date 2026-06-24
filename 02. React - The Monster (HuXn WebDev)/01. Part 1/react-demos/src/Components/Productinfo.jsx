import React from 'react'

const Productinfo = () => {

    const product = {
        name: 'Bike',
        price: 1200,
        availability: "In Stack"
    }

  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  )
}

export default Productinfo
