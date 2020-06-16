import React from "react";
import { NavLink } from "react-router-dom";
import WEB from "../../constants/web";

// asset
import master from "../../asset/style/master.module.scss";
import style from "./style.module.scss";

const Menu = () => {
  const menuList = [
    { title: "صفحه اصلی", route: WEB.HOME },
    { title: "درباره ما ", route: WEB.ABOUT },
    { title: "خدمات", route: WEB.SERVICES },
    { title: "   وکلا", route: WEB.LAW },
    { title: "قوانین", route: WEB.POLICY },
  ];
  return (
    <ul className={`${master.dFlex} ${style.menu}`}>
      {menuList.map((x, i) => (
        <li key={i} className={style.menuItem}>
          <NavLink
            to={x.route}
            activeStyle={{
              color: "#9c2320",
            }}
          >
            {x.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
