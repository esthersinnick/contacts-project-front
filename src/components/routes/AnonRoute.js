import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../withAuth'

const AnonRoute = (props) => {
  const { token, component: Component, ...rest } = props;
  return (
    <>
      {!token ?
        <Route
          render={(props) => <Component {...props} />} {...rest}
        />
        : <Redirect to='/' />}
    </>

  )
}

export default withAuth(AnonRoute);