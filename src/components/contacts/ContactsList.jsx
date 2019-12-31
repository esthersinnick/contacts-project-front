import React from 'react'
import withContacts from '../withContacts'

const ContactsList = (props) => {
  const { filteredContacts, selectedIndex, setContact } = props
  return (
    <div className="h-full w-full ml-4 overflow-y-scroll">
      {
        filteredContacts ?
          filteredContacts.map((contact, index) => (
            <p className={selectedIndex === index ? "text-primary-500 cursor-pointer" : "hover:text-primary-500 cursor-pointer"} key={contact.id} onClick={() => { setContact(index) }}>{contact.name}</p>
          ))
          : null
      }
    </div>
  )
}

export default withContacts(ContactsList);

