import * as api from "../api";
import { DELETE_USER, FETCH_USERS } from "../constants/actionTypes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to retrieve students. Error: ${error}`,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
    MySwal.fire({
      icon: "success",
      title: "User Deleted",
      text: "User has been successfully deleted",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to delete user. Error: ${error}`,
    });
  }
};
