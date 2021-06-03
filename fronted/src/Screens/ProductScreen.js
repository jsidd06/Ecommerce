import React from "react";
import Ratting from "../components/Ratting";
import data from "../data";
import {Link} from "react-router-dom"

export default function ProductScreen(props) {
  const product = data.products.find((x) => x.id === props.match.params.id);
  if (!product) {
    return <div>opps product not found</div>;
  }
  return (
    <div>
      <Link to="/"><i class="fas fa-arrow-circle-left">Back to Home</i></Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Ratting
              ratting={product.ratting}
              numReviews={product.numReviews}
            ></Ratting>
          </li>
          <li>Price : ${product.price}</li>
          <li>
            Description : <p>{product.description}</p>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div> Price</div>
                <div className="price">$ {product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div> Status</div>
                <div>
                  {product.countInstock > 0 ? (
                    <span className="sucess">In Stock</span>
                  ) : (
                    <span className="danger">unavailable</span>
                  )}
                </div>
              </div>
            </li>
            <li>
                <button className="primary block">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
