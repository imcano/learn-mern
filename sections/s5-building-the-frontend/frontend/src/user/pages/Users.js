import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Isaac Cano',
      image: 'https://avatars0.githubusercontent.com/u/15148972?s=460&v=4',
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
