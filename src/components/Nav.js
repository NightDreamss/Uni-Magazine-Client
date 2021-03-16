import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import React, { useState } from "react";
import LoginButton from "./LoginButton";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="container px-4 py-5 mx-auto md:px-24 lg:px-8 ">
      <header className="relative flex items-center justify-between mx-auto">
        <nav className="flex items-center">
          <Link
            to="/"
            aria-label="Uni Magazine"
            title="Uni Magazine"
            className="inline-flex items-center mr-8"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Uni Magazine
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/magazines"
                aria-label="Magazines"
                title="Magazines"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Magazines
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                aria-label="Students"
                title="Students"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                aria-label="Reports"
                title="Reports"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <LoginButton />
          </li>
          <li>
            <Link
              to="/sign_up"
              aria-label="Sign up"
              title="Sign up"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none"
            >
              Sign up
            </Link>
          </li>
        </ul>
        <div className="z-50 lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <CgMenuRight className="text-2xl hover:text-deep-purple-700" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <nav className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Uni Magazine
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="space-y-4 text-center">
                    <li>
                      <Link
                        to="/magazines"
                        aria-label="Magazines"
                        title="Magazines"
                        className="inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Magazines
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/students"
                        aria-label="Students"
                        title="Students"
                        className="inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Students
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reports"
                        aria-label="Reports"
                        title="Reports"
                        className="inline-flex items-center justify-center w-full py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Reports
                      </Link>
                    </li>
                    <li>
                      <LoginButton />
                    </li>
                    <li>
                      <Link
                        to="/sign_up"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Nav;
