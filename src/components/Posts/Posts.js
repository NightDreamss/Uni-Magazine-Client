import React from "react";
import Post from "./Post/Post";
import Title from "../Title";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import Skeleton from "../Skeleton";
import { Link } from "react-router-dom";
import moment from "moment";

const Posts = ({
  recent,
  title,
  user,
  posts,
  admin,
  student,
  setPost,
  guest,
  closure,
  closureSettings,
  createMagazine,
}) => {
  let userPosts = posts.reduce((filtered, post) => {
    if (user?.result?._id === post.creator) {
      let userPosts = { post };
      filtered.push(userPosts);
    }
    return filtered;
  }, []);

  let statusPosts = posts.reduce((filtered, post) => {
    if (post.status === true) {
      let showPosts = { post };
      filtered.push(showPosts);
    }
    return filtered;
  }, []);

  return (
    <section className="mx-auto py-12 ">
      <div className="container mx-auto flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 justify-between w-full">
          <div className="flex">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mr-3">
              <BsLayoutTextSidebarReverse className=" text-blue-accent-400 text-2xl" />
            </div>
            <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
              <Title title={title} />
              <div className="h-1 ml-auto duration-300 origin-left transform bg-blue-accent-400 scale-x-30" />
            </h2>
          </div>

          {closure === true ? (
            <div className="py-6">
              <Title title="The Posting Period is closed at this time!" />
              <p className="py-4">
                The administrator has restricted posted from{" "}
                {moment(closureSettings[0].start).format("DD-MMMM-YYYY")} to{" "}
                {moment(closureSettings[0].end).format("DD-MMMM-YYYY")}
              </p>
            </div>
          ) : (
            createMagazine && (
              <div>
                <Link
                  to="/createMagazine"
                  aria-label="Create Magazine"
                  className="text-sm lg:text-base mt-8 py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none mr-8"
                >
                  Create A Magazine
                </Link>
              </div>
            )
          )}
        </div>
      </div>
      <div className="container mx-auto">
        {!posts.length ? (
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            <Skeleton postSkeleton />
            <Skeleton postSkeleton />
            <Skeleton postSkeleton />
          </div>
        ) : recent === true ? (
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {statusPosts.length ? (
              <>
                {statusPosts
                  .slice()
                  .reverse()
                  .slice(0, 3)
                  .map((post) => (
                    <div key={post.post._id}>
                      <Post post={post.post} user={user} setPost={setPost} />
                    </div>
                  ))}
              </>
            ) : (
              <h1 className="text-xl font-semibold">
                No post has been published as yet!
              </h1>
            )}
          </div>
        ) : (
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {student ? (
              <>
                {userPosts.length ? (
                  userPosts
                    .slice()
                    .reverse()
                    .map((post) => (
                      <div key={post.post._id}>
                        <Post post={post.post} user={user} setPost={setPost} />
                      </div>
                    ))
                ) : (
                  <h1 className="text-xl font-semibold">
                    You have not created any post as yet!
                  </h1>
                )}
              </>
            ) : guest ? (
              <>
                {statusPosts.length ? (
                  statusPosts
                    .slice()
                    .reverse()
                    .map((post) => (
                      <div key={post.post._id}>
                        <Post post={post.post} user={user} setPost={setPost} />
                      </div>
                    ))
                ) : (
                  <h1 className="text-xl font-semibold">
                    No post has been published as yet!
                  </h1>
                )}
              </>
            ) : admin ? (
              <>
                {posts.length ? (
                  posts
                    .slice()
                    .reverse()
                    .map((post) => (
                      <div key={post._id}>
                        <Post
                          post={post}
                          user={user}
                          admin={admin}
                          setPost={setPost}
                        />
                      </div>
                    ))
                ) : (
                  <h1 className="text-xl font-semibold">
                    No post has been created as yet!
                  </h1>
                )}
              </>
            ) : (
              <h1 className="text-xl font-semibold">
                No post has been published as yet!
              </h1>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;
