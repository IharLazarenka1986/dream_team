import React from "react";
import { Link } from "react-router-dom";
import cn from "./categories.module.css";

const ProductCategories = () => {
  return (
    <div className={cn.blockCategories}>
      <h2 className={cn.titleCategories}>Categories</h2>
      <hr className={cn.line} />
      <Link to="/categories">
        <button className={cn.btnCategories}>All categories</button>
      </Link>
    </div>
  );
};

export default ProductCategories;

