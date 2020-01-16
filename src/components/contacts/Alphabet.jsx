import React, { useContext } from "react";
import { ContactsContext } from "../../context/contacts-context";

const Alphabet = () => {
  const contactsContext = useContext(ContactsContext);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="h-full overflow-y-scroll flex flex-col w-12 uppercase">
      {alphabet.split("").map(letter => (
        <p
          className="w-8 border border-gray-700 hover:border-white hover:bg-primary-500 hover:text-white hover:border-primary-500 text-center mt-1 mb-1 cursor-pointer rounded"
          key={letter}
          onClick={contactsContext.filterByLetter}
        >
          {letter}
        </p>
      ))}
    </div>
  );
};
export default Alphabet;
