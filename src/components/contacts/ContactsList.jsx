import React from "react";
import withContacts from "../withContacts";

const ContactsList = props => {
  const {
    filteredContacts,
    selectedId,
    setContact,
    currentContactsPage,
    contactsPages
  } = props;
  const startIndex = (currentContactsPage - 1) * 50;
  const endIndex = startIndex + 50;
  return (
    <div className="h-full w-full ml-4 overflow-y-scroll">
      {contactsPages === 0 ? (
        <p>No results found</p>
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
              onClick={() => {
                setContact(contact.id);
              }}
            >
              {contact.name}
            </p>
          ) : null
        )
      ) : null}
    </div>
  );
};

export default withContacts(ContactsList);
