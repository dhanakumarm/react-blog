import { Switch } from "react-router-dom";
import AppRoute from "../components/AppRoute";

import DashboardLayout from "../pages/Layout/DashboardLayout";
import MainLayout from "../pages/Layout/MainLayout";

import NotFound from "../navigation/NotFound";
import HomeContainer from "../pages/Home/HomeContainer";
import AboutContainer from "../pages/About/AboutContainer";
import ContactContainer from "../pages/Contact/ContactContainer";
import LoginContainer from "../pages/Login/LoginContainer";

import CommentContainer from "../pages/Comments/CommentContainer";
import PostCreate from "../pages/Post/PostCreate";
import PostList from "../pages/Post/PostList";
import PostView from "../pages/Post/PostView";

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
        <AppRoute
          exact
          path="/about"
          component={AboutContainer}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/contact"
          component={ContactContainer}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/login"
          component={LoginContainer}
          layout={MainLayout}
        />

        <AppRoute
          exact
          path="/createpost"
          component={PostCreate}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/managepost"
          component={PostList}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/managecomment"
          component={CommentContainer}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/post"
          component={PostView}
          layout={DashboardLayout}
        />

        <AppRoute path="*" component={NotFound} layout={MainLayout} />
      </Switch>
    </div>
  );
};
