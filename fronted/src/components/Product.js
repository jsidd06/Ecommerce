import React from 'react'
import Ratting from './Ratting'
import {Link} from "react-router-dom"

export default function Product(props) {
    const {product} = props
    return (
        <div key={product.id} className="card"> 
            <Link to={`/product/${product.id}`}>
              <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
            <Link to={`/product/${product.id}`}>
                <h2>{product.name}</h2>
              </Link>
              <Ratting ratting={product.ratting} numReviews={product.numReviews}></Ratting>
              <div className="price">${product.price}</div>
            </div>
          </div>
    )
}
