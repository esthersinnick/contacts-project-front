import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const PrivateRoute = props => {
  const authContext = useContext(AuthContext);

  const { component: Component, ...rest } = props;
  return (
    <>
      {authContext.token ? (
        <Route render={props => <Component {...props} />} {...rest} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
