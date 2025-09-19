
import React, { useState } from "react";
import cn from "./navigationPriceDiscountSorted.module.css";
import { ChevronDown } from "lucide-react";

const NavigationPriceDiscountSorted = ({
  priceRange,
  setPriceRange,
  discountOnly,
  setDiscountOnly,
  sortBy,
  setSortBy
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];

  const handleSelect = (option) => {
    setSortBy(option);
    setIsOpen(false);
  };

  return (
    <div className={cn.blockNavigationPriceDiscountSorted}>
      <div className={cn.blockPrice}>
        <h4 className={cn.titlePrice}>Price</h4>
        <input
          className={cn.inputFrom}
          type="number"
          placeholder="from"
          value={priceRange.from}
          onChange={(e) => setPriceRange({ ...priceRange, from: e.target.value })}
        />
        <input
          className={cn.inputTo}
          type="number"
          placeholder="to"
          value={priceRange.to}
          onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
        />
      </div>

      <div className={cn.blockDiscount}>
        <h4 className={cn.titleDiscountItems}>Discount items</h4>
        <input
          className={cn.checkbox}
          type="checkbox"
          checked={discountOnly}
          onChange={() => setDiscountOnly(!discountOnly)}
        />
      </div>

      <div className={cn.blockSorted}>
        <h4 className={cn.titleSorted}>Sorted</h4>
        <div className={cn.sortHeader} onClick={() => setIsOpen(!isOpen)}>
          <span>{sortBy}</span>
          <ChevronDown size={18} className={`${cn.arrow} ${isOpen ? cn.rotated : ""}`} />
        </div>

        {isOpen && (
          <div className={cn.sortList}>
            {options.map((option, index) => (
              <div
                key={index}
                className={`${cn.sortItem} ${sortBy === option ? cn.active : ""}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationPriceDiscountSorted;

