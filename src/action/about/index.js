import { PAGES } from "../../constants";
import Http from "../../services/Request";

const contentFetch = (statusFetch) => ({
  type: PAGES.ABOUT.REQUEST,
  payload: statusFetch,
});
const Content = (payload) => ({
  type: PAGES.ABOUT.CONTENT,
  payload,
});

export const getContentAbout = () => async (dispatch) => {
  dispatch(contentFetch(true));

  const rsp = await Http.get("/posts/1").catch((exception) => {
    new Error(exception);
  });
  try {
    const {
      data: { body },
    } = rsp;
    dispatch(Content(body));
  } catch (error) {
    dispatch(contentFetch(false));
    new Error(error);
  }
  dispatch(contentFetch(false));
};
