import React, { useState } from "react";

const CartRows = ({ item, changeTotal }) => {
  const [qt, setQt] = useState(item.qty);
  const changeQty = (v, id) => {
    setQt(v);
    changeTotal(v, id);
  };
  return (
    <tr>
      <td>1</td>
      <td>{item.title}</td>
      <td>
        <input
          className="form-control"
          style={{ width: "50px" }}
          type="number"
          value={qt}
          onChange={(e) => {
            const { target } = e;
            changeQty(target.value, item._id);
          }}
        />
      </td>
      <td>{item.price}</td>
      <td>{item.total}</td>
    </tr>
  );
};

export default CartRows;
