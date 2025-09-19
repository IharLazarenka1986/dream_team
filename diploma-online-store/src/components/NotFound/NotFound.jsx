import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cn from "./notFound.module.css";
import Contact from "../Contact/Contact";
import imgFour from "../../assets/imgFour.png";
import imgBall from "../../assets/imgBall.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={cn.notFoundWrapper}>
      <div className={cn.blockImg}>
        <img className={cn.imgNotFound01} src={imgFour} alt="imgFour" />
        <img className={cn.imgNotFound02} src={imgBall} alt="imgBall" />
        <img className={cn.imgNotFound01} src={imgFour} alt="imgFour" />
      </div>
      <div className={cn.blockPageNotFound}>
        <h2
          className={cn.titlePageNotFound}
          onClick={() => navigate("/all-products")}
          style={{ cursor: "pointer" }}
        >
          Page Not Found
        </h2>
      </div>
      <div className={cn.blockNotFoundMessage}>
        <p className={cn.notFoundMessage}>
          We’re sorry, the page you requested could not be found. <br />
          Please go back to the homepage.
        </p>
      </div>
      <div className={cn.blockBtnGoHome}>
        <Link to="/" className={cn.btnGoHome}>
          Go home
        </Link>
      </div>
      <Contact />
    </div>
  );
};

export default NotFound;
