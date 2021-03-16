import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import Title from "../Title";

const From = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    image: "",
  });
  const dispatch = useDispatch();

  const reset = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(data));
  };
  return (
    <section className="relative text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto lg:flex-nowrap">
        <div className="relative flex items-end justify-start w-full overflow-hidden bg-gray-300 rounded-lg h-80 lg:h-auto lg:w-1/2 sm:mr-10">
          <img
            src={!data.image ? "https://via.placeholder.com/800" : data.image}
            alt={data.title}
            className="absolute w-full h-full bg-no-repeat bg-contain"
          />
          <div className="relative flex flex-wrap w-full py-6 m-12 bg-white rounded shadow-md">
            <div className="w-1/2 px-6">
              <h1 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                Title
              </h1>
              <p className="mt-1 break-words">{data.title}</p>
            </div>
            <div className="w-1/2 px-6">
              <h2 className="text-xs font-semibold tracking-widest text-gray-900">
                Description
              </h2>
              <p className="mt-1 break-words overflow-ellipsis">{data.desc}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-12 bg-white lg:w-1/2 md:py-8 md:mt-0">
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Title title="Creating Magazine" />
            <div className="relative mt-12 mb-4">
              <label
                htmlFor="title"
                className="text-sm leading-7 text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                onChange={(e) => setData({ ...data, desc: e.target.value })}
              ></textarea>
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="image"
                className="text-sm leading-7 text-gray-600"
              >
                Image
              </label>
              <div className="block mb-4">
                <FileBase
                  name="image"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setData({ ...data, image: base64 })}
                />
              </div>
            </div>
            <button
              className="px-6 py-2 text-lg text-white border-0 rounded bg-deep-purple-accent-400 focus:outline-none hover:bg-deep-purple-accent-700"
              type="submit"
            >
              Submit
            </button>
            <button
              className="px-6 py-2 ml-6 text-lg text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-700"
              onClick={reset}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default From;
