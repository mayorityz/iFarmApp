import React from "react";
import Cart from "./../dashboard/Cart";

const MyCart = () => {
  return (
    <section className="welcome-page sec-padding text-center p-relative o-hidden bg-gray">
      <div className="container pt-5">
        <Cart isNotAdmin={true} />
      </div>
    </section>
  );
};

export default MyCart;
