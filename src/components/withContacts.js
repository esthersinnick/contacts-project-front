import React, { Component } from 'react'
import { ContactsContext } from '../context/contacts-context'

const withContacts = (Comp) => {
  return class withContacts extends Component {
    render() {
      return (
        <ContactsContext.Consumer>
          {({ contacts, filteredContacts, filterContacts, setContacts, filterByLetter }) => (
            <Comp
              contacts={contacts}
              filteredContacts={filteredContacts}
              setContacts={setContacts}
              filterContacts={filterContacts}
              filterByLetter={filterByLetter}
              {...this.props}
            />
          )}
        </ContactsContext.Consumer>
      )
    }
  }
}
export default withContacts