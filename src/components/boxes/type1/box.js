import React from "react";

// asset
import style from "./style.module.scss";

function BoxType1({ data }) {
  const { title, icon, content } = data;
  return (
    <div className={style.box}>
      <img className={style.icon} src={icon} alt="" title="" />
      <div className={style.title}>{title}</div>
      <p className={style.caption}>{content}</p>
    </div>
  );
}

function ListBoxType1({ payload }) {
  return payload.length !== 0 ? (
    <div className={style.listType1}>
      {payload.map((x, i) => (
        <BoxType1 data={x} key={i} />
      ))}
    </div>
  ) : (
    <p> موجود نیست</p>
  );
}

export { BoxType1, ListBoxType1 };
