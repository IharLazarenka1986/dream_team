import React from "react";
import ShoppingCartBaskets from "../ShoppingCardBaskets/ShoppingCardBaskets.jsx";
import Contact from "../Contact/Contact.jsx";

const ShoppingCart = ({ discount }) => {
  return (
    <div>
      <ShoppingCartBaskets discount={discount} />
      <Contact />
    </div>
  );
};

export default ShoppingCart;



