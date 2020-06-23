import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BasketItem = styled.div`
  background-color: #528ce0;
  padding: 15px;
  width: 250px;
  margin: 15px 0;
  color: white;
`;

const useUsers = () => useSelector((state) => ({
  basket: state.basket,
}));

const Basket = () => {
  const { basket } = useUsers();
  console.log('basket:', basket);

  return (
    <div>
      <h2>Basket</h2>
      {Array.isArray(basket) && basket.map((item) => (
        <BasketItem key={item}>
          <h3>
            {item}
          </h3>
        </BasketItem>
      ))}
    </div>
  );
};

export default Basket;
