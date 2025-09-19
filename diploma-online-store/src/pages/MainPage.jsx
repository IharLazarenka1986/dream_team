import React from "react";
import Head from "../components/Head/Head.jsx";
import ProductCategories from "../components/ProductCategories/ProductCategories.jsx";
import CardList from "../components/NameCardCategories/Card.jsx"; 
import Sale from "../components/Sale/Sale.jsx";
import Discount from "../components/Discount/Discount.jsx";  // оставляем только один
import Contact from "../components/Contact/Contact.jsx";

const MainPage = () => {
  return (
    <>
      <Head />
      <ProductCategories />
      <CardList />
      <Sale />
      <Discount />   
      <Contact />
    </>
  );
};

export default MainPage;

