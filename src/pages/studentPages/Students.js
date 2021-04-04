import React, { useEffect } from "react";
import Title from "../../components/Title";
import profileImage from "../../images/profile.png";
import Skeleton from "../../components/Skeleton";
import LottieControl from "../../components/Lottie";

const Students = ({ registeredUsers, admin, setState }) => {
  let students = registeredUsers.reduce((filtered, student) => {
    if (student.account === "1") {
      let showPosts = { student };
      filtered.push(showPosts);
    }
    return filtered;
  }, []);

  registeredUsers.sort((a, b) => a.account - b.account);
  students.sort((a, b) => b.name - a.name);

  useEffect(() => {
    if (registeredUsers) setState(registeredUsers);
  }, [registeredUsers, setState]);

  return (
    <div className="px-4 mx-auto md:px-24 lg:px-8 mt-20 min-h-screen bg-gradient-to-t to-green-100 from-white">
      <LottieControl height={200} width={200} student />
      <div className="container mx-auto mb-10 sm:text-center relative">
        <Title
          title={admin ? "All Registered Users" : "All Registered Students"}
        />
        <p className="text-base text-gray-700 md:text-lg py-4">
          {admin
            ? "Amazing users just like you!"
            : "Amazing students just like you!"}
        </p>
      </div>
      {!registeredUsers.length ? (
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skeleton studentSkeleton />
          <Skeleton studentSkeleton />
          <Skeleton studentSkeleton />
          <Skeleton studentSkeleton />
        </div>
      ) : admin ? (
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {registeredUsers.map((student) => (
            <div className="flex flex-col items-center" key={student._id}>
              <img
                className="object-cover w-12 h-12 my-auto rounded-full shadow mb-2 bg-white"
                src={profileImage}
                alt={student.name}
              />
              <div className="flex flex-col items-center">
                <p className="capitalize text-lg font-bold">
                  {student.account === "1" ? "Student" : "Administrator"}
                </p>
                <p className="text-gray-900 capitalize">{student.name}</p>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {students.map((student) => (
            <div
              className="flex flex-col items-center"
              key={student.student._id}
            >
              <img
                className="object-cover w-12 h-12 my-auto rounded-full shadow mb-2 bg-white"
                src={profileImage}
                alt={student.student.name}
              />
              <div className="flex flex-col items-center">
                <p className="capitalize text-lg font-bold">Student</p>
                <p className="text-gray-900 capitalize">
                  {student.student.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students;
