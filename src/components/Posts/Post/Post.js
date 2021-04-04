import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import { deletePost, likePost } from "../../../actions/posts";
import moment from "moment";

const Post = ({ post, user, admin, setPost }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const Likes = () => {
    if (post.Counter.length > 0) {
      return post.Counter.find((like) => like === user?.result?._id) ? (
        <p>
          <AiFillHeart className="text-xl text-red-500 inline-flex mr-1 transition ease-in-out" />
          &nbsp;
          {post.Counter.length > 2
            ? `You and ${post.Counter.length - 1} others`
            : `${post.Counter.length} Like${
                post.Counter.length > 1 ? "s" : ""
              }`}
        </p>
      ) : (
        <p>
          <AiOutlineHeart className="text-xl text-red-500 inline-flex mr-1 transition ease-in-out" />
          &nbsp; {post.Counter.length}
          {post.Counter.length === 1 ? " Like" : " Likes"}
        </p>
      );
    }
    return (
      <p>
        <AiOutlineHeart className="text-xl text-red-500 inline-flex mr-1" />
        &nbsp;Like
      </p>
    );
  };
  return (
    <article className="relative shadow-xl rounded">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80 focus:outline-none cursor-pointer rounded-t"
        src={post.image}
        title={post.title}
        alt={post.title}
        onClick={() => {
          history.push(`/magazine/${post._id}`);
        }}
      />
      <div
        className={`absolute top-16 px-4 left-0 rounded-r-lg h-6 w-auto z-10 text-sm text-gray-100 py-0.5 uppercase shadow-2xl ${
          post.status === false ? "bg-gray-500" : "bg-green-500"
        }`}
      >
        {post.status === false ? "Unpublished" : "Published"}
      </div>
      <div className="justify-between absolute top-0 shadow-2xl flex p-2  bg-white w-full rounded-t">
        <p className="text-sm font-bold leading-none sm:text-lg my-auto ml-2 uppercase">
          {post.title}
        </p>
        {user?.result?._id === post?.creator || admin ? (
          <HiDotsHorizontal
            className="mr-2 text-2xl cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          ""
        )}

        {isMenuOpen && (
          <div className="absolute top-2 right-2 w-24">
            <nav className="p-2 bg-white border rounded shadow-sm">
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline float-right"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </button>
              <div>
                <ul className="space-y-2 text-center">
                  <li>
                    <button
                      aria-label="Edit Magazine"
                      title="Edit Magazine"
                      className="inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400 text-sm"
                      onClick={() => {
                        setPost(post._id);
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      aria-label="Delete Magazine"
                      title="Delete Magazine"
                      className="inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400 text-sm"
                      onClick={() => {
                        dispatch(deletePost(post._id));
                        setIsMenuOpen(false);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="bg-white p-4 rounded-b">
        <div className="justify-between flex">
          <h1 className="text-lg  my-auto capitalize">{post.name}</h1>
          <p className=" text-xs my-auto text-gray-500">
            {moment(post.dateCreated).fromNow()}
          </p>
        </div>

        <p className="text-gray-700 mt-2 mb-4 capitalize overflow-ellipsis whitespace-nowrap overflow-hidden w-72">
          {post.desc}
        </p>
        <button
          data-tip="Please Login to like this magazine"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
          className="flex focus:outline-none pr-2"
        >
          <Likes />
        </button>
        {!user?.result && (
          <ReactTooltip place="right" type="dark" effect="solid" />
        )}
      </div>
    </article>
  );
};

export default Post;
