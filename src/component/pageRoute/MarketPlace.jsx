import React, { useState, useEffect } from "react";
import { MdShoppingCart, MdInfo } from "react-icons/md";
import axios from "axios";

const MarketPlace = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const url = `${process.env.REACT_APP_URL}/allproducts`;
  const [cartMonitor, setCartMonitor] = useState([]);

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

  let localStorage = window.localStorage;

  useEffect(() => {
    if (localStorage.getItem("ifarms-cart") !== null) {
      setCartMonitor(JSON.parse(localStorage.getItem("ifarms-cart")));
    }
  }, [localStorage]);

  const addToCart = (id) => {
    let localStorage = window.localStorage;
    let itemsArr = [];
    let item = products.filter((product) => product._id === id);

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

        setCartMonitor(existingRecord);
        // just remve it from view.
      } else {
        console.log(existingRecord);
      }
    }
  };

  return (
    <>
      <section className="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
        <div className="container">
          <div className="row welcome-text sec-padding flex-center">
            <div className="col-md-12 mb-50px">
              <div className="row">
                {loading ? (
                  <div className="alert alert-warning text-center">
                    Fetching Products, please wait!!!
                  </div>
                ) : products.length === 0 ? (
                  <h4>No Products Found!</h4>
                ) : (
                  products.map((project) => (
                    <div className="col-md-4" key={project._id}>
                      <div className="product_container">
                        <div className="price_tag">N{project.price}</div>
                        <div className="product_image">
                          <img src={project.imgUrls[0]} />
                        </div>
                        <h3 className="text-center text-upper">
                          {project.title}
                        </h3>
                        {/* if not logged in  redirect to login else add to cart. */}
                        <button
                          className="custom_button"
                          onClick={() => addToCart(project._id)}
                        >
                          {/* Add To Cart! */}
                          {cartMonitor.find((item) => item._id === project._id)
                            ? "Already In Cart!"
                            : "Add To Cart!"}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPlace;
