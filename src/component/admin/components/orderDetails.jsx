import React from "react";

const OrderDetails = ({ data }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Order Details.</h5>
          <p className="card-text">
            Date : <strong>{data[0].orderDate}</strong>
          </p>
          <p className="card-text">
            Order Status : <strong>InComplete</strong>
          </p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Order Items</h5>
          <ul className="list-group list-group-flush">
            {data[0].order.map((m, i) => (
              <li className="list-group-item" key={i}>
                {m.title} - {m.qty} qty.
              </li>
            ))}
          </ul>
        </div>

        <div className="card-body">
          <h5 className="card-title">Buyer Details</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Name : {data[0].customerDetails.firstName}{" "}
              {data[0].customerDetails.lastName}
            </li>
            <li className="list-group-item">
              Email : {data[0].customerDetails.email}
            </li>
            <li className="list-group-item">
              Phone : {data[0].customerDetails.phone1}
            </li>
            <li className="list-group-item">
              Address : {data[0].customerDetails.address}
            </li>
            <li className="list-group-item"></li>
          </ul>
        </div>

        <button className="btn btn-block btn-success btn-lg">
          Mark As Completed
        </button>
      </div>
    </>
  );
};

export default OrderDetails;
