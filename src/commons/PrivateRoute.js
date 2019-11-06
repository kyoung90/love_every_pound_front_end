import React, { cloneElement, Children } from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <>
            {toast.error("Please login to have access to all of our features :)")}
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
