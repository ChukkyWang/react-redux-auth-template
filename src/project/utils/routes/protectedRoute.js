import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN } from "./constant";

function ProtectedRoute ({
    component: Component,
    token: Token,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!Token) {
                    return <Redirect to={{ pathname: LOGIN, state: { from: props.location } }} />;
                } else {
                    return <Component/>;
                }
            }} />
        );
}

function RouteHelper (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export {ProtectedRoute, RouteHelper};
