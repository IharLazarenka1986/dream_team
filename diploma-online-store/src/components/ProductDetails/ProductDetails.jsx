import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cn from "./productDetails.module.css";
import Contact from "../Contact/Contact.jsx";
import NavButtons from "../NavButtons/NavButtons.jsx";
import { CartContext } from "../../context/CartContext.jsx";

const ProductDetails = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext); 

  const increment = () => setCount(count + 1);
  const decrement = () => { if (count > 1) setCount(count - 1); };

  const parsePrice = (price) => {
    if (!price) return 0;
    if (typeof price === "number") return price;
    const num = parseFloat(price.toString().replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const price = parsePrice(item.price);
  const oldPrice = parsePrice(item.oldPrice);

  const totalPrice = (price * count).toFixed(2);
  const totalOldPrice = oldPrice ? (oldPrice * count).toFixed(2) : null;

  const handleAddToCart = () => {
    addToCart({ ...item, count }); 
  };

  return (
    <div className={cn.blockProductDetails}>
      <div className={cn.blockNavButtons}>
        <NavButtons 
          firstBtn="MainPage" 
          secondBtn="Categories" 
          threeBtn="Tools and equipment" 
          fourthBtn={item.title} 
        />
      </div>

      <div className={cn.detailsPage}>
        <img src={item.img} alt={item.title} className={cn.productImage} />

        <div className={cn.blockNamePriceDescription}>
          <h2 className={cn.title}>{item.title}</h2>

          <p className={cn.priceWrapper}>
            <span className={cn.price}>{totalPrice} $</span>
            {totalOldPrice && <span className={cn.oldPrice}>{totalOldPrice} $</span>}
            {item.discount && <span className={cn.discount}>{item.discount}</span>}
          </p>

          {item.description && <p className={cn.description}>{item.description}</p>}

          <div className={cn.blockProductQuantity}>
            <button className={cn.btnMinus} onClick={decrement}>−</button>
            <p className={cn.productQuantity}>{count}</p>
            <button className={cn.btnPlus} onClick={increment}>+</button>

            <Link to="/shopping-cart">
              <button className={cn.btmAddToCart} onClick={handleAddToCart}>
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ProductDetails;
