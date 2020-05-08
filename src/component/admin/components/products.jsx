import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiXOctagon } from "react-icons/fi";
import { Sugar } from "react-preloaders";
import axios from "axios";
import * as moment from "moment";
import commafy from "commafy";
const AdminProducts = () => {
  const url = "https://ifarms-app.herokuapp.com/allproducts";
  const [loading, isLoaded] = useState(true);
  const [products, setProducts] = useState([]);
  let store = [...products];

  const removeItem = (id) => {
    let y = products.filter((x) => {
      return x._id !== id;
    });
    setProducts(y);
    // run a script to remove it from a db...
  };

  const filterSearch = ({ currentTarget }) => {
    const value = currentTarget.value;
    let y = products.filter((product) => {
      return product.title.includes(value);
    });
  };

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setProducts(data);
        isLoaded(false);
      })
      .catch((er) => console.log(er));
  }, [url]);
  return (
    <div className="ui-section">
      <Sugar customLoading={loading} />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      <div className="alert alert-warning text-center">
        There are {products.length} active products in-store.
      </div>
      <div className="container">
        <form action="">
          <label htmlFor="">Product Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search For A Product ..."
            onChange={filterSearch}
          />
        </form>
        <hr />
        <div className="row">
          {products.map((product, i) => (
            <div className="col-md-4" key={product._id}>
              <div className="admin_products">
                <FiXOctagon
                  className="delete_icon_prod"
                  onClick={() => {
                    removeItem(product._id);
                  }}
                />
                <img src={product.imgUrls[0]} alt="" />
                <h6>
                  <Link to={product._id}>
                    {product.title} - Uploaded{" "}
                    {moment(product.uploaded, "YYYYMMDD").fromNow()}
                  </Link>
                </h6>
                <p style={{ fontWeight: "bold" }}>
                  N{commafy(product.price)} / {product.quantity}{" "}
                  {product.measurement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
