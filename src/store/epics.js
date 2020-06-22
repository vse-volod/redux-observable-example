import { of } from 'rxjs';
import {
  mergeMap, catchError, map,
} from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import * as actions from './actions';
import * as types from './actionTypes';

const baseUrl = 'http://hrtest.alycedev.com';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export const fetchUsersEpic = (action$) => action$.pipe(
  ofType(types.START_FETCHING_USERS),
  mergeMap((action) => ajax({
    url: `${corsProxy}${baseUrl}/users`,
  })
    .pipe(
      map((response) => actions.fetchUsersSuccess(response.response)),
      catchError((error) => of(
        actions.fetchUsersFailure(
          error.xhr.response,
          action.payload.isServer,
        ),
      )),
    )),
);

export const rootEpic = combineEpics(fetchUsersEpic);
