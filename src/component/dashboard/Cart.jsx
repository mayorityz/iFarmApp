import React, { useState, useEffect } from "react";
import CartRows from "./essComponents/CartTables";
const getTotal = (x) => {
  let t = 0;
  for (let i = 0; i < x.length; i++) {
    t += x[i]["total"];
  }
  return t;
};
const Cart = ({ user }) => {
  let storage = window.localStorage;
  let storageItems = storage.getItem("ifarms-cart");
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    getTotal(JSON.parse(storageItems))
  );
  useEffect(() => {
    if (storageItems !== null) {
      setItems(JSON.parse(storageItems));
    }
  }, []);

  const changeTotal = (qty, id) => {
    let i = items.filter((item) => {
      return item._id === id;
    });
    i[0].total = qty * i[0].price;
    i[0].qty = parseInt(qty);

    let index = items.findIndex((item) => {
      return item._id === id;
    });
    items[index] = i[0];
    setTotalPrice(getTotal(items));
  };

  // getTotal(items);

  return (
    <>
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
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
              <table className="table">
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
              <button className="btn btn-dark btn-lg btn-block">
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
