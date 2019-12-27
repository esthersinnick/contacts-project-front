import React, { Component } from 'react';

export const ContactsContext = React.createContext();

class ContactsProvider extends Component {
  state = {
    contacts: null,
    filteredContacts: null
  }

  setContacts = contacts => {
    this.setState({
      contacts,
      filteredContacts: contacts
    })
  }

  filterContacts = async (term) => {
    const { contacts } = this.state
    const filteredContacts = contacts.filter(contact => contact.includes(term))
    this.setState({ filteredContacts })
  }

  render() {
    const { contacts, filteredContacts } = this.state
    return (
      <ContactsContext.Provider value={
        {
          contacts,
          filteredContacts,
          setContacts: this.setContacts,
          filterContacts: this.filterContacts
        }
      }>
        {this.props.children}
      </ContactsContext.Provider>
    )
  }
};

export default ContactsProvider;
