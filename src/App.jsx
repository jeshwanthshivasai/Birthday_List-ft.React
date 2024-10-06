import React, { useState } from 'react';
import birthdays from '../db.js';

const BirthdayList = () => {
  const [birthday, setBirthday] = useState(birthdays);
  const clearBirthdays = () => {
    setBirthday([]);
  };

  return (
    <div>
      <h1> 🎂 Birthday List 🎂 </h1>

      <div className="birthdayList">{birthday.length > 0}</div>
    </div>
  );
};

export default BirthdayList;
