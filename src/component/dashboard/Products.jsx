import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Sugar } from "react-preloaders";
import * as Time from "moment";
import commafy from "commafy";

const Products = ({ user }) => {
  const [modalState, setModalState] = useState([]);
  const [loading, loaded] = useState(true);
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
  const url = `https://ifarms-app.herokuapp.com/fetchproducts/${user.id}`;
  const [data, setData] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setData([...data]);
        loaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
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

  const convert = (timeString) => Time(timeString).format("DD, MMMM YYYY");
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
              <li className="breadcrumb-item active">My Items </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h4>My Products.</h4>
                </div>
                <div className="card-body">
                  <img
                    src="../images/dashboard/product.png"
                    className="img-thumbnail img-fluid mx-auto d-block"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <hr />
                  {data ? (
                    <h6>You have {data.length} item(s) in the Market Place</h6>
                  ) : (
                    ""
                  )}
                  {!data ? (
                    <div>Fetching Data ...</div>
                  ) : (
                    <table className="table table-hover table-striped table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <td>#</td>
                          <td>Title</td>
                          <td>Price/Rate</td>
                          <td>Category</td>
                          <td>Date Uploaded</td>
                          <td>Status</td>
                          <td>Details</td>
                          <td>Action</td>
                        </tr>
                      </thead>

                      <tbody>
                        {data.map((d, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{d.title}</td>
                            <td>
                              &#8358;{commafy(d.price)}/{d.quantity}{" "}
                              {d.measurement}
                            </td>
                            <td>Cash Crops</td>
                            <td>{convert(d.uploaded)}</td>
                            <td>
                              <button className="btn btn-sm btn-block btn-success">
                                Active
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  openModal(d);
                                }}
                                className="btn btn-sm btn-block btn-primary"
                              >
                                View
                              </button>
                            </td>
                            <td>
                              <Link
                                to=""
                                className="btn btn-xs btn-block btn-warning"
                              >
                                Edit
                              </Link>
                              <Link
                                to=""
                                className="btn btn-xs btn-block btn-danger"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          {!loading ? (
            ""
          ) : (
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Product Details
              </h2>
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
                        N{modalState.price} / {modalState.quantity}
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
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
