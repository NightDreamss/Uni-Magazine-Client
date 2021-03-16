import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={post.image}
        title={post.title}
        alt={post.title}
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {post.title}
      </p>
      <p className="text-gray-700">{post.desc}</p>
      <button onClick={() => {}}>Like {post.Count}</button>
    </div>
  );
};

export default Post;
