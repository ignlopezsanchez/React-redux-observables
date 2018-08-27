import {ofType} from 'redux-observable'
import { debounceTime, switchMap, map, takeUntil, catchError, retry, delay } from 'rxjs/operators';
import { fetchUserFail, fetchUserSuccess, clearSearch} from "./searchActions";
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs'

export const searchEpic = action$ => action$.pipe(
 
    ofType('FETCH_API'),
    switchMap(action => of(action).pipe(
        delay(2000),
        takeUntil(action$.ofType('CLEAR_SEARCH'))
    )),
    //debounceTime(2000),  //debounce me sirve para que solo mande la ultima (si se invoca en menos de lo que ponga en el debounce), pero imagina que la respuesta tarda mas que ese tiempo en llegar(entre dos peticiones que cumplen el tiempo del debounce). con switchmap la cancelamos
    switchMap(action =>
      ajax.getJSON(`https://api.github.com/search/users?q=${action.payload}+type:user+in:login`).pipe(
          retry(2),
          map(response => fetchUserSuccess(response.items)),
          catchError(error => of(fetchUserFail(error.response.message))),
          takeUntil(action$.ofType('CLEAR_SEARCH')),

      ),

    ),
)
