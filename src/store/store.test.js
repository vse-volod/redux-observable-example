import { reducer } from './store';

const state = {
  users: [],
  basket: [],
  error: null,
};

describe('app reducer', () => {
  it('FETCH_USERS_SUCCESS', () => {
    const action = {
      type: 'FETCH_USERS_SUCCESS',
      payload: {
        response: [
          { id: 1, name: 'Jonathan', apples: [] },
          { id: 2, name: 'Adrian', apples: [] },
          { id: 3, name: 'Julie', apples: [] },
        ],
      },
    };
    const result = reducer(state, action);
    expect(result).toEqual(
      {
        users:
            [
              { id: 1, name: 'Jonathan', apples: [] },
              { id: 2, name: 'Adrian', apples: [] },
              { id: 3, name: 'Julie', apples: [] },
            ],
        basket: [],
        error: null,
      },
    );
  });
  it('FETCH_BASKET_SUCCESS', () => {
    const action = {
      type: 'FETCH_BASKET_SUCCESS',
      payload: {
        response: ['Apple1', 'Apple2', 'Apple3', 'Apple4', 'Apple5'],
      },
    };
    const result = reducer(state, action);
    expect(result).toEqual(
      {
        users: [],
        basket: ['Apple1', 'Apple2', 'Apple3', 'Apple4', 'Apple5'],
        error: null,
      },
    );
  });
  it('GRAB_APPLE_SUCCESS', () => {
    const stateWithUsersAndApples = {
      users: [
        { id: 1, name: 'Jonathan', apples: [] },
      ],
      basket: ['Apple1', 'Apple2', 'Apple3', 'Apple4', 'Apple5'],
      error: null,
    };
    const action = {
      type: 'GRAB_APPLE_SUCCESS',
      payload: {
        response: {
          success: true,
          user: {
            id: 1,
            name: 'Jonathan',
            apples: [{
              id: 1, user_id: 1, created_at: '2019-07-10 11:52:38', updated_at: '2020-06-24 15:41:14',
            }, {
              id: 3, user_id: 1, created_at: '2019-07-10 11:52:38', updated_at: '2020-06-24 15:56:51',
            }],
          },
        },
      },
    };
    const result = reducer(stateWithUsersAndApples, action);
    expect(result).toEqual(
      {
        users: [{
          id: 1,
          name: 'Jonathan',
          apples: [{
            id: 1, user_id: 1, created_at: '2019-07-10 11:52:38', updated_at: '2020-06-24 15:41:14',
          }, {
            id: 3, user_id: 1, created_at: '2019-07-10 11:52:38', updated_at: '2020-06-24 15:56:51',
          }],
        }],
        basket: ['Apple1', 'Apple2', 'Apple3', 'Apple4', 'Apple5'],
        error: null,
      },
    );
  });
  it('DISPLAY_ERROR_MESSAGE', () => {
    const action = {
      type: 'DISPLAY_ERROR_MESSAGE',
      payload: {
        message: 'Basket cant give more than one apple per 5 sec',
      },
    };
    const result = reducer(state, action);
    expect(result).toEqual(
      {
        users: [],
        basket: [],
        error: 'Basket cant give more than one apple per 5 sec',
      },
    );
  });
  it('HIDE_ERROR_MESSAGE', () => {
    const stateWithErrorMessage = {
      users: [],
      basket: [],
      error: 'Basket cant give more than one apple per 5 sec',
    };
    const action = {
      type: 'HIDE_ERROR_MESSAGE',
    };
    const result = reducer(stateWithErrorMessage, action);
    expect(result).toEqual(state);
  });
});
