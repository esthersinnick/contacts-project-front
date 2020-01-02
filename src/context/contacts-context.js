import React, { Component } from "react";

export const ContactsContext = React.createContext();

class ContactsProvider extends Component {
  state = {
    contacts: null,
    filteredContacts: null,
    selectedContact: null,
    connections: [],
    filteredConnections: [],
    selectedId: null,
    contactsPages: null,
    currentContactsPage: 1,
    connectionsPages: null,
    currentConnectionsPage: 1
  };

  setContacts = contacts => {
    const contactsPages = Math.ceil(contacts.length / 50);
    this.setState({
      contacts,
      filteredContacts: contacts,
      contactsPages
    });
  };

  setPage = (target, value, limit) => {
    let newPage = this.state[target];
    if (value && newPage < limit) {
      this.setState({
        [target]: newPage + 1
      });
    }
    if (!value && newPage > 1) {
      this.setState({
        [target]: newPage - 1
      });
    }
  };

  setContact = id => {
    const { contacts } = this.state;
    const contact = contacts.find(contact => contact.id === id);
    const connections = contact.connections
      .map(connection => contacts.find(contact => contact.id === connection))
      .filter(Boolean);

    this.setState({
      selectedId: id,
      selectedContact: contact,
      connections,
      filteredConnections: connections,
      connectionsPages: Math.ceil(connections.length / 20)
    });
  };

  filter = (term, target) => {
    const current = this.state[target];
    const currentFiltered = current.filter(element =>
      element.name.toLowerCase().includes(term.toLowerCase())
    );
    if (target === "contacts") {
      const contactsPages = Math.ceil(currentFiltered.length / 50) || 1;
      this.setState({
        filteredContacts: currentFiltered,
        contactsPages,
        currentContactsPage: 1
      });
    } else {
      const connectionsPages = Math.ceil(currentFiltered.length / 20) || 1;
      this.setState({
        filteredConnections: currentFiltered,
        connectionsPages,
        currentConnectionsPage: 1
      });
    }
  };

  filterByLetter = event => {
    const letter = event.currentTarget.innerHTML;
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(
      contact => contact.name[0].toLowerCase() === letter
    );
    const contactsPages = Math.ceil(filteredContacts.length / 50);
    this.setState({
      filteredContacts,
      currentContactsPage: 1,
      contactsPages
    });
  };

  render() {
    const {
      contacts,
      connections,
      selectedId,
      selectedContact,
      filteredContacts,
      filteredConnections,
      contactsPages,
      currentContactsPage,
      connectionsPages,
      currentConnectionsPage
    } = this.state;
    return (
      <ContactsContext.Provider
        value={{
          contacts,
          connections,
          setContacts: this.setContacts,
          setContact: this.setContact,
          selectedId,
          selectedContact,
          filteredContacts,
          filter: this.filter,
          filterByLetter: this.filterByLetter,
          filteredConnections,
          contactsPages,
          currentContactsPage,
          connectionsPages,
          currentConnectionsPage,
          setPage: this.setPage
        }}
      >
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}

export default ContactsProvider;
