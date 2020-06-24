import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { grabApple, freeAllApples } from '../store/actions';
import {
  Column, ListTitle, List, Item, Button,
} from './ListStyles';

const UserApplesList = styled.ul`
  margin-bottom: 0;
`;

const FreeApplesButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #38c172;
  border-color: #38c172;
`;

const GrabAppleButton = styled(Button)`
  padding: 0.25rem 0.5rem;
  font-size: 0.7875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #fff;
  background-color: #e3342f;
  border-color: #e3342f;
`;

const FreeApplesButtonSection = styled.section`
  text-align: right;
  padding-top: 15px;
  color: white;
`;

const QtyBadge = styled.span`
  color: #fff;
  background-color: #3490dc;
  margin-right: 1rem;
  border-radius: 10rem;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const useUsers = () => useSelector((state) => ({
  users: state.users,
}));

const UserList = () => {
  const { users } = useUsers();
  const dispatch = useDispatch();

  return (
    <Column>
      <ListTitle>Users</ListTitle>
      <List>
        {users.map((oneUser) => {
          const {
            name, id, apples,
          } = oneUser;
          return (
            <Item key={id}>
              <UserInfo>
                {name}
                <div>
                  <QtyBadge>
                    {apples ? apples.length : 0}
                  </QtyBadge>
                  <GrabAppleButton type="button" onClick={() => dispatch(grabApple(id))}>
                    Grab Apple
                  </GrabAppleButton>
                </div>
              </UserInfo>
              {apples && (
                <UserApplesList>
                  {apples.map((a) => (
                    <p key={a.id}>
                      Apple
                      {a.id}
                    </p>
                  ))}
                </UserApplesList>
              )}

            </Item>
          );
        })}
        <FreeApplesButtonSection>
          <FreeApplesButton type="button" onClick={() => dispatch(freeAllApples())}>
            Free Apples
          </FreeApplesButton>
        </FreeApplesButtonSection>
      </List>
    </Column>
  );
};

export default UserList;
