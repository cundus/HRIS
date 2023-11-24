import React from "react";
import { RouteObject } from "react-router-dom";

const LoginPage = React.lazy(() => import("@/pages/Login"));

const routers: RouteObject[] = [
   {
      path: "/",
      element: <LoginPage />,
   },
];

export default routers;
