import { Link as LinkTo, Element } from "react-scroll";
import Posts from "../../components/Posts/Posts";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import LottieControl from "../../components/Lottie";

export const HomePage = ({ user, posts, setPost, guest }) => {
  return (
    <article className="px-4 mx-auto antialiased md:px-24 lg:px-8 mt-20 bg-gradient-to-t to-green-100 from-white">
      <section className="mx-auto lg:flex lg:justify-between container">
        <div className="lg:w-1/2 lg:py-60 py-20">
          <h1 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-24 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b039bae0-fdd5-4311-b198-8557b064fce0"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            <span className="relative">Welcome to Uni Magazine</span>
          </h1>
          <p className="text-base text-gray-700 md:text-lg">
            This web application is a simple modified recreation of an academic
            project using the MERN Stack. The original which was built using Vue
            and Firebase that was design based on the academic requirements can
            be seen by clicking on the previous version button.
          </p>
          <div className="flex">
            <LinkTo
              aria-label="Scroll Down"
              smooth={true}
              duration={500}
              spy={true}
              to="recentMagazine"
              className="flex justify-center text-sm lg:text-base mt-8 py-2 px-4 lg:px-6 font-semibold bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-gray-100 rounded cursor-pointer shadow hover:shadow-none mr-8"
            >
              View Recent Magazines
            </LinkTo>
            <a
              href="https://ewad-7d098.firebaseapp.com/Login"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center mt-8 text-sm lg:text-base py-2 px-4 lg:px-6 font-semibold bg-gray-50 hover:bg-white text-gray-800 rounded cursor-pointer shadow hover:shadow-none"
            >
              Previous Version
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <LottieControl home height={600} width={500} />
        </div>
      </section>

      <Element name="recentMagazine">
        <section>
          <Posts
            title="Recent Published Magazines"
            recent
            user={user}
            posts={posts}
            setPost={setPost}
            guest={guest}
          />
          <div className="text-center">
            <Link
              to="/magazines"
              aria-label="show more magazines"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-accent-400 hover:text-blue-accent-700"
            >
              See More Magazines
              <BiRightArrowAlt className="my-auto ml-2" />
            </Link>
          </div>
        </section>
      </Element>
    </article>
  );
};
export default HomePage;
