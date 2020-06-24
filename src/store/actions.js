import * as types from './actionTypes';

export const fetchUsers = () => ({
  type: types.FETCH_USERS,
});

export const fetchUsersSuccess = (response) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: { response },
});

export const fetchBasket = () => ({
  type: types.FETCH_BASKET,
});

export const fetchBasketSuccess = (response) => ({
  type: types.FETCH_BASKET_SUCCESS,
  payload: { response },
});

export const grabApple = (userId) => ({
  type: types.GRAB_APPLE,
  userId,
});

export const grabAppleSuccess = (response) => ({
  type: types.GRAB_APPLE_SUCCESS,
  payload: { response },
});

export const freeAllApples = () => ({
  type: types.FREE_ALL_APPLES,
});

export const displayErrorMessage = (message) => ({
  type: types.DISPLAY_ERROR_MESSAGE,
  payload: { message },
});

export const hideErrorMessage = () => ({
  type: types.HIDE_ERROR_MESSAGE,
});
