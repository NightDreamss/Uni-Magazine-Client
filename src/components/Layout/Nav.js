import { CgMenuRight } from "react-icons/cg";
import React, { useState, useEffect, useCallback } from "react";
import { GrClose } from "react-icons/gr";
import { IoLogoYen } from "react-icons/io";
import { useDispatch } from "react-redux";
import profileImage from "../../images/profile.png";
import { useHistory, useLocation } from "react-router-dom";
import * as actionType from "../../constants/actionTypes";
import NavLink from "../Links";
import decode from "jwt-decode";

export const Nav = ({ user, setUser, admin, setPost }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    history.push("/auth");
  }, [dispatch, history, setUser]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [logout, user?.token, setUser, location]);

  return (
    <section className="w-full px-4 py-4 mx-auto md:px-24 lg:px-8 fixed top-0 bg-white z-50 shadow-md">
      <header className="container relative flex items-center justify-between mx-auto h-12">
        <nav className="flex items-center">
          <ul className="inline-flex items-center mr-8">
            <IoLogoYen className=" text-blue-accent-400 lg:text-3xl text-lg" />
            <NavLink
              to={
                user?.result?.account === "1"
                  ? "/"
                  : user?.result?.account === "2"
                  ? "/admin"
                  : "/"
              }
              label="Uni Magazine"
              title="Uni Magazine"
              logo
            />
          </ul>
          {user && (
            <div className="flex lg:hidden">
              <img
                className="object-cover w-8 h-8 mr-4 my-auto rounded-full shadow"
                src={profileImage}
                alt={user.result.name}
              />
              <div className="flex flex-col justify-center mr-8">
                <p className="font-bold">{user.result.name}</p>
              </div>
            </div>
          )}

          <ul className="items-center hidden space-x-8 lg:flex">
            <NavLink
              to="/magazines"
              label="Magazines"
              title="Magazines"
              large
            />
            {user && (
              <NavLink
                to="/users"
                label={admin ? "Users" : "Students"}
                title={admin ? "Users" : "Students"}
                large
              />
            )}
          </ul>
        </nav>
        <ul className="items-center hidden space-x-8 lg:flex">
          {user ? (
            <div className="flex">
              <img
                className="object-cover w-8 h-8 mr-4 my-auto rounded-full bg-white shadow"
                src={profileImage}
                alt={user.result.name}
              />
              <div className="flex flex-col justify-center mr-8">
                <p className="font-bold">{user.result.name}</p>
              </div>
              <NavLink
                to="/auth"
                aria-label="Logout"
                title="Logout"
                logLarge
                onClick={() => {
                  logout();
                  setPost(0);
                }}
              >
                Logout
              </NavLink>
            </div>
          ) : (
            location.pathname !== "/auth" && (
              <NavLink to="/auth" aria-label="Login" title="Login" logLarge>
                Login
              </NavLink>
            )
          )}
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
              <nav className="p-5 bg-gradient-to-t to-green-100 from-white rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <ul className="inline-flex items-center mr-8">
                    <IoLogoYen className=" text-deep-purple-400 text-3xl" />
                    <NavLink
                      to="/"
                      label="Uni Magazine"
                      title="Uni Magazine"
                      onClick={() => setIsMenuOpen(false)}
                      logo
                    />
                  </ul>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GrClose />
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="space-y-4 text-center">
                    <NavLink
                      to="/magazines"
                      label="Magazines"
                      title="Magazines"
                      mini
                      onClick={() => setIsMenuOpen(false)}
                    />
                    {user && (
                      <NavLink
                        to="/users"
                        label="Students"
                        title="Students"
                        mini
                        onClick={() => setIsMenuOpen(false)}
                      />
                    )}
                    {admin && (
                      <>
                        <NavLink
                          to="/manageMagazines"
                          label="Manage Magazines"
                          title="Manage Magazines"
                          mini
                          onClick={() => setIsMenuOpen(false)}
                        />
                        <NavLink
                          to="/manageUsers"
                          label="Manage Users"
                          title="Manage Users"
                          mini
                          onClick={() => setIsMenuOpen(false)}
                        />
                      </>
                    )}

                    {user ? (
                      <div className="lg:flex">
                        <div className="lg:flex hidden">
                          <img
                            className="object-cover w-8 h-8 mr-4 my-auto rounded-full shadow"
                            src={user.result.imageUrl || profileImage}
                            alt={user.result.name}
                          />
                          <div className="flex flex-col justify-center mr-8">
                            <p className="font-bold">{user.result.name}</p>
                          </div>
                        </div>
                        <NavLink
                          to="/auth"
                          aria-label="Logout"
                          title="Logout"
                          logLarge
                          onClick={logout}
                        >
                          Logot
                        </NavLink>
                      </div>
                    ) : (
                      location.pathname !== "/auth" && (
                        <NavLink
                          to="/auth"
                          aria-label="Login"
                          title="Login"
                          logLarge
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Login
                        </NavLink>
                      )
                    )}
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
