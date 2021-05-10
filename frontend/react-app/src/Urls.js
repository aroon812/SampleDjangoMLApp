import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home"

function PrivateRoute({ isAuthenticated, children, ...rest}) {
    return (
        <Route 
            {...rest}
            render={({location}) =>
            isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login/",
                        state: { from: location }
                    }}
                    />
            )
        }
        />
    );
}

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/login/"> <Login {...props} /> </Route>
                    <PrivateRoute exact path = "/" isAuthenticated={props.isAuthenticated}> <Home {...props} /> </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;