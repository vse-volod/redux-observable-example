import { useMemo } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import * as types from './actionTypes';

const INITIAL_STATE = {
  users: [],
  basket: [],
  error: null,
  loading: false,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload.response,
      };
    case types.FETCH_BASKET_SUCCESS:
      return {
        ...state,
        basket: payload.response,
      };
    case types.DISPLAY_ERROR_MESSAGE:
      return payload.message
        ? {
          ...state,
          error: payload.message,
        } : state;
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      reduxMiddleware,
    ),
  );
  epicMiddleware.run(rootEpic);

  return store;
};

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
