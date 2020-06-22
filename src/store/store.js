import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import * as types from './actionTypes';

const INITIAL_STATE = {
  users: [],
  error: null,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload.response,
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}

const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store;
};

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
