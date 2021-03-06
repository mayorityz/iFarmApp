import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `${process.env.REACT_APP_URL}/products/edit`;
const EditProduct = ({ data }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const [isSending, setSending] = useState({
    btnmsg: "SUBMIT",
    disable: false,
    msg: "",
  });
  useEffect(() => {
    setId(data[0]._id);
    setTitle(data[0].title);
    setCategory(data[0].category);
    setPrice(data[0].price);
    setMeasurement(data[0].measurement);
    setQuantity(data[0].quantity);
    setDescription(data[0].description);
  }, [data]);

  const updateProduct = (e) => {
    e.preventDefault();

    setSending({
      btnmsg: "Please Wait!!!",
      disabled: true,
      msg: "Updating Product",
    });
    axios
      .post(url, {
        id,
        title,
        category,
        price,
        measurement,
        quantity,
        description,
      })
      .then(({ data }) => {
        if (data === "success") {
          setSending({
            btnmsg: "Done!",
            disabled: false,
            msg: "Updated Successfully",
          });
        } else {
          setSending({
            btnmsg: "Error",
            disabled: false,
            msg: "Database Error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3>Edit Product</h3>
      <form action="" onSubmit={updateProduct}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Product Title ..."
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </div>

        <div className="form-group">
          <select
            name=""
            className="form-control"
            defaultValue={category}
            onChange={({ target }) => {
              setCategory(target.value);
            }}
          >
            <option value="">-- Select Product Category --</option>
            <option value="cash crop">Cash Crops</option>
            <option value="vegetable">Vegetable</option>
            <option value="grain">Grain</option>
            <option value="tubber">Tubber</option>
            <option value="fruit">Fruit</option>
            <option value="palm-oil">Palm Oil</option>
            <option value="groundnut-oil">Groundnut Oil</option>
            <option value="meat-fish">Meat/Fish</option>
            <option value="eggs">Eggs</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Product Price"
            value={price}
            onChange={({ target }) => {
              setPrice(target.value);
            }}
            required
          />
        </div>

        <div className="form-group">
          <select
            name=""
            className="form-control"
            value={measurement}
            onChange={({ target }) => {
              setMeasurement(target.value);
            }}
            required
          >
            <option value="">-- Select Sales Measurement --</option>
            <option>Kilograms</option>
            <option>Bags</option>
            <option>Weight</option>
            <option>Grams</option>
            <option>Litres</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Quantity Per Measurement"
            value={quantity}
            onChange={({ target }) => {
              setQuantity(target.value);
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            name=""
            className="form-control"
            rows="5"
            value={description}
            onChange={({ target }) => {
              setDescription(target.value);
            }}
          ></textarea>
        </div>
        {!isSending.msg ? null : (
          <div className="alert alert-warning text-center">{isSending.msg}</div>
        )}
        <button
          className="btn btn-success btn-block btn-lg"
          disabled={isSending.disable}
        >
          {isSending.btnmsg}
        </button>
      </form>
    </>
  );
};

export default EditProduct;
