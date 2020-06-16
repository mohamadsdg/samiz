import React from "react";

import style from "./style.module.scss";

function TitleStyle1({ title = "", ...props }) {
  return (
    <h1 className={`${style.title} ${style.style1}`} {...props}>
      ..:: {title} ::..
    </h1>
  );
}

export { TitleStyle1 };
