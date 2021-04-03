import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteComment } from "../actions/comments";

const Comment = ({ comments, user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1>{comments.userName}</h1>
        <p>{moment(comments.dateCreated).fromNow()}</p>
      </div>

      <div className="text-left">{comments.comment}</div>
      <div className="flex justify-between">
        <div></div>
        {user?.result?._id === comments?.userId && (
          <button
            aria-label="Delete Comment"
            title="Delete Comment"
            className="p-2 font-medium tracking-wide mt-4 text-black transition duration-200 rounded hover:shadow-md bg-gray-300 hover:bg-gray-400 focus:outline-none text-sm"
            onClick={() => {
              dispatch(deleteComment(comments._id));
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
