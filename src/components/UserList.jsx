import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { grabApple, freeAllApples } from '../store/actions';

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
  const dispatch = useDispatch();
  console.log('users:', users);
  console.log('error:', error);

  return (
    <div>
      {error || !users ? (
        <p>We encountered and error.</p>
      ) : (
        <>
          <h2>Users</h2>
          {Array.isArray(users) && users.map((oneUser) => {
            const {
              name, id, apples,
            } = oneUser;
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
                <button type="button" onClick={() => dispatch(grabApple(id))}>
                  Grab Apple
                </button>
              </UserInfo>
            );
          })}
        </>
      )}
      <button type="button" onClick={() => dispatch(freeAllApples())}>Free Apples</button>
    </div>
  );
};

export default UserList;
