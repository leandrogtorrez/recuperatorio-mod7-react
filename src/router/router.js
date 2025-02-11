import { createBrowserRouter } from "react-router-dom";

import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";
import Dictionary from "../screens/Dictionary/Dictionary";

import App from "../App";

const basename =
  process.env.NODE_ENV === "production" ? "/recuperatorio-mod7-react" : "/";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/dictionary",
          element: <Dictionary />,
        },
      ],
    },
  ],
  {
    basename: basename,
  }
);

export default routes;
