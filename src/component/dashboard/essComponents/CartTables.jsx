import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import commafy from "commafy";
import "../styles/checkout.css";

const CartRows = ({ item, changeTotal, uKey, removeItem }) => {
  const [qt, setQt] = useState(item.qty);
  const changeQty = (v, id) => {
    if (v < 1) v = 1;
    setQt(v);
    changeTotal(v, id);
  };

  return (
    <tr>
      <td>{uKey + 1}.</td>
      <td>{item.title}</td>
      <td>
        <input
          className="form-control"
          style={{ width: "67px", height: "33px" }}
          type="number"
          value={qt}
          onChange={(e) => {
            const { target } = e;
            changeQty(target.value, item._id);
          }}
          onKeyUp={(e) => {
            const { target } = e;
            changeQty(target.value, item._id);
          }}
        />
      </td>
      <td>&#8358;{commafy(item.price)}</td>
      <td>&#8358;{commafy(item.total)}</td>
      <td>
        <IoIosClose
          className="deleteItem"
          onClick={() => {
            removeItem(item._id);
          }}
        />
      </td>
    </tr>
  );
};

export default CartRows;
