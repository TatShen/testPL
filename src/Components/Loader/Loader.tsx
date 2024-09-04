import React from "react";
import style from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={style.mask}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;
