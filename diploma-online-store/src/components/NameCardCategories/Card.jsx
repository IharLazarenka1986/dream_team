
import React from "react";
import { Link } from "react-router-dom"; 
import cn from "./card.module.css";

import card01 from "../../assets/card01.png";
import card02 from "../../assets/card02.png";
import card03 from "../../assets/card03.png";
import card04 from "../../assets/card04.png";

const cardsData = [
  { id: 1, title: "Fertilizer", img: card01 },
  { id: 2, title: "Protective products and septic tanks", img: card02 },
  { id: 3, title: "Planting material", img: card03 },
  { id: 4, title: "Tools and equipment", img: card04 },
];

const Card = ({ title, img }) => (
  <div className={cn.blockCard}>
    <img className={cn.fertilizerImg} src={img} alt={title} />
    <div className={cn.blockCardTitle}>
      <Link to="/products" className={cn.cardLink}>
        <h4 className={cn.cardTitle}>{title}</h4>
      </Link>
    </div>
  </div>
);

const CardList = () => (
  <div className={cn.cardsContainer}>
    {cardsData.map(card => (
      <Card key={card.id} title={card.title} img={card.img} />
    ))}
  </div>
);

export default CardList;

