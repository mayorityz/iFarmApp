import React, { useState, useEffect } from "react";
import CartRows from "./essComponents/CartTables";
import { IoIosCart, IoMdTrash } from "react-icons/io";
import * as queryString from "query-string";
import commafy from "commafy";
import axios from "axios";
import * as utility from "../../utility.json";
import "./styles/checkout.css";

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
  const [notification, setNotif] = useState("");
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
    // we have to clean the localDB.
    setNotif("go!");
    axios
      .post(`${process.env.REACT_APP_URL}/products/checkout`, {
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

  const removeItem = (id) => {
    let i = items.filter((item) => {
      return item._id !== id;
    });
    storage.setItem("ifarms-cart", JSON.stringify([...i]));
    setItems([...i]);
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
              <li className="breadcrumb-item active">
                <IoIosCart /> My Cart{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-30px mb-30px">
        <div className="container">
          {!items.length ? (
            <>
              <h3 style={{ textAlign: "center" }}>
                Your Cart
                <IoIosCart /> Is Empty!!!
              </h3>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="../images/v.png" alt="img" />
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      {" "}
                      <IoIosCart /> My Shopping Cart ({items.length} items).
                    </div>
                    <div className="card-body">
                      <table className="table table-hover table-stripped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>
                              <IoMdTrash className="table-icon" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.length !== 0
                            ? items.map((item, i) => (
                                <CartRows
                                  item={item}
                                  key={i}
                                  uKey={i}
                                  changeTotal={(qty, id) => {
                                    changeTotal(qty, id);
                                  }}
                                  removeItem={(id) => {
                                    removeItem(id);
                                  }}
                                />
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <IoIosCart /> CheckOut.
                    </div>
                    <div className="card-body">
                      <h1 className="text-center">
                        Total : &#8358;{commafy(totalPrice)}.
                      </h1>
                      <hr />
                      {notification ? (
                        <div className="alert alert-primary text-center">
                          Loading Payment!
                        </div>
                      ) : null}
                      <button
                        className="btn btn-warning btn-lg btn-block"
                        onClick={checkout}
                      >
                        <IoIosCart /> CheckOut Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
