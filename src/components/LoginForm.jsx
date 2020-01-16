import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    remember: false,
    error: ""
  });

  const authContext = useContext(AuthContext);

  const inputOnChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const checkboxOnChange = event => {
    const { name, checked } = event.target;
    setFormState({
      ...formState,
      [name]: checked
    });
  };

  const handleSubmit = async () => {
    const { email, password, remember } = formState;
    await authContext.login({ email, password, remember });
  };

  const validateForm = event => {
    event.preventDefault();
    const { email, password } = formState;
    if (!email || !password) {
      return setFormState({
        ...formState,
        error: "All fields are required"
      });
    }
    handleSubmit();
  };

  const { email, password, remember, error } = formState;
  const { message } = authContext;
  return (
    <form
      onSubmit={validateForm}
      className="flex flex-col justify-center items-center w-3/5"
    >
      <input
        placeholder="email"
        name="email"
        value={email}
        type="email"
        onChange={inputOnChange}
        className="input border-primary-500 w-full m-3 rounded"
      />
      <input
        placeholder="password"
        name="password"
        value={password}
        type="password"
        onChange={inputOnChange}
        className="input border-primary-500 w-full m-3 rounded"
      />
      <div>
        <input
          name="remember"
          checked={remember}
          type="checkbox"
          className="m-3"
          onChange={checkboxOnChange}
        />
        Remember me
      </div>
      <button className="btn m-3 min-w-3/4" type="submit">
        Login
      </button>
      {message && (
        <p className="input border-primary-500 m-3 p-2 font-light text-sm text-primary-500 rounded">
          {message}
        </p>
      )}
      {!message && error && (
        <p className="input border-primary-500 m-3 p-2 font-light text-sm text-primary-500 rounded">
          {error}
        </p>
      )}
    </form>
  );
};
export default LoginForm;
