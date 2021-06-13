import React, { Fragment,useEffect,  } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useAuth from "./hooks/useAuth";
import {AuthContext} from "./context/Authentication";
import Login from "./components/molecules/Login";
import Signup from "./components/molecules/Signup";
import List from './components/molecules/List'


const Routes:React.FC = () => {
    const { user, logout, login, token } = useAuth();


    let routes;
    if (token) {
        routes = (
            <Fragment>
                <Route path="/" component={List} />
                <Redirect to={"/"} />
            </Fragment>
        );
    } else {
        routes = (
            <Fragment>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Redirect to={"/login"} />
            </Fragment>
        );
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                user: user,
                login: login,
                logout: logout,
            }}
        >

            <Switch>{routes}</Switch>
        </AuthContext.Provider>
    );
};
export default Routes;
