import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import students from "./students";
import comments from "./comments";
import closureDate from "./closureDate";
export default combineReducers({
  posts,
  auth,
  students,
  comments,
  closureDate,
});
