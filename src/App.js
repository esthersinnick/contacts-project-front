import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AuthProvider from "./context/auth-context";
import ContactsProvider from "./context/contacts-context";

import PrivateRoute from "./components/routes/PrivateRoute";
import AnonRoute from "./components/routes/AnonRoute";

import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
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
};

export default App;
