import React from 'react'
import withContacts from '../withContacts'

const ContactsList = (props) => {
  const { filteredContacts } = props
  return (
    <div className="h-full w-full ml-4 overflow-y-scroll">
      {
        filteredContacts ?
          filteredContacts.map(contact => (
            <p className="hover:text-primary-500 cursor-pointer" key={contact.id}>{contact.name}</p>
          ))
          : null
      }
    </div>
  )
}

export default withContacts(ContactsList);