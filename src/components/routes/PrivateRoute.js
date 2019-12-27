import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../withAuth'

const PrivateRoute = (props) => {
  const { token, component: Component, ...rest } = props;
  return (
    <>
      {token ?
        <Route
          render={(props) => <Component {...props} />} {...rest}
        />
        : <Redirect to='/login' />}
    </>

  )
}

export default withAuth(PrivateRoute);