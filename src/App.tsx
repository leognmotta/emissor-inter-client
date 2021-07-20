import "./App.less";
import React, { Suspense, lazy } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import history from "./history";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const Loading: React.FC = () => {
  return (
    <h1>Loading...</h1>
  )
}

const App: React.FC = () => {
  return (
    <Router history={history} >
      <AuthProvider>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/configuracoes" component={() => <h1>configs</h1>} />
            </Switch>
          </Suspense>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
