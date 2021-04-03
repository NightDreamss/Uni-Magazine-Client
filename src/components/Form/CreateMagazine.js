import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import Title from "../Title";
import { useForm } from "react-hook-form";

const From = ({ id, setPost, user }) => {
  const post = useSelector((state) =>
    id ? state.posts.find((p) => p._id === id) : null
  );

  const initialState = {
    title: "",
    desc: "",
    image: "",
  };

  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (post) setData(post);
  }, [post]);

  const onSubmit = () => {
    if (id) {
      dispatch(
        updatePost(id, { ...data, name: user?.result?.name }, "update")
      ).then(() => reset());
    } else {
      dispatch(
        createPost({ ...data, name: user?.result?.name, status: false })
      ).then(() => reset());
    }
  };

  const reset = () => {
    setPost(null);
    setData({ ...initialState });
  };

  if (!user?.result) {
    return (
      <div className="text-center my-12 mx-4">
        <Title title="Please Login as a student to post a magazine" />
        <p className="mt-4">
          Your login session has ended or you are no longer logged in.
        </p>
      </div>
    );
  }
  return (
    <section className="relative text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-24 lg:flex-nowrap">
        <div className="relative flex items-end justify-start w-full overflow-hidden bg-gray-300 rounded-lg h-80 lg:h-auto lg:w-1/2 lg:mr-10">
          <img
            src={!data.image ? "https://via.placeholder.com/800" : data.image}
            alt={data.title}
            className="absolute w-full h-full bg-no-repeat bg-contain"
          />
          <div className="relative flex flex-wrap w-4/5 mx-auto py-6 m-12 bg-white rounded shadow-md">
            <div className="w-1/2 px-6">
              <h1 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                Title
              </h1>
              <p className="mt-1 break-words overflow-ellipsis whitespace-nowrap overflow-hidden">
                {data.title}
              </p>
            </div>
            <div className="w-1/2 px-6">
              <h2 className="text-xs font-semibold tracking-widest text-gray-900">
                Description
              </h2>
              <p className="mt-1 break-words overflow-ellipsis whitespace-nowrap overflow-hidden">
                {data.desc}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-12 lg:pl-4 lg:w-1/2 md:mt-0">
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Title title={`${id ? "Edit" : "Create"} Magazine`} />
            <p className="mt-4">
              Here you can create magazine. A magazine has to be approved by an
              administrator to become public!
            </p>
            <div className="relative mt-6 mb-4">
              <label htmlFor="title" className="font-semibold text-gray-800">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out rounded outline-none focus:border-blue-accent-400 focus:ring-2 focus:ring-blue-accent-400"
                ref={register({ required: true })}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  A title is required!
                </span>
              )}
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="font-semibold text-gray-800">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-black transition-colors duration-200 ease-in-out rounded outline-none resize-none focus:border-blue-accent-400 focus:ring-2 focus:ring-blue-accent-400"
                ref={register({ required: true })}
                onChange={(e) => setData({ ...data, desc: e.target.value })}
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-xs">
                  A description is required!
                </span>
              )}
            </div>

            <div className="relative mb-6">
              <label htmlFor="image" className="font-semibold text-gray-800">
                Image
              </label>
              <div className="block mb-4">
                <FileBase
                  name="image"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setData({ ...data, image: base64 })}
                />
                {errors.image && (
                  <span className="text-red-500 text-xs block">
                    An image is required!
                  </span>
                )}
              </div>

              <input
                name="image"
                value={data.image}
                onChange={(e) => setData({ ...data, image: e.target.value })}
                className="hidden"
              />
            </div>
            <button
              className="px-6 py-2 text-lg text-white border-0 rounded bg-blue-accent-400 focus:outline-none hover:bg-blue-accent-700"
              type="submit"
            >
              Submit
            </button>
            <button
              className="px-6 py-2 ml-6 text-lg text-black bg-gray-50 border-0 rounded focus:outline-none hover:bg-gray-100"
              onClick={reset}
              type="reset"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default From;
