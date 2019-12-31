import React, { Component } from 'react'
import withAuth from '../components/withAuth';
import withContacts from '../components/withContacts';
import contactsService from '../services/contacts-service';
import ContactDetail from '../components/contacts/ContactDetail';
import ContactsListContainer from '../components/contacts/ContactsListContainer';

class Contacts extends Component {

  componentDidMount = async () => {
    const { token, firstTime, validateToken } = this.props
    if (firstTime) {
      validateToken();
    }
    const contacts = await contactsService.getAll(token);
    contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    this.props.setContacts(contacts)
  }

  render() {
    return (
      <main className="flex flex-col md:flex-row">
        <ContactsListContainer />
        <ContactDetail />
      </main>
    )
  }
}


export default withAuth(withContacts(Contacts))