import React, { useState } from "react";
import { useAlert } from "react-alert";
import { IoIosImages, IoIosCreate, IoMdSave } from "react-icons/io";
import commafy from "commafy";
import axios from "axios";
import * as utility from "../../utility.json";

const NewProduct = ({ user }) => {
  const alert = useAlert();

  const url = `${process.env.REACT_APP_URL}/newproduct`;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");
  const [files, setFile] = useState("");
  const [btn, setBtn] = useState(false);

  const submitProduct = (e) => {
    alert.show("Processing! Please Wait!!");
    setBtn(true);
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("category", category);
    form.append("price", price);
    form.append("measurement", measurement);
    form.append("quantity", quantity);
    form.append("desc", desc);
    form.append("userid", user.id);
    for (var x = 0; x < files.length; x++) {
      form.append("file", files[x]);
    }
    axios
      .post(url, form)
      .then((res) => {
        const { data } = res;
        clearForm();
        alert.show(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearForm = () => {
    setTitle("");
    setCategory("");
    setPrice("");
    setMeasurement("");
    setQuantity("");
    setDesc("");
    setFile("");
    setBtn(false);
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
                <IoIosCreate /> Upload New Product{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="../images/dashboard/new_product.png" alt="" />
              <hr />
              <h6>Hint :</h6>
              <ul>
                <li>Your product appears in our marketplace for all to see.</li>
                <li>Be very clear in your description on your product.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h4 className="header4">
                    <IoIosCreate /> Upload A New Product
                  </h4>
                </div>
                <div className="card-body">
                  <p>Your product will be added to our marketplace.</p>
                  <form onSubmit={submitProduct} encType="multipart/form-data">
                    <div className="form-group">
                      <label>Product Title :</label>
                      <input
                        type="input"
                        placeholder="Title"
                        className="form-control"
                        value={title}
                        required
                        onChange={({ target }) => setTitle(target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Category:</label>
                      <select
                        name=""
                        id=""
                        className="form-control custom-select"
                        required
                        value={category}
                        onChange={({ target }) => setCategory(target.value)}
                      >
                        <option value="">-- Select Category --</option>
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
                      <label>Price:</label>
                      <input
                        type="number"
                        placeholder="Product Price"
                        className="form-control"
                        required
                        value={price}
                        onChange={({ target }) => setPrice(target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Measurement:</label>
                      <select
                        name=""
                        id=""
                        className="custom-select"
                        required
                        onChange={({ target }) => setMeasurement(target.value)}
                        value={measurement}
                      >
                        <option value="">-- Select Measurement --</option>
                        <option value="Kilograms">Kilograms</option>
                        <option value="Bag">Bags</option>
                        <option value="Weight">Weight</option>
                        <option value="Gram">Gram</option>
                        <option value="Litre">Litre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Quantity*: e.g. {commafy(quantity)}/{measurement} at
                        &#8358;
                        {commafy(price)}
                      </label>
                      <input
                        type="number"
                        placeholder="Quantity Per Price ..."
                        className="form-control"
                        value={quantity}
                        onChange={({ target }) => setQuantity(target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description:</label>
                      <textarea
                        className="form-control"
                        placeholder="Give a detailed description of your product..."
                        rows="5"
                        onChange={({ target }) => setDesc(target.value)}
                        value={desc}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>
                        Select Images <IoIosImages />:
                      </label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          name=""
                          multiple
                          onChange={({ target }) => {
                            setFile(target.files);
                          }}
                        />
                        <label class="custom-file-label" forHtml="customFile">
                          <IoIosImages /> Choose Product Images Here.
                        </label>
                      </div>
                    </div>
                    {/* {!msg ? (
                      ""
                    ) : (
                      <div className="alert alert-success">{msg}</div>
                    )} */}
                    <div className="form-group">
                      <button className="btn btn-primary" disabled={btn}>
                        <IoMdSave /> Upload Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
