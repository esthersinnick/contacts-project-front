import React, { useState } from "react";
import authService from "../services/auth-service";

export const AuthContext = React.createContext();

const AuthProvider = props => {
  const [authState, setAuthState] = useState({
    firstTime: true,
    user: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    message: ""
  });

  const login = async user => {
    try {
      const userData = await authService.login(user);
      await localStorage.setItem("userId", userData.user._id);
      await localStorage.setItem("token", userData.token);
      setAuthState({
        ...authState,
        firstTime: false,
        user: userData.user._id,
        token: userData.token
      });
    } catch (err) {
      setAuthState({
        ...authState,
        message: err.response.data
      });
    }
  };

  const validateToken = async () => {
    if (authState.token) {
      const response = await authService.renewToken(authState.token);
      if (response === "expired") {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setAuthState({
          ...authState,
          firstTime: false,
          user: null,
          token: null
        });
      } else {
        await localStorage.setItem("token", response.token);
        setAuthState({
          ...authState,
          firstTime: false,
          user: response.user._id,
          token: response.token
        });
      }
    }
  };

  const { user, token, firstTime, message } = authState;
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        firstTime,
        message,
        login,
        validateToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
