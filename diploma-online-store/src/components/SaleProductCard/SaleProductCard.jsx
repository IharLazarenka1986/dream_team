import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "./saleProductCard.module.css"; 
import cartEmpty from "../../assets/basketSale.png";
import cartFilled from "../../assets/icons/basketBlack.png";
import heartEmpty from "../../assets/icons/emptyHeart.png";
import heartFilled from "../../assets/icons/heartBlack.png";
import { CartContext } from "../../context/CartContext.jsx";

const SaleProductCard = ({ id, title, img, price, oldPrice }) => {
  const { addToCart, addToWishlist, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [showAddButton, setShowAddButton] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const handleCartIconClick = (e) => {
    e.stopPropagation();
    setShowAddButton(!showAddButton);
    addToCart({
      id,
      title,
      img,
      price: Number(price),
      oldPrice: oldPrice ? Number(oldPrice) : null,
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate("/shopping-cart");
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    addToWishlist({ id, title, img, price: Number(price) });
    setInWishlist(!inWishlist);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const inCart = cartItems.find((item) => item.id === id);

  // 💚 вычисляем процент скидки
  const discount =
    oldPrice && price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  return (
    <div className={cn.saleCard} onClick={handleCardClick}>
      <div className={cn.imgWrapper}>
        <img className={cn.imgCard} src={img} alt={title} />

        {/* 💚 скидка сверху слева */}
        {discount && <div className={cn.discount}>-{discount}%</div>}

        {/* иконки */}
        <div className={cn.icons}>
          <img
            className={cn.iconBasket}
            src={inCart ? cartFilled : cartEmpty}
            alt="Cart"
            onClick={handleCartIconClick}
          />
          <img
            className={cn.iconHeart}
            src={inWishlist ? heartFilled : heartEmpty}
            alt="Wishlist"
            onClick={handleWishlistClick}
          />
        </div>

        {showAddButton && (
          <button className={cn.addToCartBtn} onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>

      <div className={cn.infoPrice}>
        <p className={cn.titleCard}>{title}</p>
        <div className={cn.priceRow}>
          <p className={cn.price}>${price}</p>
          {oldPrice && <p className={cn.oldPrice}>${oldPrice}</p>}
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;
