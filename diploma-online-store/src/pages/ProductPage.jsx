
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import { allProducts, salesData } from "./allProductsAndSalesData.js";

const ProductPage = () => {
  const { id } = useParams();
  const itemId = parseInt(id, 10);

  const item = [...allProducts, ...salesData].find(product => product.id === itemId);

  if (!item) return <div>Product not found</div>;

  return <ProductDetails item={item} />;
};

export default ProductPage;

