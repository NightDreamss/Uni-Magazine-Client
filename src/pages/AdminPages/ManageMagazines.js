import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePost } from "../../actions/posts";
import Skeleton from "../../components/Skeleton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  createClosureDate,
  updateClosureDate,
  deleteClosureDate,
} from "../../actions/closureDate";

const ManageMagazines = ({ posts, user, closureSettings }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState();
  useEffect(() => {
    if (posts) setData(posts);
  }, [data, posts]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (closureSettings.length) {
      dispatch(
        updateClosureDate(closureSettings[0]._id, {
          start: startDate,
          end: endDate,
          name: user?.result?.name,
        })
      );
    } else {
      dispatch(
        createClosureDate({
          start: startDate,
          end: endDate,
          name: user?.result?.name,
        })
      );
    }
  };

  return (
    <section className="min-h-screen mt-20 px-4 lg:px-8 md:px-24 bg-gradient-to-t to-green-100 from-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <Title title="Closure Date" />
          <p className="mt-4">
            The Closure Date prevents students from posting new magazines to the
            web application!
          </p>
          <div className="lg:flex">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="pr-8 py-8 lg:mr-6"
            >
              <div className="mb-6">
                <h1 className="my-auto font-semibold text-lg">Start Date</h1>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="rounded px-2 border-gray-100 border-2"
                />
              </div>

              <div className="mb-6">
                <h1 className="my-auto font-semibold text-lg">End Date</h1>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="rounded px-2 border-gray-100 border-2"
                />
              </div>

              <button
                type="submit"
                className="lg:text-base block py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none"
              >
                Set Closure Date
              </button>
            </form>
            <div>
              {closureSettings.map((closure) => (
                <div key={closure._id}>
                  <div className="flex flex-col justify-between ">
                    <div className="inline-flex">
                      <p className="text-gray-800">Created: &nbsp;</p>
                      <p className="text-deep-purple-accent-400 font-semibold">
                        {moment(closure.dateCreated).fromNow()}
                      </p>
                    </div>
                    <div className="inline-flex">
                      <p className="text-gray-800">
                        Closure Start Date: &nbsp;
                      </p>
                      <p className="text-deep-purple-accent-400 font-semibold">
                        {moment(closure.start).format("DD-MMMM-YYYY")}
                      </p>
                    </div>
                    <div className="inline-flex">
                      <p className="text-gray-800">Closure End Date: &nbsp;</p>
                      <p className="text-deep-purple-accent-400 font-semibold">
                        {moment(closure.end).format("DD-MMMM-YYYY")}
                      </p>
                    </div>
                    <div className="inline-flex">
                      <p className="text-gray-800">
                        Total Closure Days: &nbsp;
                      </p>
                      <p className=" text-deep-purple-accent-400 font-semibold">
                        {moment(closure.end).fromNow(closure.start)}
                      </p>
                    </div>
                  </div>

                  <button
                    type="reset"
                    onClick={() => {
                      dispatch(deleteClosureDate(closure._id));
                    }}
                    className="my-6 lg:text-base py-2 px-4 lg:px-6 font-semibold bg-gray-50 hover:bg-gray-100 rounded cursor-pointer shadow hover:shadow-none"
                  >
                    Remove Closure Date
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Title title="Manage Magazines" />
          <p className="mt-4">
            Here you can publish or unpublish magazines to be shown to the
            public.
          </p>
          <div className="py-8 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-xs lg:text-sm border-b border-gray-200 text-gray-800  text-left  uppercase font-normal"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-xs lg:text-sm uppercase font-normal"
                    >
                      Student
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-xs lg:text-sm uppercase font-normal"
                    >
                      Created
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-xs lg:text-sm uppercase font-normal"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-xs lg:text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {!posts.length ? (
                    <>
                      <Skeleton manageSkeleton />
                      <Skeleton manageSkeleton />
                      <Skeleton manageSkeleton />
                    </>
                  ) : (
                    posts.map((post) => (
                      <tr key={post._id}>
                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm">
                          <div className="flex items-center pr-4">
                            <div className="flex-shrink-0">
                              <div className="block relative cursor-pointer">
                                <img
                                  src={post.image}
                                  title={post.title}
                                  alt={post.title}
                                  className="mx-auto object-cover rounded-full h-10 w-10"
                                  onClick={() => {
                                    history.push(`/magazine/${post._id}`);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-nowrap overflow-ellipsis">
                                {post.title}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap overflow-ellipsis">
                            {post.name}
                          </p>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap overflow-ellipsis">
                            {moment(post.dateCreated).fromNow()}
                          </p>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs text-center">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight whitespace-nowrap overflow-ellipsis">
                            <span
                              aria-hidden="true"
                              className={`absolute inset-0 opacity-30 rounded-full ${
                                post.status === false
                                  ? "bg-gray-500"
                                  : "bg-green-500"
                              }`}
                            ></span>
                            <span className="relative uppercase">
                              {post.status === false
                                ? "unpublished"
                                : "published"}
                            </span>
                          </span>
                        </td>

                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm">
                          <button
                            className="lg:text-base py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none float-right"
                            onClick={() => {
                              dispatch(
                                updatePost(
                                  post._id,
                                  {
                                    status:
                                      post.status === false ? true : false,
                                  },
                                  "publish"
                                )
                              );
                            }}
                          >
                            {post.status === false ? "Publish" : "Unpublish"}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageMagazines;
