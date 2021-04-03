import axios from "axios";

const API = axios.create({
  baseURL: "https://uni-magazine-project.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//Posts API Calls
export const fetchPosts = () => API.get("/posts");
export const createPost = (newMagazine) => API.post("/posts", newMagazine);
export const updatePost = (id, updateMagazine) =>
  API.patch(`/posts/${id}`, updateMagazine);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likeMagazine`);

//Users API Calls
export const signIn = (form) => API.post("/user/signin", form);
export const signUp = (form) => API.post("/user/signup", form);
export const fetchUsers = () => API.get("/user");
export const deleteUser = (id) => API.delete(`/user/${id}`);

//Comments API Calls
export const fetchComments = () => API.get("/comments");
export const createComment = (newComment) => API.post("/comments", newComment);
export const deleteComment = (id) => API.delete(`/comments/${id}`);

//ClosureDate API Calls
export const fetchClosureDate = () => API.get("/closure");
export const createClosureDate = (postClosureDate) =>
  API.post("/closure", postClosureDate);
export const updateClosureDate = (id, updateClosureDate) =>
  API.patch(`/closure/${id}`, updateClosureDate);
export const deleteClosureDate = (id) => API.delete(`/closure/${id}`);
