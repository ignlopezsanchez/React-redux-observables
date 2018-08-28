import { combineReducers } from 'redux'
import {searchReducer} from './features/Home2/search/searchReducer'
import {weatherReducer} from './features/Weather/weather/weatherReducer'

export default combineReducers({
    search: searchReducer,
    weather: weatherReducer
})