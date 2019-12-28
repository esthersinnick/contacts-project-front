import React, { Component } from 'react'
import { AuthContext } from '../context/auth-context'

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ user, token, firstTime, message, login, validateToken }) => (
            <Comp
              user={user}
              token={token}
              message={message}
              login={login}
              firstTime={firstTime}
              validateToken={validateToken}
              {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}
export default withAuth