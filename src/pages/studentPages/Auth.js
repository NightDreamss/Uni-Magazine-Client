import React, { useState } from "react";
import loginImg from "../../images/login.jpg";
import { useDispatch } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import { useHistory } from "react-router-dom";
import INPUT from "../../components/Input";
import { signin, signup } from "../../actions/auth";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchAuth = () => {
    setIsSignup((prevent) => !prevent);
  };

  const onSubmit = (data) => {
    if (isSignup) {
      dispatch(signup(data, history));
    } else {
      dispatch(signin(data, history));
    }
  };

  return (
    <section className="flex flex-wrap w-full mt-20 pt-24 bg-gradient-to-t to-green-100 from-white">
      <div className="mx-auto lg:flex lg:justify-between container">
        <div className="lg:flex lg:flex-col w-full lg:w-1/2 pr-12">
          <div className="flex flex-col justify-center px-8 pt-8 md:pt-0">
            <p className="text-3xl text-center">
              {!isSignup
                ? "Welcome Back to, Uni Magazine"
                : "Sign Up for Uni Magazine"}
            </p>

            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
              {isSignup && (
                <div>
                  <div className="flex flex-col pt-4">
                    <label
                      htmlFor="account"
                      className="font-semibold text-gray-800 "
                    >
                      Account
                    </label>
                    <div className="flex relative ">
                      <span className=" inline-flex rounded-l items-center px-3 bg-white text-gray-800 shadow-sm text-sm">
                        <VscAccount />
                      </span>
                      <select
                        name="account"
                        className="justify-between rounded-r inline-flex w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        ref={register({ required: true })}
                      >
                        <option value="1">Student</option>
                        <option value="2"> Administrator</option>
                      </select>
                    </div>
                  </div>
                  <INPUT
                    type="text"
                    name="name"
                    label="Name"
                    forwardRef={register({
                      required: true,
                      maxLength: 20,
                      minLength: 3,
                    })}
                    user
                    errors={errors.name}
                  />
                </div>
              )}
              <INPUT
                type="email"
                name="email"
                label="Email"
                forwardRef={register({
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                email
                errors={errors.email}
              />

              <INPUT
                type="password"
                name="password"
                label="Password"
                forwardRef={register({ required: true, min: 6, maxLength: 20 })}
                password
                errors={errors.password}
              />
              {isSignup && (
                <INPUT
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  forwardRef={register({
                    required: true,
                    min: 6,
                    maxLength: 20,
                  })}
                  confirmPass
                  errors={errors.confirmPassword}
                />
              )}
              <button
                type="submit"
                className="w-full px-4 mt-8 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded bg-blue-accent-400 shadow-md hover:bg-blue-accent-700 focus:outline-none focus:ring-2"
              >
                <span className="w-full">
                  {!isSignup ? "Login" : "Sign Up"}
                </span>
              </button>
            </form>
          </div>
          <div className="text-center pt-8">
            <button className="focus:outline-none" onClick={switchAuth}>
              {!isSignup ? (
                <p>
                  Don't have an account?
                  <br />
                  <span className="font-semibold text-blue-accent-400  underline focus:outline-none">
                    Register here
                  </span>
                </p>
              ) : (
                <p>
                  Have an Account?
                  <br />
                  <span className="font-semibold text-blue-accent-400 underline focus:outline-none">
                    Login here
                  </span>
                </p>
              )}
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 mx-auto w-1/2 shadow-2xl mt-12 lg:mt-0">
          <img
            className="hidden bg-cover w-full min-h-full md:block"
            src={loginImg}
            alt="login"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
