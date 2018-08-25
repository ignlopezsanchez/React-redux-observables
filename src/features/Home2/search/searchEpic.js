import {ofType} from 'redux-observable'
import { debounceTime, switchMap, map, takeUntil, catchError, retry } from 'rxjs/operators';
import {fetchApi, fetchUserFail, fetchUserSuccess, clearSearch} from "./searchActions";
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs'

export const searchEpic = action$ => action$.pipe(
 
    ofType('FETCH_API'),
    debounceTime(200),
    switchMap(action =>
      ajax.getJSON(`https://api.github.com/search/users?q=${action.payload}+type:user+in:login`).pipe(
        map(response => fetchUserSuccess(response.items)),
        retry(2),
        catchError(error => of({
          type: 'FETCH_USER_FAIL',
          payload: error.response.message,
        })),
             
          takeUntil(action$.ofType('CLEAR_SEARCH')),
      ),
      
    ),
)
