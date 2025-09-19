import React from "react";
import cn from "./navButtons.module.css"; 

const NavButtons = ({ firstBtn, secondBtn, threeBtn, fourthBtn }) => {
  return (
    <div className={cn.wrapper}>
      <button className={cn.btnMain}>{firstBtn}</button>
      <div className={cn.line}></div>

      <button className={cn.btnSecond}>{secondBtn}</button>

      {threeBtn && (
        <>
          <div className={cn.line}></div>
          <button className={cn.btnThird}>{threeBtn}</button>
        </>
      )}

      {fourthBtn && (
        <>
          <div className={cn.line}></div>
          <button className={cn.btnFourth}>{fourthBtn}</button>
        </>
      )}
    </div>
  );
};

export default NavButtons;




