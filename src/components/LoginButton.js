import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="inline-flex items-center justify-center w-full h-12 px-6 py-2 font-medium tracking-wide text-black transition duration-200 rounded hover:shadow-md hover:bg-gray-100 focus:outline-none hover:text-deep-purple-accent-400"
      aria-label="Login"
      title="Login"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
