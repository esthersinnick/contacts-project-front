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
    return (
      <Router>
        <AuthProvider>
          <div className="container">
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
