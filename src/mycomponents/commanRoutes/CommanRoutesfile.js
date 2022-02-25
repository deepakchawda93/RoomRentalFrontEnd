import React from "react";
import { Route, Switch, } from "react-router-dom";
import About from "../About/About";
import Contact from "../contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SearchPage from "../SearchPage/SearchPage";
import Signup from "../signup/Signup";
import UserAccount from "../userPages/UserAccount";
import userAccount from "../userPages/UserAccount";
import UserWishlist from "../userPages/UserWishlist";
const CommanRoutesfile = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
    
        <Route exact path="/Contact" component={Contact} />

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/userAccount">
          <UserAccount />
        </Route>
        <Route exact path="/userWishlist">
          <UserWishlist />
        </Route>
        <Route exact path="/Search">
          <SearchPage/>
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default CommanRoutesfile;
