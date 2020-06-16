import { combineReducers } from "redux";
import { PAGES } from "../../constants";

export const about_fetch = (state = false, action) => {
  return action.type === PAGES.ABOUT.REQUEST ? action.payload : state;
};
export const about_content = (state = null, action) => {
  switch (action.type) {
    case PAGES.ABOUT.CONTENT:
      return (state = action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  about_fetch,
  about_content,
});
