import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, fetchBasket } from '../store/actions';
import UserList from '../components/UserList';
import Basket from '../components/Basket';
import Layout from '../components/Layout';
import ErrorDisplay from '../components/ErrorDisplay';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchBasket());
  }, [dispatch]);
  return (
    <>
      <ErrorDisplay />
      <Layout>
        <UserList />
        <Basket />
      </Layout>
    </>
  );
};

export default Main;
