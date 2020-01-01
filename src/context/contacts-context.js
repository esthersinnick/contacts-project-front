import React, { Component } from "react";

export const ContactsContext = React.createContext();

class ContactsProvider extends Component {
  state = {
    contacts: null,
    filteredContacts: null,
    selectedContact: null,
    connections: [],
    filteredConnections: [],
    selectedIndex: null
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

  setContact = index => {
    const { contacts } = this.state;
    const contact = contacts[index];
    const connections = contact.connections
      .map(connection => contacts.find(contact => contact.id === connection))
      .filter(Boolean);

    this.setState({
      selectedIndex: index,
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
      selectedIndex
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
          selectedIndex,
          filter: this.filter
        }}
      >
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}

export default ContactsProvider;
