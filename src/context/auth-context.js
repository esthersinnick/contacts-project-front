import React, { Component } from 'react';
import authService from '../services/auth-service';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    firstTime: true,
    user: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
  }

  login = async (user) => {
    const userData = await authService.login(user)
    await localStorage.setItem('userId', userData.user._id);
    await localStorage.setItem('token', userData.token);
    this.setState({
      firstTime: false,
      user: userData.user._id,
      token: userData.token
    })
  }

  renewToken = async () => {
    if (this.state.token) {
      const userData = await authService.renewToken(this.state.token);
      await localStorage.setItem('token', userData.token);
      this.setState({
        firstTime: false,
        user: userData.user._id,
        token: userData.token
      })
    }
  }

  render() {
    const { user, token, firstTime } = this.state
    return (
      <AuthContext.Provider value={
        {
          user,
          token,
          firstTime,
          login: this.login,
          renewToken: this.renewToken
        }
      }>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export default AuthProvider;
