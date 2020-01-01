import React, { Component } from "react";

export const ContactsContext = React.createContext();

class ContactsProvider extends Component {
  state = {
    contacts: null,
    filteredContacts: null,
    selectedContact: null,
    connections: [],
    filteredConnections: [],
    selectedId: null
  };

  setContacts = contacts => {
    this.setState({
      contacts,
      filteredContacts: contacts
    });
  };

  filter = (term, target) => {
    const current = this.state[target];
    const currentFiltered = current.filter(element =>
      element.name.toLowerCase().includes(term.toLowerCase())
    );
    if (target === "contacts") {
      this.setState({ filteredContacts: currentFiltered });
    } else {
      this.setState({ filteredConnections: currentFiltered });
    }
  };

  setContact = id => {
    const { contacts } = this.state;
    const contact = contacts.find(contact => contact.id === id);
    console.log(contact);
    const connections = contact.connections
      .map(connection => contacts.find(contact => contact.id === connection))
      .filter(Boolean);

    this.setState({
      selectedId: id,
      selectedContact: contact,
      connections,
      filteredConnections: connections
    });
  };

  filterByLetter = event => {
    const letter = event.currentTarget.innerHTML;
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(
      contact => contact.name[0].toLowerCase() === letter
    );
    this.setState({ filteredContacts });
  };

  render() {
    const {
      contacts,
      filteredContacts,
      selectedContact,
      connections,
      filteredConnections,
      selectedId
    } = this.state;
    return (
      <ContactsContext.Provider
        value={{
          contacts,
          setContacts: this.setContacts,
          filteredContacts,
          filterByLetter: this.filterByLetter,
          selectedContact,
          setContact: this.setContact,
          connections,
          filteredConnections,
          selectedId,
          filter: this.filter
        }}
      >
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}

export default ContactsProvider;
