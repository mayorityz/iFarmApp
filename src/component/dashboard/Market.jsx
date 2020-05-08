import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import Modal from "react-modal";
import axios from "axios";
import commafy from "commafy";

const Market = () => {
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
  const url = "https://ifarms-app.herokuapp.com/myinvestments/allproducts";

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
                <a href="index-2.html">Home</a>
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
              <h4>There are no products at the moment</h4>
            ) : (
              products.map((product, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card">
                    <img
                      src={product.imgUrls[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title">
                        {product.title} - N{commafy(product.price)} /{" "}
                        {product.quantity}
                        {product.measurement}
                      </h6>
                      <p className="card-text"></p>
                      <button
                        onClick={() => {
                          openModal(product);
                        }}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
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
                  N{commafy(modalState.price)} / {modalState.quantity}
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
                    }}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};

export default Market;
