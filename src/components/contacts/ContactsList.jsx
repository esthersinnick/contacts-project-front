import React from "react";
import withContacts from "../withContacts";

const ContactsList = props => {
  const { filteredContacts, selectedId, setContact } = props;
  return (
    <div className="h-full w-full ml-4 overflow-y-scroll">
      {filteredContacts
        ? filteredContacts.map(contact => (
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
          ))
        : null}
    </div>
  );
};

export default withContacts(ContactsList);
