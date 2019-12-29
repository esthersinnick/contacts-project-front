import React from 'react';
import withContacts from '../withContacts';
import ContactsList from './ContactsList';
import Alphabet from './Alphabet';
import SearchBar from '../SearchBar';

const ContactsListContainer = (props) => {
  return (
    <aside className="md:w-2/6 heigth-30 md:h-screen overflow-scroll shadow-2xl">
      <SearchBar />
      <div className="w-full height-30 md:h-full bg-white md:w-2/6 flex p-5 mt-12 fixed bottom-0 top-0 ">
        <Alphabet />
        <ContactsList />
      </div>
    </aside>
  )
}

export default withContacts(ContactsListContainer);