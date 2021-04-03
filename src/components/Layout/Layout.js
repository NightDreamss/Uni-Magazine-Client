import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import AdminPanel from "./AdminSidePanel";

const GuestLayout = ({ children, user, setUser, admin, setPost }) => {
  return (
    <section className="w-full">
      <Nav user={user} setUser={setUser} admin={admin} setPost={setPost} />
      {admin ? (
        <>
          <AdminPanel children={children} />
        </>
      ) : (
        <>
          {children}
          <Footer />
        </>
      )}
    </section>
  );
};

export default GuestLayout;
