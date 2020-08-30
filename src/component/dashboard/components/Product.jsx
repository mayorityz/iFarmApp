import React, { useState } from "react";
import { MdShoppingCart, MdInfo } from "react-icons/md";
// import Modal from "react-modal";
import commafy from "commafy";

const Product = ({ product, products, openModal }) => {
  const [notification, setNot] = useState("");
  const addToCart = (id) => {
    setNot("Adding Item To Cart!");
    let localStorage = window.localStorage;
    let itemsArr = [];
    let item = products.filter((product) => {
      return product._id === id;
    });
    const cartItem = {
      _id: id,
      title: item[0].title,
      price: item[0].price,
      qty: 1,
      total: item[0].price,
    };
    itemsArr.push(cartItem);
    if (localStorage.getItem("ifarms-cart") === null) {
      localStorage.setItem("ifarms-cart", JSON.stringify(itemsArr));
    } else {
      const existingRecord = JSON.parse(localStorage.getItem("ifarms-cart"));
      let result = existingRecord.find((p_id) => p_id._id === cartItem._id);
      if (result === undefined) {
        existingRecord.push(cartItem);
        localStorage.setItem("ifarms-cart", JSON.stringify(existingRecord));
        setNot("Item Added To Cart Successfully!");
      } else {
        setNot("Item Exists in Your Cart");
      }
    }
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.imgUrls[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">
            {product.title} - &#8358;{commafy(product.price)} /{" "}
            {product.quantity}
            {product.measurement}
          </h6>
          <p className="card-text"></p>

          <div>
            {notification ? (
              <div className="alert alert-primary text-center">
                {notification}
              </div>
            ) : null}
          </div>
          <br />
          <div>
            <button
              onClick={() => {
                openModal(product);
              }}
              className="btn btn-primary"
            >
              <MdInfo />
              View Details
            </button>{" "}
            <button
              className="btn btn-warning"
              onClick={() => {
                addToCart(product._id);
              }}
            >
              <MdShoppingCart />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
