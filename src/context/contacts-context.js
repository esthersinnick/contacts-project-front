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
    console.log(term)
    const { contacts } = this.state
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(term.toLowerCase()))
    this.setState({ filteredContacts })
  }

  filterByLetter = async (event) => {
    const letter = event.currentTarget.innerHTML
    const { contacts } = this.state
    const filteredContacts = contacts.filter(contact => contact.name[0].toLowerCase() === letter)
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
          filterContacts: this.filterContacts,
          filterByLetter: this.filterByLetter
        }
      }>
        {this.props.children}
      </ContactsContext.Provider>
    )
  }
};

export default ContactsProvider;
