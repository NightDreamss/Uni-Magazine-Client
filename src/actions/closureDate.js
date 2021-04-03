import * as api from "../api";
import {
  SET_CLOSURE,
  DELETE_CLOSURE,
  UPDATE_CLOSURE,
  FETCH_CLOSURE,
} from "../constants/actionTypes";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const getClosureDate = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClosureDate();
    dispatch({ type: FETCH_CLOSURE, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to retrieve magazines. Error: ${error}`,
    });
  }
};

export const createClosureDate = (post) => async (dispatch) => {
  try {
    const { data } = await api.createClosureDate(post);
    dispatch({ type: SET_CLOSURE, payload: data });
    MySwal.fire({
      icon: "success",
      title: `Closure Date Created`,
      text: "Your closure date has been set",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to post magazine. Error: ${error}`,
    });
  }
};

export const updateClosureDate = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateClosureDate(id, post);
    dispatch({ type: UPDATE_CLOSURE, payload: data });
    MySwal.fire({
      icon: "success",
      title: "Closure Date Updated",
      text: "You have updated the closure date period",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to update magazine. Error: ${error}`,
    });
  }
};

export const deleteClosureDate = (id) => async (dispatch) => {
  try {
    await api.deleteClosureDate(id);
    dispatch({ type: DELETE_CLOSURE, payload: id });
    MySwal.fire({
      icon: "success",
      title: "Closure Date Deleted",
      text: "You have successfully removed the closure date period",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to delete magazine. Error: ${error}`,
    });
  }
};
