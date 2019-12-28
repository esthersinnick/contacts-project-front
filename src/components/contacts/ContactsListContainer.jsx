import React from 'react';
import withContacts from '../withContacts';
import ContactsList from './ContactsList';
import Alphabet from './Alphabet';
import SearchBar from '../SearchBar';

const ContactsListContainer = (props) => {
  return (
    <aside>
      Contacts list container
      <SearchBar />
      <ContactsList />
      <Alphabet />
    </aside>
  )
}

export default withContacts(ContactsListContainer);
