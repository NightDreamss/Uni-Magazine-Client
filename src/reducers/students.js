import { DELETE_USER, FETCH_USERS } from "../constants/actionTypes";

const Students = (students = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case DELETE_USER:
      return students.filter((post) => post._id !== action.payload);
    default:
      return students;
  }
};
export default Students;
