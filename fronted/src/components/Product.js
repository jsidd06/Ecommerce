import React from 'react'
import Ratting from './Ratting'

export default function Product(props) {
    const {product} = props
    return (
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
              <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
            <a href={`/product/${product.id}`}>
                <h2>{product.name}</h2>
              </a>
              <Ratting ratting={product.ratting} numReviews={product.numReviews}></Ratting>
              <div className="price">${product.price}</div>
            </div>
          </div>
    )
}
