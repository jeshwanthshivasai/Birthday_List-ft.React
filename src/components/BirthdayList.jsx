import React, { useState } from 'react';
import birthdays from '../../db';

const BirthdayList = () => {
  const [birthdayList, setBirthdayList] = useState(birthdays);
  const clearBirthdays = () => {
    setBirthdayList([]);
  };
  return (
    <div>
      <h2> 🎂 Birthday List 🎂 </h2>

      <div className="birthday-List">
        {birthdayList.length > 0 ? (
          birthdayList.map((person, index) => (
            <div key={index} className="person" >
              <img src={person.img} alt={`${person.name}'s picture`} />
              <h3> {person.name} </h3>
              <p> Birthday: {person.birthday} </p>
            </div>
        ))
        ) : (
          <p> No birthdays to display! </p>
        )} 
      </div>
      {birthdayList.length > 0 && (
        <button onClick={clearBirthdays} className='clear-btn'> Delete all Birthdays </button>
      )}
    </div>
  );
}
export default BirthdayList;
