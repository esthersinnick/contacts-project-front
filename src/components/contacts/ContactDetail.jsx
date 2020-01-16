import React, { useContext } from "react";
import { ContactsContext } from "../../context/contacts-context";
import noContactImage from "../../images/desierto.png";
import SearchBar from "../SearchBar";
import ConnectionsList from "./ConnectionsList";

const ContactDetail = () => {
  const contactsContext = useContext(ContactsContext);
  const { selectedContact } = contactsContext;
  return (
    <div
      className={
        !selectedContact
          ? "md:w-4/6 min-h-screen bg-primary-100 flex justify-center items-center"
          : "md:w-4/6 min-h-screen bg-primary-100"
      }
    >
      {!selectedContact ? (
        <div className="md:border border-dashed border-primary-300 pt-20px rounded-lg">
          <p className="uppercase font-bold text-lg text-indigo-300 text-center mt-8 ">
            No contact selected
          </p>
          <img src={noContactImage} alt="no contact selected" />
        </div>
      ) : (
        <div className="p-2">
          <div className="flex flex-col md:flex-row m-1 p-4 border-b-1 border-primary-300 items-center">
            <div className="flex flex-col md:flex-row w-3/5 items-center">
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className="rounded-full border-2 border-primary-500 w-20 "
              />
              <p className="text-3xl text-center md:text-left text-primary-500 ml-3">
                {selectedContact.name}
              </p>
            </div>
            <div className="w-full text-center md:w-2/5 md:textleft">
              <SearchBar toFilter="connections" />
            </div>
          </div>
          <ConnectionsList />
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
