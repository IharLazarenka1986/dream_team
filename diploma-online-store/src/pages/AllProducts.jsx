
import React, { useState } from "react";
import cn from "../components/Categories/categories.module.css";
import NavButtons from "../components/NavButtons/NavButtons.jsx";
import SaleProductCard from "../components/SaleProductCard/SaleProductCard.jsx";
import NavigationPriceDiscountSorted from "../components/NavigationPriceDiscountSorted/NavigationPriceDiscountSorted.jsx";
import Contact from "../components/Contact/Contact.jsx";
import { allProducts } from "./allProductsAndSalesData.js";

const AllProducts = () => {
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [discountOnly, setDiscountOnly] = useState(false);
  const [sortBy, setSortBy] = useState("by default");

  let filteredProducts = allProducts.filter((item) => {
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
    <div className={cn.categoriesWrapper}>
      <NavButtons firstBtn="Main page" secondBtn="All products" />
      <h2 className={cn.titleCategories}>All products</h2>

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

export default AllProducts;
