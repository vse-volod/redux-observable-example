import * as types from './actionTypes';

export const startFetching = () => ({
  type: types.START_FETCHING,
});

export const stopFetching = () => ({
  type: types.STOP_FETCHING,
});

export const fetchUsers = () => ({
  type: types.FETCH_USERS,
});

export const fetchUsersSuccess = (response) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: { response },
});

export const displayErrorMessage = (message) => ({
  type: types.DISPLAY_ERROR_MESSAGE,
  payload: { message },
});
