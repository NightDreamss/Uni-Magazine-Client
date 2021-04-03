import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CreateComment from "../components/Form/CreateComment";

import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../actions/comments";

const Comments = ({ user, magazineId }) => {
  const [getCommentData, setGetCommentData] = useState(null);
  const commentData = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [getCommentData, dispatch]);

  return (
    <div className="lg:max-w-3xl mx-auto">
      <h1 className="text-2xl mb-4">Comments</h1>
      <div>
        {commentData.map((comment) => {
          if (comment.magazineId === magazineId) {
            return (
              <div
                key={comment._id}
                className="p-4 border-gray-300 border-b-2 odd:bg-gray-100 bg-gray-200 first:rounded-t-md last:rounded-b-md"
              >
                <Comment comments={comment} user={user} />
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      <CreateComment
        id={getCommentData}
        magazineId={magazineId}
        user={user}
        setId={setGetCommentData}
      />
    </div>
  );
};

export default Comments;
