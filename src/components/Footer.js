export const Footer = () => {
  return (
    <div className="container px-4 pt-16 mx-auto md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <div className="sm:col-span-2">
          <h1
            aria-label="Go home"
            title="Uni Magazine"
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
          </h1>
        </div>
        <p className="text-sm text-gray-600">
          © Copyright 2021 Brandon Litren. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
