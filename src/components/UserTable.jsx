import React from 'react';
import UserEntry from './UserEntry.jsx';

const UserTable = ({ users, selectedUserHandler }) => {
  return (
    <div id='UserTable'>
      {users.map((user) => {
        return (
          <UserEntry
            user={user}
            key={user.id}
            selectedUserHandler={selectedUserHandler}
          />
        );
      })}
    </div>
  );
};

export default UserTable;
