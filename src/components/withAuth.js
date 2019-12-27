import React, { Component } from 'react'
import { AuthContext } from '../context/auth-context'

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ user, token, firstTime, login, renewToken }) => (
            <Comp
              user={user}
              token={token}
              login={login}
              firstTime={firstTime}
              renewToken={renewToken}
              {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}
export default withAuth