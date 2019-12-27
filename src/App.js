import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthProvider from './context/auth-context';
import ContactsProvider from './context/contacts-context';

import PrivateRoute from './components/routes/PrivateRoute';
import AnonRoute from './components/routes/AnonRoute';

import Contacts from './pages/Contacts';
import Login from './pages/Login';

import './App.css';

class App extends Component {
  render() {
    //en el componentDidMount o con useEffect, comprobar si hay token al empezar. Si no hay redirigir a login, si hay, renovarlo con auth props.checkToken()
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <h1>Contacts site</h1>
            <Switch>
              <AnonRoute path="/login" exact component={Login} />
              <ContactsProvider>
                <PrivateRoute path="/" exact component={Contacts} />
              </ContactsProvider>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
