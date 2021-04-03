import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const signin = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to login. Error: ${error}`,
    });
  }
};

export const signup = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to register. Error: ${error}`,
    });
  }
};
