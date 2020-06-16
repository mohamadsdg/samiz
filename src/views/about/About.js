import React from "react";
import { TitleStyle1 } from "../../components/title/Title";

// asset
import master from "../../asset/style/master.module.scss";
import style from "./style.module.scss";

// logic
import { useSelector, useDispatch } from "react-redux";
import { getContentAbout } from "../../action/about/index";

const AboutSelector = (store) => ({
  content: store.pages.about.about_content,
  loading: store.pages.about.about_fetch,
});
const AboutDispatch = () => {
  const dispatch = useDispatch();
  const onGetContentAbout = () => {
    dispatch(getContentAbout());
  };
  return { onGetContentAbout };
};

function About() {
  const { content, loading } = useSelector(AboutSelector);
  const { onGetContentAbout } = AboutDispatch();
  React.useEffect(() => {
    onGetContentAbout();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className={style.about}>
      <div className={master.container}>
        <div className={style.inner}>
          <TitleStyle1 title="درباره ما" />
          {loading ? (
            "کمی صبر کنید ... "
          ) : (
            <p className={style.content}>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
