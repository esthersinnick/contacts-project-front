import React, { Component } from 'react'
import withAuth from '../components/withAuth';
import withContacts from '../components/withContacts';
import contactsService from '../services/contacts-service';

class Contacts extends Component {

  componentDidMount = async () => {
    const { token, firstTime, validateToken } = this.props
    if (firstTime) {
      validateToken();
    }
    const contacts = await contactsService.getAll(token);
    this.props.setContacts(contacts)
  }

  render() {
    return (
      <div>
        contacts Page
      </div>
    )
  }
}


export default withAuth(withContacts(Contacts))