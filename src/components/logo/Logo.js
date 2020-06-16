import React from "react";
import { Link } from "react-router-dom";
import WEB from "../../constants/web";

// asset
import style from "./style.module.scss";
import logoImg from "../../asset/_icon/logo.png";

const Logo = () => {
  return (
    <Link to={WEB.HOME} className={style.logo}>
      <div className={style.logoImage}>
        <img src={logoImg} alt="" title="" />
      </div>
    </Link>
  );
};

export default Logo;
