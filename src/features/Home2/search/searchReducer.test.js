import {searchReducer} from './searchReducer'
import * as actions from './searchActions'
import {fetchUserFail} from './searchActions'

describe('counter reducer', () => {

    it('should return the initial state', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(undefined, {})).toEqual(initialState)
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
        const newState = searchReducer(initialState, fetchUserFail("Error"))
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
        expect(searchReducer(initialState, actions.fetchUserSuccess({user: "Jaimito"}))).toEqual(desireState)
    })
 
    it('should handle FETCH_API', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(initialState, actions.fetchApi())).toEqual({
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
        expect(searchReducer(initialState, actions.clearSearch())).toEqual({
            users: [],
            error: null,
            isLoading: false
        })
    })
})
