import React, { Component } from 'react'
import { ContactsContext } from '../context/contacts-context'

const withContacts = (Comp) => {
  return class withContacts extends Component {
    render() {
      return (
        <ContactsContext.Consumer>
          {({ contacts, filteredContacts, filterContacts, setContacts, filterByLetter, selectedContact, setContact, connections, filteredConnections, filterConnections, selectedIndex }) => (
            <Comp
              selectedIndex={selectedIndex}
              contacts={contacts}
              filteredContacts={filteredContacts}
              setContacts={setContacts}
              filterContacts={filterContacts}
              filterByLetter={filterByLetter}
              selectedContact={selectedContact}
              setContact={setContact}
              connections={connections}
              filteredConnections={filteredConnections}
              filterConnections={filterConnections}
              {...this.props}
            />
          )}
        </ContactsContext.Consumer>
      )
    }
  }
}
export default withContacts