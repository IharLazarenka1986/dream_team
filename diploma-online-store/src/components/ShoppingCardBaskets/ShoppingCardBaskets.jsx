
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import CartOrderConfirmations from "../CartOrderConfirmations/CartOrderConfirmations.jsx";
import cn from "./shoppingCardBaskets.module.css";

const ShoppingCartBaskets = () => {
  const { cartItems, updateCount, removeFromCart, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [firstOrder, setFirstOrder] = useState(true); 

  if (cartItems.length === 0) {
    return <p className={cn.titleCartEmpty}>Your cart is empty</p>;
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const discount = firstOrder ? 5 : 0;
  const discountAmount = (totalPrice * discount) / 100;
  const finalPrice = totalPrice - discountAmount;

  const handleOrder = () => {
    if (!name || !phone || !email) {
      alert("Please fill in all fields");
      return;
    }

    setFirstOrder(false); 
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    clearCart(); 
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className={cn.blockShoppingCart}>
      <div className={cn.titleShoppingCart}>
        <h2>Shopping cart</h2>
        <hr className={cn.line} />
        <Link to="/products">
          <button className={cn.btnBackStore}>Back to the store</button>
        </Link>
      </div>

      <div className={cn.mainContent}>
        <div className={cn.leftCart}>
          {cartItems.map((item) => (
            <div key={item.id} className={cn.blockCardBaskets}>
              <img className={cn.imgCard} src={item.img} alt={item.title} />
              <div className={cn.content}>
                <button
                  className={cn.cross}
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>
                <h4 className={cn.titleCard}>{item.title}</h4>

                <div className={cn.bottomRow}>
                  <div className={cn.blockProductQuantity}>
                    <button
                      className={cn.btnMinus}
                      onClick={() =>
                        updateCount(item.id, Math.max(item.count - 1, 1))
                      }
                    >
                      −
                    </button>
                    <p className={cn.productQuantity}>{item.count}</p>
                    <button
                      className={cn.btnPlus}
                      onClick={() => updateCount(item.id, item.count + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className={cn.priceBlock}>
                    <p className={cn.mainPrice}>${item.price * item.count}</p>
                    {item.oldPrice && (
                      <p className={cn.oldPrice}>${item.oldPrice}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={cn.blockOrderDetails}>
          <p className={cn.titleOrderDetails}>Order details</p>
          <p className={cn.numberOfProducts}>{totalItems} items</p>

          <div className={cn.totalRow}>
            <p className={cn.titleTotal}>Total</p>
            <p className={cn.price}>${totalPrice.toFixed(2)}</p>
          </div>

          <div className={cn.totalRow}>
            <p className={cn.titleTotal}>Final price</p>
            <p className={cn.price}>${finalPrice.toFixed(2)}</p>
          </div>

          {discount > 0 && (
            <div className={cn.totalRow}>
              <p className={cn.titleTotal}>Discount</p>
              <p className={cn.price}>- {discount}%</p>
            </div>
          )}

          <input
            className={cn.inputName}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={cn.inputPhoneNumber}
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className={cn.inputEmail}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={cn.btnOrder} onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>

      {showConfirmation && (
        <CartOrderConfirmations onClose={handleCloseConfirmation} />
      )}
    </div>
  );
};

export default ShoppingCartBaskets;
