import React from 'react'
import withContacts from '../withContacts'

const ContactsList = (props) => {
  const { filteredContacts } = props
  return (
    <div className="contacts-list">
      {
        filteredContacts ?
          filteredContacts.map(contact => (
            <p key={contact.id}>{contact.name}</p>
          ))
          : null
      }
    </div>
  )
}

export default withContacts(ContactsList);