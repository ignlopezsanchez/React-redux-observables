import "rxjs";
import { of } from "rxjs";
import { ActionsObservable } from "redux-observable";
import { TestScheduler } from "rxjs/testing";
import { weatherEpic } from "./weatherEpic";
import * as actions from "./weatherActions";
import { httpClient } from "./myLibrary";

const deepEquals = (actual, expected) => expect(actual).toEqual(expected);

const createTestScheduler = () => new TestScheduler(deepEquals);

httpClient.ajax = {
  getJSON: () =>
    of({
      weather: [
        {
          id: 701,
          main: "Mist",
          description: "mist",
          icon: "50d"
        }
      ]
    })
};

test("it should return success", () => {
  const marbles1 = "-a|";
  const marbles2 = "--(b|)";
  const values = {
    a: actions.fetchWeatherApi(),
    b: actions.fetchWeatherSuccess({
        main: "Coud",
        description: "cloudy",
        icon: "04d",
        temperature: 25,
        temperature_min: 12,
        temperature_max: 30,
        humidity: 45,
        name: "Zaragoza"
    })
  };

  const ts = createTestScheduler();
  const source = ActionsObservable.from(
    ts.createColdObservable(marbles1, values)
  );
  const actual = weatherEpic(source);
  ts.expectObservable(actual).toBe(marbles2, values);
  ts.flush();
});
