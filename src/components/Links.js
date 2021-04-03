import React from "react";
import { Link } from "react-router-dom";
import { BiEdit, BiUserPin } from "react-icons/bi";

const Links = ({
  to,
  label,
  title,
  mini,
  large,
  logLarge,
  onClick,
  logo,
  admin,
  posts,
  users,
}) => {
  return (
    <li className={admin && "mb-6 inline-flex"}>
      {posts && <BiEdit className="mr-2 text-xl my-auto" />}
      {users && <BiUserPin className="mr-2 text-xl my-auto" />}
      <Link
        to={to}
        aria-label={label}
        title={title}
        onClick={onClick}
        className={
          mini
            ? "inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-blue-50 focus:outline-none hover:text-blue-accent-400"
            : large
            ? "font-medium tracking-wide text-black  transition-colors duration-200 hover:text-blue-accent-400 focus:outline-none"
            : logLarge
            ? "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
            : logo &&
              "ml-2 lg:text-xl text-base font-bold tracking-wide text-black  hover:text-blue-accent-400 uppercase focus:outline-none"
        }
      >
        {title}
      </Link>
    </li>
  );
};

export default Links;
