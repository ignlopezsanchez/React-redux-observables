import {weatherReducer} from './weatherReducer'
import * as actions from './weatherActions'
import {fetchUserFail} from './weatherActions'

describe('counter reducer', () => {

    it('should return the initial state', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(weatherReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle FETCH_USER_FAIL', () => {

        const initialState = {
            users: [],
            error: null,
            isLoading: true
        }
        const desireState = {
            users: [],
            error: "Error",
            isLoading: false
        }
        const newState = weatherReducer(initialState, fetchUserFail("Error"))
        expect(newState).toEqual(desireState)
    })
    it('should handle FETCH_USER_SUCCESS', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        const desireState = {
            users: {user: "Jaimito"},
            error: null,
            isLoading: false
        }
        expect(weatherReducer(initialState, actions.fetchUserSuccess({user: "Jaimito"}))).toEqual(desireState)
    })
 
    it('should handle FETCH_API', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(weatherReducer(initialState, actions.fetchApi())).toEqual({
            users: [],
            error: null,
            isLoading: true
        })
    })
    it('should handle CLEAR_SEARCH', () => {
        const initialState = {
            users: ["Jaime", "Luna", "Luis"],
            error: "Error",
            isLoading: true
        }
        expect(weatherReducer(initialState, actions.clearSearch())).toEqual({
            users: [],
            error: null,
            isLoading: false
        })
    })
})
