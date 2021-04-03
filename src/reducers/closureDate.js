import {
  SET_CLOSURE,
  DELETE_CLOSURE,
  UPDATE_CLOSURE,
  FETCH_CLOSURE,
} from "../constants/actionTypes";

const Closure = (closure = [], action) => {
  switch (action.type) {
    case FETCH_CLOSURE:
      return action.payload;
    case SET_CLOSURE:
      return [...closure, action.payload];
    case UPDATE_CLOSURE:
      return closure.map((date) =>
        date._id === action.payload._id ? action.payload : date
      );
    case DELETE_CLOSURE:
      return closure.filter((date) => date._id !== action.payload);
    default:
      return closure;
  }
};
export default Closure;
