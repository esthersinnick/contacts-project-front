import React from "react";
import withContacts from "../withContacts";
import ContactsList from "./ContactsList";
import Alphabet from "./Alphabet";
import SearchBar from "../SearchBar";
import Pagination from "../Pagination";

const ContactsListContainer = props => {
  return (
    <aside className="md:w-2/6 heigth-30 md:h-screen overflow-scroll shadow-2xl">
      <div className="p-3 fixed w-full md:w-2/6 bg-white border-b border-primary-500">
        <SearchBar toFilter="contacts" />
      </div>
      <div className="w-full height-30 md:h-auto bg-white md:w-2/6 flex p-5 md:pb-16 mt-12 fixed bottom-0 top-0 ">
        <Alphabet />
        <ContactsList />
      </div>
      <Pagination
        pages={props.contactsPages}
        current={props.currentContactsPage}
        target="currentContactsPage"
      />
    </aside>
  );
};

export default withContacts(ContactsListContainer);
