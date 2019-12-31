import React, { Component } from "react";

export const ContactsContext = React.createContext();

class ContactsProvider extends Component {
  state = {
    contacts: null,
    filteredContacts: null,
    selectedContact: null,
    connections: [],
    selectedIndex: null
  };

  setContacts = contacts => {
    this.setState({
      contacts,
      filteredContacts: contacts
    });
  };

  filterContacts = term => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ filteredContacts });
  };

  // setContact = index => {
  //   const { contacts } = this.state;
  //   const contact = contacts[index];
  //   const connections = [];
  //   contact.connections.forEach(connection => {
  //     const contactConnected = contacts.find(
  //       contact => contact.id === connection
  //     );
  //     connections.push(contactConnected);
  //   });
  //   this.setState({
  //     selectedIndex: index,
  //     selectedContact: contact,
  //     connections
  //   });
  // };

  setContact = index => {
    const { contacts } = this.state;
    const contact = contacts[index];
    const connections = contact.connections
      .map(connection => contacts.find(contact => contact.id === connection))
      .filter(Boolean);

    this.setState({
      selectedIndex: index,
      selectedContact: contact,
      connections
    });
  };

  filterConnections = term => {};

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
          filterContacts: this.filterContacts,
          filterByLetter: this.filterByLetter,
          selectedContact,
          setContact: this.setContact,
          connections,
          filteredConnections,
          filterConnections: this.filterConnections,
          selectedIndex
        }}
      >
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}

export default ContactsProvider;
