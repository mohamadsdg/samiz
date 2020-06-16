import React from "react";
import { TitleStyle1 } from "../../components/title/Title";
import { ListBoxType1 } from "../../components/boxes/type1/box";

// asset
import master from "../../asset/style/master.module.scss";
import style from "./style.module.scss";

import Icon1 from "../../asset/_icon/icon-one.png";
import Icon2 from "../../asset/_icon/icon-two.png";
import Icon3 from "../../asset/_icon/icon-three.png";
import Icon4 from "../../asset/_icon/icon-four.png";

const data = [
  {
    title: "عنوان خدمت",
    icon: Icon1,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "عنوان خدمت",
    icon: Icon2,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "عنوان خدمت",
    icon: Icon3,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "عنوان خدمت",
    icon: Icon4,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

function Service() {
  return (
    <div className={style.services}>
      <div className={master.container}>
        <div className={style.inner}>
          <TitleStyle1 title="خدمات ما" style={{ marginBottom: "25px" }} />
          <ListBoxType1 payload={data} />
        </div>
      </div>
    </div>
  );
}

export default Service;
