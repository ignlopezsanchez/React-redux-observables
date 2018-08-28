import {combineEpics} from 'redux-observable'
import {searchEpic} from "./features/Home2/search/searchEpic";
import {weatherEpic} from "./features/Weather/weather/weatherEpic";

export default combineEpics(searchEpic, weatherEpic)