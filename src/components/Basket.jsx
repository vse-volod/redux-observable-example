import React from 'react';
import { useSelector } from 'react-redux';
import {
  Column, ListTitle, List, Item,
} from './ListStyles';

const useBasket = () => useSelector((state) => ({
  basket: state.basket,
}));

const Basket = () => {
  const { basket } = useBasket();

  return (
    <Column>
      <ListTitle>Basket</ListTitle>
      <List>
        {Array.isArray(basket) && basket.map((item) => (
          <Item key={item}>
            <span>
              {item}
            </span>
          </Item>
        ))}
      </List>
    </Column>
  );
};

export default Basket;
