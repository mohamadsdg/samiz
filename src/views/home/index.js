import React from "react";
import { TitleStyle1 } from "../../components/title/Title";

// asset
import master from "../../asset/style/master.module.scss";
import style from "./style.module.scss";

function Home() {
  return (
    <div className={style.home}>
      <div className={master.container}>
        <div className={style.inner}>
          <TitleStyle1 title="صفحه اصلی" />
        </div>
      </div>
    </div>
  );
}

export default Home;
