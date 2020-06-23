import { of } from 'rxjs';
import {
  mergeMap, catchError,
} from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import * as actions from './actions';
import * as types from './actionTypes';

const baseUrl = 'http://hrtest.alycedev.com';
const corsProxy = 'https://cors-anywhere.herokuapp.com';

export const fetchUsersEpic = (action$) => action$.pipe(
  ofType(types.FETCH_USERS),
  mergeMap(() => ajax({
    url: `${corsProxy}/${baseUrl}/users`,
  })
    .pipe(
      mergeMap((response) => of(
        actions.fetchUsersSuccess(response.response),
        actions.stopFetching(),
      )),
      catchError((error) => of(
        actions.displayErrorMessage(error.xhr.response),
        actions.stopFetching(),
      )),
    )),
);

export const rootEpic = combineEpics(fetchUsersEpic);
