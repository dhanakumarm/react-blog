import { Switch } from "react-router-dom";
import AppRoute from "../components/AppRoute";

import DashboardLayout from "../pages/Layout/DashboardLayout";
import MainLayout from "../pages/Layout/MainLayout";


import { HomeContainer } from "../pages/Home/HomeContainer";
import About from "../pages/about.js";
import Users from "../pages/users.js";
import Login from "../pages/login.js";
import Post from "../pages/post";
import Contact from "../pages/contact";
import NotFound from "./NotFound";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <AppRoute
          exact
          path="/"
          component={HomeContainer}
          layout={DashboardLayout}
        />

        <AppRoute exact path="/about" component={About} layout={DashboardLayout} />

        <AppRoute exact path="/post" component={Post} layout={DashboardLayout} />

        <AppRoute
          exact
          path="/users"
          component={Contact}
          layout={DashboardLayout}
        />

        <AppRoute exact path="/login" component={Login} layout={MainLayout} />

        <AppRoute path="*" component={NotFound} layout={MainLayout} />
      </Switch>
    </div>
  );
};
