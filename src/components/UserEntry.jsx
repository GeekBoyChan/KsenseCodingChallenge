import React from 'react';

let UserEntry = ({ user, selectedUserHandler }) => {
  const { username, id } = user;
  return (
    <div
      id='UserEntry'
      onClick={() => {
        selectedUserHandler(id);
      }}
    >
      <p className='userName'>{username}</p>
    </div>
  );
};

export default UserEntry;
