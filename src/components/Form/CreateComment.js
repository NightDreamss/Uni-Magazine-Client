import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createComment } from "../../actions/comments";
import Title from "../Title";

const Comments = ({ user, id, magazineId, setId }) => {
  const Data = useSelector((state) =>
    id ? state.comments.find((p) => p._id === id) : null
  );

  const dispatch = useDispatch();
  const initialState = {
    comment: "",
  };
  const [data, setData] = useState(initialState);

  useEffect(() => {
    if (Data) setData(Data);
  }, [Data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      createComment({
        ...data,
        userName: user?.result?.name,
        userId: user?.result?._id,
        magazineId,
      })
    ).then(() => reset());
  };
  const reset = () => {
    setId(null);
    setData({ ...initialState });
  };

  if (!user?.result?.name) {
    return (
      <div className="text-center my-12">
        <Title title="Please login to leave a comment" />
      </div>
    );
  }
  return (
    <div className="mt-4">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="relative mb-4 text-left">
          <label htmlFor="message" className="text-sm leading-7  text-gray-600">
            Leave your comment below
          </label>
          <textarea
            id="comment"
            name="comment"
            value={data.comment}
            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            onChange={(e) => setData({ ...data, comment: e.target.value })}
          ></textarea>
        </div>
        <button
          className="px-6 py-2 text-lg text-white border-0 rounded bg-deep-purple-accent-400 focus:outline-none hover:bg-deep-purple-accent-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
