import React from "react";
import withContacts from "../withContacts";

const Alphabet = props => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="h-full overflow-y-scroll flex flex-col w-12 uppercase">
      {alphabet.split("").map(letter => (
        <p
          className="w-8 border border-gray-700 hover:border-white hover:bg-primary-500 hover:text-white hover:border-primary-500 text-center mt-1 mb-1 cursor-pointer rounded"
          key={letter}
          onClick={props.filterByLetter}
        >
          {letter}
        </p>
      ))}
    </div>
  );
};

export default withContacts(Alphabet);
