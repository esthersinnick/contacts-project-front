import React, { Component } from "react";
import { ContactsContext } from "../context/contacts-context";

const withContacts = Comp => {
  return class withContacts extends Component {
    render() {
      return (
        <ContactsContext.Consumer>
          {({
            contacts,
            filteredContacts,
            setContacts,
            filterByLetter,
            selectedContact,
            setContact,
            connections,
            filteredConnections,
            selectedId,
            filter,
            contactsPages,
            currentContactsPage,
            connectionsPages,
            currentConnectionsPage,
            setPage
          }) => (
            <Comp
              selectedId={selectedId}
              contacts={contacts}
              filteredContacts={filteredContacts}
              setContacts={setContacts}
              filterByLetter={filterByLetter}
              selectedContact={selectedContact}
              setContact={setContact}
              connections={connections}
              filteredConnections={filteredConnections}
              filter={filter}
              contactsPages={contactsPages}
              currentContactsPage={currentContactsPage}
              connectionsPages={connectionsPages}
              currentConnectionsPage={currentConnectionsPage}
              setPage={setPage}
              {...this.props}
            />
          )}
        </ContactsContext.Consumer>
      );
    }
  };
};
export default withContacts;
