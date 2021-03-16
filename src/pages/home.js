import { Link as LinkTo, Element } from "react-scroll";
import Posts from "../components/Posts/Posts";

export const HomePage = () => {
  return (
    <article className="px-4 py-16 mx-auto antialiased md:px-24 lg:px-8 lg:py-20">
      <section className="min-h-screen mx-auto ">
        <div className="text-center">
          <div className="max-w-xl my-24 mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
              Join today and become a member of the Uni Magazine. Our members
              have the ability to contribute in order to provide an informative
              and insightful content for all.
            </p>
          </div>
          <LinkTo
            aria-label="Scroll Down"
            smooth={true}
            duration={500}
            spy={true}
            to="recentMagazine"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full cursor-pointer hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </LinkTo>
        </div>
      </section>

      <Element name="recentMagazine">
        <Posts />
      </Element>
    </article>
  );
};
export default HomePage;
