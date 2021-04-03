import React from "react";
import Footer from "./Footer";
import NavLink from "../Links";

const AdminSidePanel = ({ children }) => {
  return (
    <div className="grid grid-cols-12 mt-16 pt-4">
      <aside className="lg:col-span-4 bg-white h-screen pt-4 w-60 fixed z-50 hidden lg:block">
        <div className="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
          <ul>
            <NavLink
              to="/manageMagazines"
              label="Manage Magazines"
              title="Manage Magazines"
              admin
              large
              posts
            />
            <NavLink
              to="/manageUsers"
              label="Manage Users"
              title="Manage Users"
              admin
              large
              users
            />
          </ul>
        </div>
      </aside>
      <div className="col-span-4 absolute w-full pr-10 -mt-20">
        <div className="col-span-4 absolute w-full">
          <div className="bg-white lg:ml-60 min-h-screen">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidePanel;
