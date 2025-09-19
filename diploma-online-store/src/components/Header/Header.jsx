import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/plant.png";
import moon from "../../assets/icons/moon.png";
// import sunLeft from "../../assets/icons/darkMoon.png";
import ellipseGrey from "../../assets/icons/sun.png";
import emptyHeart from "../../assets/icons/emptyHeart.png";
import heartBlack from "../../assets/icons/heartBlack.png";
import cartEmpty from "../../assets/icons/cartEmpty.png";
import basketBlack from "../../assets/icons/basketBlack.png";
import cn from "./header.module.css";
import { CartContext } from "../../context/CartContext.jsx";

const Header = () => {
  const { cartItems, wishlistItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => setIsDay(!isDay);

  useEffect(() => {
    document.body.style.backgroundColor = isDay ? "#FFFFF1" : "#1E1E2F";
  }, [isDay]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalWishlistCount = wishlistItems.length;

  return (
    <div className={cn.blockHeader}>
      <div className={cn.blockLogo}>
        <img className={cn.logo} src={logo} alt="logo" />
      </div>

      <div className={cn.containerDayNight} onClick={toggleDayNight}>
        <div
          className={cn.toggleCircle}
          style={{ left: isDay ? "2px" : "30px" }}
        ></div>

        <img
          className={`${cn.toggleIcon} ${isDay ? cn.visible : cn.hidden}`}
          src={moon}
          alt="moon"
          style={{ left: "30px" }}
        />
        <img
          className={`${cn.toggleIcon} ${isDay ? cn.hidden : cn.visible}`}
          src={ellipseGrey}
          alt="sun"
          style={{ left: "2px" }}
        />
      </div>

      <div className={cn.blockHeartEmpty}>
        <div className={cn.blockIcons}>
          <div className={cn.iconWrapper} onClick={() => navigate("/wishlist")}>
            <img
              className={cn.emptyHeart}
              src={totalWishlistCount > 0 ? heartBlack : emptyHeart}
              alt="heart"
            />
            {totalWishlistCount > 0 && (
              <span className={cn.counter}>{totalWishlistCount}</span>
            )}
          </div>

          <div className={cn.iconWrapper} onClick={() => navigate("/shopping-cart")}>
            <img
              className={cn.cartEmpty}
              src={totalCartCount > 0 ? basketBlack : cartEmpty}
              alt="cart"
            />
            {totalCartCount > 0 && (
              <span className={cn.counter}>{totalCartCount}</span>
            )}
          </div>
        </div>
      </div>

      <h3 className={cn.discount}>1 day discount!</h3>

      <nav className={cn.nav}>
        <Link to="/" className={cn.navLink}>Main Page</Link>
        <Link to="/categories" className={cn.navLink}>Categories</Link>
        <Link to="/products" className={cn.navLink}>All Products</Link>
        <Link to="/sales" className={cn.navLink}>All Sales</Link>
      </nav>
    </div>
  );
};

export default Header;
