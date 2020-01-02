import React, { Component } from "react";
import withAuth from "../components/withAuth";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    remember: false,
    error: ""
  };

  inputOnChange = (event, checkbox) => {
    const { name, value } = event.target;
    if (checkbox) {
      this.setState({
        [name]: event.target.checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleSubmit = async () => {
    const { email, password, remember } = this.state;
    await this.props.login({ email, password, remember });
  };

  validateForm = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      return this.setState({ error: "All fields are required" });
    }
    this.handleSubmit();
  };

  render() {
    const { email, password, remember, error } = this.state;
    const { message } = this.props;
    return (
      <form
        onSubmit={this.validateForm}
        className="flex flex-col justify-center items-center w-3/5"
      >
        <input
          placeholder="email"
          name="email"
          value={email}
          type="email"
          onChange={this.inputOnChange}
          className="input border-primary-500 w-full m-3 rounded"
        />
        <input
          placeholder="password"
          name="password"
          value={password}
          type="password"
          onChange={this.inputOnChange}
          className="input border-primary-500 w-full m-3 rounded"
        />
        <div>
          <input
            name="remember"
            checked={remember}
            type="checkbox"
            className="m-3"
            onChange={event => {
              this.inputOnChange(event, "checkbox");
            }}
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
  }
}
export default withAuth(LoginForm);
