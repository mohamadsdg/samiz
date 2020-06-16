import { combineReducers } from "redux";

/////// reducerPart
import AboutReducer from "./about/index";

export default combineReducers({
  pages: combineReducers({
    about: AboutReducer,
  }),
});
