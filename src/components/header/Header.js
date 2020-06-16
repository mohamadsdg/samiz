import React from "react";
import Intro from "../intro/Intro";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";

// asset
import style from "./Header.module.scss";
import master from "../../asset/style/master.module.scss";

import Instagram from "../../asset/_icon/instagram.svg";
import Telegram from "../../asset/_icon/telegram.svg";

const Header = () => {
  return (
    <>
      <Intro />
      <div className={style.menu}>
        <div className={master.container}>
          <div className={`${style.inner} ${master.dFlex}`}>
            <div className={`${style.right} ${master.dFlex}`}>
              <Logo />
              <Menu />
            </div>
            <div className={`${style.left} ${style.social}`}>
              <ul className={master.dFlex}>
                <li className={style.socialItem}>
                  <a href="#">
                    <img src={Telegram} alt="" title="" />
                  </a>
                </li>
                <li className={style.socialItem}>
                  <a href="#">
                    <img src={Instagram} alt="" title="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
