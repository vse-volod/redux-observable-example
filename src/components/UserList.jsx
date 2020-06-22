import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserInfo = styled.div`
  background-color: #528ce0;
  border-radius: 15px;
  padding: 15px;
  width: 250px;
  margin: 15px 0;
  color: white;
`;

const useUsers = () => useSelector((state) => ({
  users: state.users,
  error: state.error,
}));

const UserList = () => {
  const { users, error } = useUsers();
  console.log('users:', users);

  return (
    <div>
      {error || !users ? (
        <p>We encountered and error.</p>
      ) : (
        <>
          {Array.isArray(users) && users.map((userInfo) => {
            const {
              name, id, apples,
            } = userInfo;
            return (
              <UserInfo key={id}>
                <h3>
                  Name:
                  {name}
                </h3>
                <p>
                  Id:
                  {id}
                </p>
                <p>
                  number of apples:
                  {apples ? apples.length : 0}
                </p>
                <p>apples:</p>
                {apples && apples.map((a) => (
                  <p key={a.id}>
                    Apple
                    {a.id}
                  </p>
                ))}
              </UserInfo>
            );
          })}
        </>
      )}
    </div>
  );
};

export default UserList;
