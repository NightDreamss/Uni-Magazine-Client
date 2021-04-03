import React, { useState, useEffect } from "react";
import Skeleton from "../../components/Skeleton";
import profileImage from "../../images/profile.png";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/user";
import Title from "../../components/Title";

const ManageStudents = ({ registeredUsers, user }) => {
  registeredUsers.sort((a, b) => a.account - b.account);
  const dispatch = useDispatch();

  const [users, setUser] = useState();
  useEffect(() => {
    if (registeredUsers) setUser(registeredUsers);
  }, [users, registeredUsers]);

  return (
    <section className="min-h-screen mt-20 px-4 lg:px-8 md:px-24 bg-gradient-to-t to-green-100 from-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <Title title="Manage Users" />
          <p className="mt-4">
            Here you can view all users and delete the accounts.
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
                      Account Type
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-xs lg:text-sm uppercase font-normal"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-xs lg:text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-xs lg:text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {!registeredUsers.length ? (
                    <>
                      <Skeleton manageSkeleton />
                      <Skeleton manageSkeleton />
                      <Skeleton manageSkeleton />
                    </>
                  ) : (
                    registeredUsers.reverse().map((users) => (
                      <tr key={users._id}>
                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm">
                          <div className="flex items-center pr-4">
                            <div className="flex-shrink-0">
                              <div className="block relative cursor-pointer">
                                <img
                                  src={profileImage}
                                  alt={users.name}
                                  className="mx-auto object-cover rounded-full h-10 w-10"
                                />
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-nowrap overflow-ellipsis">
                                {users.account === "1" ? "Student" : "Admin"}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap overflow-ellipsis">
                            {users.name}
                          </p>
                        </td>

                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap overflow-ellipsis">
                            {users.email}
                          </p>
                        </td>

                        <td className="px-6 py-4 border-b border-gray-200 bg-white text-xs lg:text-sm">
                          {users._id !== user?.result?._id && (
                            <button
                              className="lg:text-base py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none float-right"
                              onClick={() => {
                                dispatch(deleteUser(users._id));
                              }}
                            >
                              Delete
                            </button>
                          )}
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

export default ManageStudents;
