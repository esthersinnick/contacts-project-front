import React, { Component } from 'react';
import authService from '../services/auth-service';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    firstTime: true,
    user: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    message: ''
  }

  login = async (user) => {
    try {
      const userData = await authService.login(user)
      await localStorage.setItem('userId', userData.user._id);
      await localStorage.setItem('token', userData.token);
      this.setState({
        firstTime: false,
        user: userData.user._id,
        token: userData.token
      })
    } catch (err) {
      this.setState({
        message: err.response.data
      })
    }
  }

  validateToken = async () => {
    if (this.state.token) {
      const response = await authService.renewToken(this.state.token);
      if (response === "expired") {
        console.log('expired token, removing localStorage')
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.setState({
          firstTime: false,
          user: null,
          token: null
        })
      } else {
        await localStorage.setItem('token', response.token);
        this.setState({
          firstTime: false,
          user: response.user._id,
          token: response.token
        })
      }
    }
  }

  render() {
    const { user, token, firstTime, message } = this.state
    return (
      <AuthContext.Provider value={
        {
          user,
          token,
          firstTime,
          message,
          login: this.login,
          validateToken: this.validateToken
        }
      }>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export default AuthProvider;
