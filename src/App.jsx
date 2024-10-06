import React, { useState } from 'react';
import birthdays from '../db.js';

const BirthdayList = () => {
  const [birthday, setBirthday] = useState(birthdays);
  const clearBirthdays = () => {
    setBirthday([]);
  };

  return (
    <>
      <BirthdayList />
    </>
  );
};

export default BirthdayList;
