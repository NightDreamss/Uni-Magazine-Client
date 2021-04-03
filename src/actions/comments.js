import * as api from "../api";
import { All_COMMENT, COMMENT, DELETE_COMMENT } from "../constants/actionTypes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();
    dispatch({ type: All_COMMENT, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to retrieve comments. Error: ${error}`,
    });
  }
};

export const createComment = (comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(comment);
    dispatch({ type: COMMENT, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to post comment. Error: ${error}`,
    });
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    await api.deleteComment(id);
    dispatch({ type: DELETE_COMMENT, payload: id });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to delete comment. Error: ${error}`,
    });
  }
};
