import React from "react";
import classes from "./LoadingUI.module.css";

const loadingUI = () => {
  return (
      <div className={`${classes.spinner__main}`}>
    <div className={`${classes.spinner}`}>
      <div className={`${classes.rect1}`}></div>
      <div className={`${classes.rect2}`}></div>
      <div className={`${classes.rect3}`}></div>
      <div className={`${classes.rect4}`}></div>
      <div className={`${classes.rect5}`}></div>
    </div></div>
  );
};

export default loadingUI;
