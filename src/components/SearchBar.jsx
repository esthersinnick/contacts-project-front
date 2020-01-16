import React, { useState, useContext } from "react";
import { ContactsContext } from "../context/contacts-context";

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const contactsContext = useContext(ContactsContext);

  const inputChange = event => {
    contactsContext.filter(event.target.value, props.toFilter);
    setSearchTerm(event.target.value);
  };

  const { term } = searchTerm;
  return (
    <input
      name="term"
      type="text"
      value={term}
      onChange={inputChange}
      placeholder="Search..."
      className="input border-primary-500 rounded w-5/6 md:w-full"
    />
  );
};

export default SearchBar;
