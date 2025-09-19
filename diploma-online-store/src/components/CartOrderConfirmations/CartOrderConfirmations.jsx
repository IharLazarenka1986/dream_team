import React from "react";
import cn from "./CartOrderConfirmations.module.css";

const CartOrderConfirmations = ({ onClose }) => {
  return (
    <div className={cn.overlay}>
      <div className={cn.blockOrderConfirmations}>
        <h2 className={cn.titleOrder}>Congratulations!</h2>
        <button className={cn.btnCloseDescription} onClick={onClose}>
          ×
        </button>
        <p className={cn.orderDescription}>
          Your order has been successfully placed on the website.
        </p>
        <p className={cn.orderDescription}>
          A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  );
};

export default CartOrderConfirmations;
