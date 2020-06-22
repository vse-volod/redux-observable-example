import * as types from './actionTypes';

export const startFetchingUsers = () => ({
  type: types.START_FETCHING_USERS,
});
export const stopFetchingUsers = () => ({
  type: types.STOP_FETCHING_USERS,
});
export const fetchUsersSuccess = (response) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: { response },
});

export const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: { error },
});
