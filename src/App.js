import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Link,
} from "react-router-dom";
import { APP, AUTH, HOME } from "./project/utils/routes/constant";

//Importing Routes Using Lazy and Suspense Methods

//Application Pages
const APP_HOME = lazy(() => import("./project/app/index"));
const AUTH_ROUTE = lazy(() => import("./project/site/auth/auth"));

//Site Pages
const SITE_HOME = lazy(() => import("./project/site/index"));






//Application Code
function App() {
  const history = useHistory()
  return (
    <Router>
      <div className="App">
        <h2>Application Home</h2>
        <div>
          <Link to={HOME}>Click to go to Home</Link> <br />
          <Link to={APP}>Click to go to APP</Link> <br />
          <Link to={AUTH}>Click to got to AUTH</Link>
        </div>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path={HOME} component={SITE_HOME} />
          <Route path={APP} component={APP_HOME} />
          <Route path={AUTH} component={AUTH_ROUTE} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
