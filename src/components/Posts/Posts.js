import React from "react";
import Post from "./Post/Post";
import { Link } from "react-router-dom";
import Title from "../Title";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <Title title="Recent Magazines" />
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
      </div>

      {!posts.length ? (
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          <div>
            <div className="w-full h-56 mb-6 rounded shadow-lg skeleton-box md:h-64 xl:h-80" />
            <div className="w-full h-8 mb-4 rounded shadow skeleton-box" />
            <div className="w-full h-20 mb-2 rounded shadow skeleton-box" />
          </div>
          <div>
            <div className="w-full h-56 mb-6 rounded shadow-lg skeleton-box md:h-64 xl:h-80" />
            <div className="w-full h-8 mb-4 rounded shadow skeleton-box" />
            <div className="w-full h-20 mb-2 rounded shadow skeleton-box" />
          </div>
          <div>
            <div className="w-full h-56 mb-6 rounded shadow-lg skeleton-box md:h-64 xl:h-80" />
            <div className="w-full h-8 mb-4 rounded shadow skeleton-box" />
            <div className="w-full h-20 mb-2 rounded shadow skeleton-box" />
          </div>
        </div>
      ) : (
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {posts.slice(0, 3).map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link
          to="/magazines"
          aria-label="show more magazines"
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Posts;
