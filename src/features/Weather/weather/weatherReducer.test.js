import {weatherReducer} from './weatherReducer'
import * as actions from './weatherActions'
import {fetchWeatherFail, fetchWeatherSuccess, fetchWeatherApi, clearWeatherSearch} from "./weatherActions";

describe('counter reducer', () => {

    it('should return the initial state', () => {
        const initialState = {
            weather: {},
            error: null,
            isLoading: false
        }
        expect(weatherReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle FETCH_WEATHER_FAIL', () => {

        const initialState = {
            weather: {},
            error: null,
            isLoading: true
        }
        const desireState = {
            weather: {},
            error: "Error",
            isLoading: false
        }
        const newState = weatherReducer(initialState, fetchWeatherFail("Error"))
        expect(newState).toEqual(desireState)
    })
    it('should handle FETCH_WEATHER_SUCCESS', () => {
        const initialState = {
            weather: {},
            error: null,
            isLoading: true
        }
        const desireState = {
            weather: {ser: "Jaimito"},
            error: null,
            isLoading: false
        }
        const newState = weatherReducer(initialState, fetchWeatherSuccess({ser: "Jaimito"}))
        expect(newState).toEqual(desireState)
    })
 
    it('should handle FETCH_WEATHER_API', () => {
        const initialState = {
            weather: {ser: "Jaimito"},
            error: null,
            isLoading: false
        }
        const desireState = {
            weather: {ser: "Jaimito"},
            error: null,
            isLoading: true
        }
        const newState = weatherReducer(initialState, fetchWeatherApi())

        expect(newState).toEqual(desireState)
    })
    it('should handle CLEAR_WEATHER_SEARCH', () => {
        const initialState = {
            weather: {ser: "Jaimito"},
            error: "Error",
            isLoading: true
        }
        const desireState = {
            weather: {},
            error: null,
            isLoading: false
        }
        const newState = weatherReducer(initialState, clearWeatherSearch())

        expect(newState).toEqual(desireState)
    })
})
