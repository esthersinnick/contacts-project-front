import React from "react";
import withContacts from "../withContacts";
import noContactImage from "../../images/desierto.png";
import SearchBar from "../SearchBar";

const ContactDetail = props => {
  const { selectedContact } = props;
  return (
    <div
      className={
        !selectedContact
          ? "md:w-4/6 heigth-70 h-screen bg-primary-100 flex justify-center items-center"
          : "md:w-4/6 heigth-70 h-screen bg-primary-100"
      }
    >
      {!selectedContact ? (
        <div className="border border-dashed border-primary-300 pt-20px rounded-lg">
          <p className="uppercase font-bold text-lg text-indigo-300 text-center mt-8 ">
            No contact selected
          </p>
          <img src={noContactImage} alt="no contact selected" />
        </div>
      ) : (
        <div className="flex">
          <div className="flex">
            <img
              src={props.selectedContact.avatar}
              alt={props.selectedContact.name}
            />
            <p>{props.selectedContact.name}</p>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default withContacts(ContactDetail);
