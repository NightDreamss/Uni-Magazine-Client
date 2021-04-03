import * as api from "../api";
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to retrieve magazines. Error: ${error}`,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    MySwal.fire({
      icon: "success",
      title: `Magazine ${post.title} Created`,
      text: "Your Magazine has been successfully created",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to post magazine. Error: ${error}`,
    });
  }
};

export const updatePost = (id, post, user) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    if (user === "publish") {
      MySwal.fire({
        icon: "success",
        title: "Magazine Publish Status",
        text: `The Magazine has been successfully ${
          data.status === false ? "Unpublished" : "Published"
        }`,
      });
    } else {
      MySwal.fire({
        icon: "success",
        title: "Magazine Updated",
        text: "Your Magazine has been successfully updated",
      });
    }
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to update magazine. Error: ${error}`,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
    MySwal.fire({
      icon: "success",
      title: "Magazine Deleted",
      text: "Your Magazine has been successfully deleted",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to delete magazine. Error: ${error}`,
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! Unable to like magazine. Error: ${error}`,
    });
  }
};
