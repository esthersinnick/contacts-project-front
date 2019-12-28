import React from 'react'
import withContacts from '../withContacts';

const Alphabet = (props) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return (
    <div className="alphabet-list">
      {alphabet.split('').map(letter => (
        <p key={letter} onClick={props.filterByLetter}>
          {letter}
        </p>
      ))}
    </div>
  )
}

export default withContacts(Alphabet);
