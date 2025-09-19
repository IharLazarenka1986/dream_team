import React from "react";
import { Link } from "react-router-dom";
import cn from "./categories.module.css";
import NavButtons from "../NavButtons/NavButtons.jsx";
import card01 from "../../assets/card01.png";
import card02 from "../../assets/card02.png";
import card03 from "../../assets/card03.png";
import card04 from "../../assets/card04.png";
import card05 from "../../assets/card05.png";

const cardsData = [
  { id: 1, title: "Fertilizer", img: card01 },
  { id: 2, title: "Protective products and septic tanks", img: card02 },
  { id: 3, title: "Planting material", img: card03 },
  { id: 4, title: "Tools and equipment", img: card04, path: "/tools-and-equipment" },
  { id: 5, title: "Pots and planters", img: card05 },
];

const Card = ({ title, img, path }) => {
  return (
    <div className={cn.blockCard}>
      <img className={cn.fertilizerImg} src={img} alt={title} />
      <div className={cn.blockCardTitle}>
        {/* Если path есть, используем его, иначе ведем на /products */}
        <Link to={path || "/products"} className={cn.cardLink}>
          <h4 className={cn.cardTitle}>{title}</h4>
        </Link>
      </div>
    </div>
  );
};

const CardList = () => (
  <div className={cn.cardsContainer}>
    {cardsData.map((card) => (
      <Card key={card.id} title={card.title} img={card.img} path={card.path} />
    ))}
  </div>
);

const Categories = () => {
  return (
    <div className={cn.categoriesWrapper}>
      <NavButtons firstBtn="Main page" secondBtn="Categories" />
      <h2 className={cn.titleCategories}>Categories</h2>
      <CardList />
    </div>
  );
};

export default Categories;
