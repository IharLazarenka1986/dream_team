
import React, { useState } from "react";
import Contact from "../Contact/Contact.jsx";
import NavigationPriceDiscountSorted from "../NavigationPriceDiscountSorted/NavigationPriceDiscountSorted.jsx";
import NavButtons from "../NavButtons/NavButtons.jsx";
import SaleProductCard from "../SaleProductCard/SaleProductCard.jsx";
import cn from "./toolsAndEquipment.module.css";

import saleImg04 from "../../assets/saleImg04.png";
import productImg01 from "../../assets/productImg01.png";
import productImg02 from "../../assets/productImg02.png";
import productImg03 from "../../assets/productImg03.png";
import productImg04 from "../../assets/productImg04.png";
import productImg05 from "../../assets/productImg05.png";
import productImg06 from "../../assets/productImg06.png";
import productImg07 from "../../assets/productImg07.png";

const toolsProducts = [
  { id: 1, title: "Secateurs", img: saleImg04, price: 199, oldPrice: 240, discount: "-17%" },
  { id: 2, title: "Collection for berries (plastic)", img: productImg01, price: 26, oldPrice: 35, discount: "-26%" },
  { id: 3, title: "Gloves (black)", img: productImg02, price: 9, oldPrice: 14, discount: "-36%" },
  { id: 4, title: "Sickle-shaped hacksaw", img: productImg03, price: 155 },
  { id: 5, title: "Bayonet shovel", img: productImg04, price: 155 },
  { id: 6, title: "Garden pitchfork", img: productImg05, price: 179 },
  { id: 7, title: "Barbell", img: productImg06, price: 12 },
  { id: 8, title: "Souvenir thermometer", img: productImg07, price: 98, discount: "-18%" },
];

const ToolsAndEquipment = () => {
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [discountOnly, setDiscountOnly] = useState(false);
  const [sortBy, setSortBy] = useState("by default");

  let filteredProducts = toolsProducts.filter((item) => {
    const from = priceRange.from ? Number(priceRange.from) : 0;
    const to = priceRange.to ? Number(priceRange.to) : Infinity;
    const inRange = item.price >= from && item.price <= to;
    const discountMatch = discountOnly ? !!item.discount : true;
    return inRange && discountMatch;
  });

  if (sortBy === "price: low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price: high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filteredProducts = [...filteredProducts].reverse();
  }

  return (
    <div className={cn.toolsWrapper}>
      <NavButtons
        firstBtn="Main page"
        secondBtn="Categories"
        thirdBtn="Tools and equipment"
      />

      <h2 className={cn.titleCategories}>Tools and equipment</h2>

      <NavigationPriceDiscountSorted
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        discountOnly={discountOnly}
        setDiscountOnly={setDiscountOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className={cn.allProductsGrid}>
        {filteredProducts.map((item) => (
          <SaleProductCard key={item.id} {...item} />
        ))}
      </div>

      <Contact />
    </div>
  );
};

export default ToolsAndEquipment;
