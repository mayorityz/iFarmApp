import React, { useState, useEffect } from "react";
import CartRows from "./essComponents/CartTables";
import * as queryString from "query-string";
import axios from "axios";
const getTotal = (x) => {
  if (!x) return [];
  let t = 0;
  for (let i = 0; i < x.length; i++) {
    t += x[i]["total"];
  }
  return t;
};
const Cart = ({ user }) => {
  let storage = window.localStorage;
  let url = window.location.search;
  let storageItems = storage.getItem("ifarms-cart");
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    getTotal(JSON.parse(storageItems))
  );
  useEffect(() => {
    const parsed = queryString.parse(url);
    if (parsed.status === "completed") storage.removeItem("ifarms-cart");
    if (storageItems !== null) {
      setItems(JSON.parse(storageItems));
    }
  }, [storageItems, storage, url]);

  const changeTotal = (qty, id) => {
    let i = items.filter((item) => {
      return item._id === id;
    });
    i[0].total = qty * i[0].price;
    i[0].qty = parseInt(qty);
    i[0].status = "pending";

    let index = items.findIndex((item) => {
      return item._id === id;
    });
    items[index] = i[0];
    storage.setItem("ifarms-cart", JSON.stringify(items));
    setTotalPrice(getTotal(items));
  };

  const checkout = () => {
    axios
      .post("http://localhost:8080/products/checkout", {
        userId: user.id,
        cart: items,
        price: totalPrice,
      })
      .then(({ data }) => {
        if (data.status === "failed") console.log(data.msg);
        else window.location = data.msg;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item active">My Cart </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-30px mb-30px">
        <div className="container">
          <h5>My Shopping Cart</h5>
          <p>{items.length}</p>
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover table-stripped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length !== 0
                    ? items.map((item, i) => (
                        <CartRows
                          item={item}
                          key={i}
                          changeTotal={(qty, id) => {
                            changeTotal(qty, id);
                          }}
                        />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <h1>Total : N{totalPrice}</h1>
              <button
                className="btn btn-dark btn-lg btn-block"
                onClick={checkout}
              >
                Pay Now!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
