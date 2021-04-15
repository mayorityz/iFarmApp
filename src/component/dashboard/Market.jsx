import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
// import { useAlert } from "react-alert";
// import { MdShoppingCart, MdInfo } from "react-icons/md";
import Modal from "react-modal";
import axios from "axios";
import commafy from "commafy";
import * as utility from "../../utility.json";
import Product from "./components/Product";

const Market = ({ user }) => {
  // const alert = useAlert();
  const [modalState, setModalState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const customStyles = {
    content: {
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const url = `${process.env.REACT_APP_URL}/allproducts`;

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  // const addToCart = (id) => {
  //   let localStorage = window.localStorage;
  //   let itemsArr = [];
  //   let item = products.filter((product) => {
  //     return product._id === id;
  //   });

  //   const cartItem = {
  //     _id: id,
  //     title: item[0].title,
  //     price: item[0].price,
  //     qty: 1,
  //     total: item[0].price,
  //   };

  //   itemsArr.push(cartItem);

  //   if (localStorage.getItem("ifarms-cart") === null) {
  //     localStorage.setItem("ifarms-cart", JSON.stringify(itemsArr));
  //   } else {
  //     const existingRecord = JSON.parse(localStorage.getItem("ifarms-cart"));

  //     let result = existingRecord.find((p_id) => p_id._id === cartItem._id);

  //     if (result === undefined) {
  //       existingRecord.push(cartItem);
  //       localStorage.setItem("ifarms-cart", JSON.stringify(existingRecord));
  //       alert.show("Done");
  //     } else {
  //       alert.show("Item Exists in Your Cart");
  //     }
  //   }
  // };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(i) {
    setIsOpen(true);
    setModalState(i);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Sugar customLoading={loading} />
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="0#">Home</a>
              </li>
              <li className="breadcrumb-item active">MarketPlace </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px">
        <div className="container">
          <div className="row">
            {products.length === 0 ? (
              <div>
                <h4 style={{ textAlign: "center" }}>
                  Our MarketPlace is empty today! Be the first to sell on
                  i-farms.com
                </h4>
                <hr />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="../images/v.png" alt="img" />
                </div>
              </div>
            ) : (
              products.map((product, i) => (
                <Product
                  key={i}
                  product={product}
                  products={products}
                  openModal={openModal}
                />
                // <div className="col-md-4" key={i}>
                //   <div className="card">
                //     <img
                //       src={product.imgUrls[0]}
                //       className="card-img-top"
                //       alt="..."
                //     />
                //     <div className="card-body">
                //       <h6 className="card-title">
                //         {product.title} - &#8358;{commafy(product.price)} /{" "}
                //         {product.quantity}
                //         {product.measurement}
                //       </h6>
                //       <p className="card-text"></p>
                //       <button
                //         onClick={() => {
                //           openModal(product);
                //         }}
                //         className="btn btn-primary"
                //       >
                //         <MdInfo />
                //         View Details
                //       </button>{" "}
                //       <button
                //         className="btn btn-warning"
                //         onClick={() => {
                //           addToCart(product._id);
                //         }}
                //       >
                //         <MdShoppingCart />
                //         Add To Cart
                //       </button>
                //     </div>
                //   </div>
                // </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Product Details</h2>
        <hr />
        <div className="container">
          {modalState.length === 0 ? (
            ""
          ) : (
            <div className="row">
              <div className="col-md-6">
                <h6>Product Title</h6>
                <p>{modalState.title}</p>
                <hr />
                <h6>Price/Rate</h6>
                <p>
                  &#8358;{commafy(modalState.price)} / {modalState.quantity}
                  {modalState.measurement}
                </p>
                <hr />
                <h6>Product Description.</h6>
                <p>{modalState.description}</p>
                <hr />
                <h6>Category.</h6>
                <p>{modalState.category}</p>
              </div>
              <div className="col-md-6">
                <img src={modalState.imgUrls[0]} alt="" />
                {modalState.imgUrls.map((m, i) => (
                  <img
                    key={i}
                    src={m}
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "10px",
                      cursor: "pointer",
                      border: "2px solid #a5b1a7",
                    }}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <button onClick={closeModal} className="btn btn-danger">
          close
        </button>
      </Modal>
    </>
  );
};

export default Market;
