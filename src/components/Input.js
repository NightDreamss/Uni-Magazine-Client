import React from "react";
import {
  AiOutlineProfile,
  AiOutlineMail,
  AiOutlineUnlock,
  AiOutlineLock,
} from "react-icons/ai";

const input = ({
  type,
  id,
  name,
  label,
  onChange,
  user,
  email,
  password,
  confirmPass,
  forwardRef,
  errors,
}) => {
  return (
    <>
      <div className="flex flex-col pt-4">
        <label htmlFor={name} className="font-semibold text-gray-800 ">
          {label}
        </label>
        <div className="flex relative ">
          <span className=" inline-flex rounded-l items-center px-3 bg-white text-gray-800 shadow-sm ">
            {user ? (
              <AiOutlineProfile />
            ) : email ? (
              <AiOutlineMail />
            ) : password ? (
              <AiOutlineUnlock />
            ) : (
              confirmPass && <AiOutlineLock />
            )}
          </span>
          <input
            type={type}
            name={name}
            id={id}
            aria-label={label}
            className=" flex-1 rounded-r appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ref={forwardRef}
            onChange={onChange}
          />
        </div>
      </div>
      {errors && (
        <span className="text-red-500 text-xs">
          The{" "}
          {name === "name"
            ? "name must contain 3 - 20 characters"
            : name === "email"
            ? "email must be valid"
            : name === "password"
            ? "password must contain 6 - 20 characters"
            : name === "confirmPassword" &&
              "your confirm password must match your password"}
        </span>
      )}
    </>
  );
};

export default input;
