import React, { useContext } from "react";
import { ContactsContext } from "../../context/contacts-context";
import loader from "../../images/load.gif";

const ContactsList = () => {
  const contactsContext = useContext(ContactsContext);
  const {
    filteredContacts,
    selectedId,
    setContact,
    currentContactsPage
  } = contactsContext;

  const startIndex = (currentContactsPage - 1) * 50;
  const endIndex = startIndex + 50;
  return (
    <div className="h-full w-full ml-4 overflow-y-scroll">
      {filteredContacts && filteredContacts.length === 0 ? (
        <p className="w-full m-3 p-2 font-light text-primary-500">
          No results found
        </p>
      ) : filteredContacts ? (
        filteredContacts.map((contact, index) =>
          index >= startIndex && index < endIndex ? (
            <p
              className={
                selectedId === contact.id
                  ? "text-primary-500 cursor-pointer"
                  : "hover:text-primary-500 cursor-pointer"
              }
              key={contact.id}
              onClick={setContact.bind(this, contact.id)}
            >
              {contact.name}
            </p>
          ) : null
        )
      ) : (
        <div className="w-full flex justify-center items-center">
          <img src={loader} className="w-2/5" alt="loading" />
        </div>
      )}
    </div>
  );
};

export default ContactsList;
