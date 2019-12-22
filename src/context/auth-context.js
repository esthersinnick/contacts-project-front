import React, { Component } from 'react';
import authService from '../services/auth-service';
import auth from '../services/auth-service';


export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    firstTime: true,
    user: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
  }

  login = async (user) => {
    const userData = await authService.login(user)
    this.setState({
      firstTime: false,
      user: userData.user._id,
      token: userData.token
    })
  }

  checkToken = async () => {
    if (this.state.token) {
      const userData = auth.renewToken(this.state.token);
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
        }
      }>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export default AuthProvider;
