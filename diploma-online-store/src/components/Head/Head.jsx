import React from "react";
import cn from "./head.module.css";
import { Link } from "react-router-dom";
import imgHead from "../../assets/img.jpg"; 

const Head = () => {
  return (
    <div
      className={cn.blockHead}
      style={{ backgroundImage: `url(${imgHead})` }}
    >
      <div className={cn.blockTitle}>
        <h1 className={cn.Title}>
          Amazing Discounts <br /> on Garden Products!
        </h1>
      </div>
      <div className={cn.blockBtnCheckOut}>
        <Link to="/sales">
          <button className={cn.btnCheckOut}>Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default Head;
