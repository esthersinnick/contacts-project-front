import React, { useState } from "react";

export const ContactsContext = React.createContext();

const ContactsProvider = props => {
  const [contactsState, setContactsState] = useState({
    contacts: null,
    filteredContacts: null,
    selectedContact: null,
    selectedId: null,
    connections: [],
    filteredConnections: [],
    contactsPages: null,
    currentContactsPage: 1,
    connectionsPages: null,
    currentConnectionsPage: 1
  });

  const setContacts = contacts => {
    const contactsPages = Math.ceil(contacts.length / 50);
    setContactsState({
      ...contactsState,
      contacts,
      filteredContacts: contacts,
      contactsPages
    });
  };

  const setPage = (target, value, limit) => {
    let newPage = contactsState[target];
    if (value && newPage < limit) {
      setContactsState({
        ...contactsState,
        [target]: newPage + 1
      });
    }
    if (!value && newPage > 1) {
      setContactsState({
        ...contactsState,
        [target]: newPage - 1
      });
    }
  };

  const setContact = id => {
    const { contacts } = contactsState;
    const contact = contacts.find(contact => contact.id === id);
    const connections = contact.connections
      .map(connection => contacts.find(contact => contact.id === connection))
      .filter(Boolean);

    setContactsState({
      ...contactsState,
      selectedId: id,
      selectedContact: contact,
      connections,
      filteredConnections: connections,
      connectionsPages: Math.ceil(connections.length / 20)
    });
  };

  const filter = (term, target) => {
    const current = contactsState[target];
    const currentFiltered = current.filter(element =>
      element.name.toLowerCase().includes(term.toLowerCase())
    );
    if (target === "contacts") {
      const contactsPages = Math.ceil(currentFiltered.length / 50) || 1;
      setContactsState({
        ...contactsState,
        filteredContacts: currentFiltered,
        contactsPages,
        currentContactsPage: 1
      });
    } else {
      const connectionsPages = Math.ceil(currentFiltered.length / 20) || 1;
      setContactsState({
        ...contactsState,
        filteredConnections: currentFiltered,
        connectionsPages,
        currentConnectionsPage: 1
      });
    }
  };

  const filterByLetter = event => {
    const letter = event.currentTarget.innerHTML;
    const { contacts } = contactsState;
    const filteredContacts = contacts.filter(
      contact => contact.name[0].toLowerCase() === letter
    );
    const contactsPages = Math.ceil(filteredContacts.length / 50);
    setContactsState({
      ...contactsState,
      filteredContacts,
      currentContactsPage: 1,
      contactsPages
    });
  };

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
  } = contactsState;
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        connections,
        setContacts,
        setContact,
        selectedId,
        selectedContact,
        filteredContacts,
        filter,
        filterByLetter,
        filteredConnections,
        contactsPages,
        currentContactsPage,
        connectionsPages,
        currentConnectionsPage,
        setPage
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
