import {ofType} from 'redux-observable'
import {  switchMap, map, takeUntil, catchError, retry, delay } from 'rxjs/operators';
import { fetchUserFail, fetchUserSuccess } from "./searchActions";
import {of} from 'rxjs'
import {httpClient} from "./myLibrary";


export const searchEpic = action$ => action$.pipe(
 
    ofType('FETCH_API'),
    switchMap(action => {

        return of(action).pipe(
        delay(2000),
        takeUntil(action$.ofType('CLEAR_SEARCH'))
    )}),
    //debounceTime(200),  //debounce me sirve para que solo mande la ultima (si se invoca en menos de lo que ponga en el debounce), pero imagina que la respuesta tarda mas que ese tiempo en llegar(entre dos peticiones que cumplen el tiempo del debounce). con switchmap la cancelamos
    switchMap(action => httpClient.ajax.getJSON(`https://api.github.com/search/users?q=${action.payload}+type:user+in:login`).pipe(
        retry(2),
        map(response => fetchUserSuccess(response.items)),
        catchError(error => of(fetchUserFail(error.response.message))),
        takeUntil(action$.ofType('CLEAR_SEARCH'))),


    )
)
