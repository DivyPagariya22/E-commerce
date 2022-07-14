import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const RequireAuth = ({ children, redirectTo }) => {
  let isAuth = isAuthenticated();
  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
