import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { stopFetchingUsers, startFetchingUsers } from '../store/actions';
import UserList from '../components/UserList';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchingUsers());
    return () => {
      dispatch(stopFetchingUsers());
    };
  }, [dispatch]);
  return (
    <div>
      <UserList />
    </div>
  );
};

export default Main;
