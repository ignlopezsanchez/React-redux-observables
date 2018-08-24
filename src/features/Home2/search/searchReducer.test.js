import {searchReducer} from './searchReducer'
import * as actions from './searchActions'
import {updateError} from "./searchActions";

describe('counter reducer', () => {

    it('should return the initial state', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle UPDATE_ERROR', () => {

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
        const newState = searchReducer(initialState, updateError("Error"))
        expect(newState).toEqual(desireState)
    })
    it('should handle UPDATE_USERS', () => {
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
        expect(searchReducer(initialState, actions.updateUsers({user: "Jaimito"}))).toEqual(desireState)
    })
    it('should handle UPDATE_ERROR, UPDATE_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, LOADING, CLEAR_SEARCH', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(initialState, actions.fetchUserSuccess())).toEqual({
            users: [],
            error: null,
            isLoading: false
        })
    })
    it('should handle UPDATE_ERROR, UPDATE_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, LOADING, CLEAR_SEARCH', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(initialState, actions.fetchUserFail())).toEqual({
            users: [],
            error: null,
            isLoading: false
        })
    })
    it('should handle UPDATE_ERROR, UPDATE_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, LOADING, CLEAR_SEARCH', () => {
        const initialState = {
            users: [],
            error: null,
            isLoading: false
        }
        expect(searchReducer(initialState, actions.loading())).toEqual({
            users: [],
            error: null,
            isLoading: true
        })
    })
    it('should handle UPDATE_ERROR, UPDATE_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, LOADING, CLEAR_SEARCH', () => {
        const initialState = {
            users: [],
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
