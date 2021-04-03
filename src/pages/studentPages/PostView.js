import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments";
import Title from "../../components/Title";
import moment from "moment";
import { Link } from "react-router-dom";

const PostView = ({ user, posts }) => {
  const { id } = useParams();

  let post = posts.reduce((filtered, post) => {
    if (id === post?._id) {
      let userPosts = { post };
      filtered.push(userPosts);
    }
    return filtered;
  }, []);
  return (
    <div className="px-4 mt-20 pt-24 mx-auto md:px-24 lg:px-8 bg-gradient-to-t to-green-100 from-white">
      <Link
        to="/magazines"
        aria-label="Create Magazine"
        className="text-sm lg:text-base mt-8 py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none mr-8"
      >
        Go Back To Magazines
      </Link>
      <div className="mx-auto lg:max-w-3xl">
        {post.map((post) => (
          <div key={post.post._id}>
            <div className="flex justify-between">
              <h2 className="capitalize font-semibold text-xl">
                {post.post.name}
              </h2>
              <p className="text-sm my-auto text-gray-500">
                {moment(post.post.dateCreated).fromNow()}
              </p>
            </div>
            <div className="md:mx-auto py-4">
              <Title title={post.post.title} />
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src={post.post.image}
                alt={post.post.title}
              />
            </div>
            <p className="text-base text-gray-700 md:text-lg py-4 capitalize text-left">
              {post.post.desc}
            </p>
          </div>
        ))}

        <Comments user={user} magazineId={id} />
      </div>
    </div>
  );
};

export default PostView;
