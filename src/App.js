//Global
import React, { useEffect } from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import Magazine from "./pages/magazine";
import Reports from "./pages/reports";
import Students from "./pages/students";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { Route, Switch } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/magazines" component={Magazine} />
        <Route path="/reports" component={Reports} />
        <Route path="/students" component={Students} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
