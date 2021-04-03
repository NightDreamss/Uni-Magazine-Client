import { All_COMMENT, COMMENT, DELETE_COMMENT } from "../constants/actionTypes";

const Comment = (comments = [], action) => {
  switch (action.type) {
    case All_COMMENT:
      return action.payload;
    case COMMENT:
      return [...comments, action.payload];
    case DELETE_COMMENT:
      return comments.filter((comment) => comment._id !== action.payload);
    default:
      return comments;
  }
};
export default Comment;
