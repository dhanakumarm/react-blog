import { Switch } from "react-router-dom";
import AppRoute from "../components/AppRoute";

import DashboardLayout from "../pages/Layout/DashboardLayout";
import MainLayout from "../pages/Layout/MainLayout";


import { HomeContainer } from "../pages/Home/HomeContainer";
import About from "../pages/about.js";
import Users from "../pages/users.js";
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

        <AppRoute exact path="/about" component={About} layout={MainLayout} />

        <AppRoute
          exact
          path="/users"
          component={Users}
          layout={DashboardLayout}
        />

        <AppRoute exact path="/login" component={Users} layout={MainLayout} />

        <AppRoute path="*" component={NotFound} layout={MainLayout} />
      </Switch>
    </div>
  );
};
