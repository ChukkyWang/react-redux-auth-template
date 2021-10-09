import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppContext } from "./App";
import { APP, AUTH, HOME, LOGIN } from "./project/utils/routes/constant";
import { ProtectedRoute } from "./project/utils/routes/protectedRoute";

//Importing Routes Using Lazy and Suspense Methods

//Application Pages
const APP_HOME = lazy(() => import("./project/app/index"));
const AUTH_ROUTE = lazy(() => import("./project/site/auth/auth"));
const LOGIN_ROUTE = lazy(() => import("./project/site/auth/login"));

//Site Pages
const SITE_HOME = lazy(() => import("./project/site/index"));

//Application Code
function MainApp() {

  //Defining the token (If Any)
  const context = useContext(AppContext)
  const [tokenValue] = context
  let token = tokenValue

  return (
    <Router>
      <div>
        <h2>Application Home</h2>
        <nav>
          <Link to={HOME}>Click to go to HOME</Link> <br />
          <Link to={APP}>Click to go to APP</Link> <br />
          <Link to={AUTH}>Click to go to AUTH</Link><br/>
          <Link to={LOGIN}>Click to go to LOGIN</Link>
        </nav>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path={HOME} component={SITE_HOME} />
          <Route path={APP} component={APP_HOME} />
          <ProtectedRoute token={token} path={AUTH} component={AUTH_ROUTE} />
          <Route path={LOGIN} component={LOGIN_ROUTE} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default MainApp;
