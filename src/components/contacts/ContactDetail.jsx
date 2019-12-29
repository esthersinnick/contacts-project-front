import React from 'react'
import withContacts from '../withContacts'

const ContactDetail = () => {
  return (
    <div className="md:w-4/6 heigth-70 md:h-screen bg-primary-100">
      Contact detail
    </div>
  )
}

export default withContacts(ContactDetail);
