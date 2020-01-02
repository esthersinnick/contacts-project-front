import React from "react";
import withContacts from "../withContacts";
import ContactsList from "./ContactsList";
import Alphabet from "./Alphabet";
import SearchBar from "../SearchBar";
import Pagination from "../Pagination";
import CloseIcon from "../../images/closeIcon/CloseIcon";

const ContactsListContainer = props => {
  return (
    <aside
      className={
        props.menuOpened
          ? "md:w-2/6 heigth-30 md:min-h-screen overflow-scroll shadow-2xl"
          : "hidden md:block md:w-2/6 heigth-30 md:min-h-screen overflow-scroll shadow-2xl"
      }
    >
      <div className="p-3 fixed w-full md:w-2/6 bg-white border-b border-primary-500 flex justify-between">
        <SearchBar toFilter="contacts" />
        <div className="md:hidden" onClick={props.toggleMenu}>
          <CloseIcon
            customDiv="p-2 rounded mr-3 cursor-pointer bg-primary-100"
            customSvg="w-4"
          />
        </div>
      </div>
      <div className="w-full height-86 md:h-auto bg-white md:w-2/6 flex p-5 md:pb-16 mt-12 fixed bottom-0 top-0 ">
        <Alphabet />
        <ContactsList />
      </div>
      <div className="relative z-10 md:block w-full md:w-2/6 ">
        <Pagination
          pages={props.contactsPages}
          current={props.currentContactsPage}
          target="currentContactsPage"
        />
      </div>
    </aside>
  );
};

export default withContacts(ContactsListContainer);
