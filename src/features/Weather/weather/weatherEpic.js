import { ofType } from "redux-observable";
import {
  debounceTime,
  switchMap,
  map,
  takeUntil,
  catchError,
  retry,
  delay
} from "rxjs/operators";
import {
  fetchWeatherFail,
  fetchWeatherSuccess,
  clearWeatherSearch
} from "./weatherActions";
import { of } from "rxjs";
import { httpClient } from "./myLibrary";

export const weatherEpic = action$ =>
  action$.pipe(
    ofType("FETCH_WEATHER_API"),
    switchMap(action => of(action).pipe(
        delay(2000),
        takeUntil(action$.ofType("CLEAR_WEATHER_SEARCH"))
      )
    ),
    //debounceTime(200),  //debounce me sirve para que solo mande la ultima (si se invoca en menos de lo que ponga en el debounce), pero imagina que la respuesta tarda mas que ese tiempo en llegar(entre dos peticiones que cumplen el tiempo del debounce). con switchmap la cancelamos
    switchMap(action => httpClient.ajax
        .getJSON(
          `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=metric&APPID=cf38a91e0870ed34677b1bb47a3b4266`).pipe(
          retry(2),
          map(response => {
              const weather = {
                main: response.weather[0].main,
                description: response.weather[0].description,
                icon: response.weather[0].icon,
                temperature: response.main.temp,
                temperature_min: response.main.temp_min,
                temperature_max: response.main.temp_max,
                humidity: response.main.humidity
              };
              return fetchWeatherSuccess(weather);
            },
            catchError(error => of(fetchWeatherFail(error.response.message))),
            takeUntil(action$.ofType("CLEAR_WEATHER_SEARCH"))
          )
        )
    )
  );
