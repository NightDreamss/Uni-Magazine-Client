//Global
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts";
import { getUsers } from "./actions/user";
import { getClosureDate } from "./actions/closureDate";

// Core Pages
import Layout from "./components/Layout/Layout";
import SignIn from "./pages/studentPages/Auth";

// Student and Guest Pages
import HomePage from "./pages/studentPages/Home";
import Magazine from "./pages/studentPages/Magazine";
import Students from "./pages/studentPages/Students";
import PostView from "./pages/studentPages/PostView";
import CreateMagazine from "./pages/studentPages/CreateMagazine";

//Admin Pages
import AdminHome from "./pages/AdminPages/AdminHome";
import ManageStudents from "./pages/AdminPages/ManageUsers";
import ManageMagazines from "./pages/AdminPages/ManageMagazines";

export const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const student = user?.result?.account === "1";
  const admin = user?.result?.account === "2";
  const guest = !user || student;
  const createMagazine = student;
  const [state, setState] = useState();
  const [post, setPost] = useState(0);
  const [closure, setClosure] = useState();

  const posts = useSelector((state) => state.posts);
  const registeredUsers = useSelector((state) => state.students);
  const closureSettings = useSelector((state) => state.closureDate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [post, dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [state, dispatch]);

  useEffect(() => {
    dispatch(getClosureDate());
  }, [closure, setClosure, dispatch]);

  function AdminRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return admin === true ? children : <Redirect to="/auth" />;
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Switch>
        <Layout user={user} setUser={setUser} admin={admin} setPost={setPost}>
          <Route
            exact
            path="/"
            render={(props) => {
              return !user?.result || student === true ? (
                <HomePage
                  {...props}
                  user={user}
                  posts={posts}
                  setPost={setPost}
                  id={post}
                  guest={guest}
                />
              ) : (
                <Redirect to="/auth" />
              );
            }}
          />
          <Route
            path="/magazines"
            render={(props) => (
              <Magazine
                {...props}
                user={user}
                student={student}
                posts={posts}
                admin={admin}
                guest={guest}
                id={post}
                setPost={setPost}
                closureSettings={closureSettings}
                createMagazine={createMagazine}
              />
            )}
          />
          <Route
            path="/createMagazine"
            render={(props) => (
              <CreateMagazine
                {...props}
                user={user}
                student={student}
                posts={posts}
                id={post}
                setPost={setPost}
                closureSettings={closureSettings}
              />
            )}
          />
          <Route
            path="/magazine/:id"
            render={(props) => (
              <PostView {...props} user={user} posts={posts} admin={admin} />
            )}
          />
          <Route
            path="/auth"
            render={(props) => {
              return !user ? (
                <SignIn {...props} />
              ) : admin ? (
                <Redirect to="/admin" />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          <Route
            path="/users"
            render={(props) => (
              <Students
                {...props}
                registeredUsers={registeredUsers}
                admin={admin}
                setState={setState}
              />
            )}
          />
          <AdminRoute path="/admin">
            <AdminHome posts={posts} registeredUsers={registeredUsers} />
          </AdminRoute>
          <AdminRoute path="/manageUsers">
            <ManageStudents registeredUsers={registeredUsers} user={user} />
          </AdminRoute>
          <AdminRoute path="/manageMagazines">
            <ManageMagazines
              posts={posts}
              user={user}
              closureSettings={closureSettings}
            />
          </AdminRoute>
        </Layout>
      </Switch>
    </React.Fragment>
  );
};

export default App;
