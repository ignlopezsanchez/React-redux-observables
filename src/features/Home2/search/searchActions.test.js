import * as actions from './searchActions';
describe('actions', () => {

    it("should create action UPDATE_ERROR correctly", () => {
        const action = actions.updateError("Prueba de error")
        expect(action).toEqual({
            type: 'UPDATE_ERROR',
            error: "Prueba de error"
        });
    })
    it("should create action UPDATE_USERS correctly", () => {
        const action = actions.updateUsers({});
        expect(action).toEqual({
            type: 'UPDATE_USERS',
            users: {}
        });
    })
})
    it("should create action FETCH_USER_SUCCESS correctly", () => {
        const action = actions.fetchUserSuccess();
        expect(action).toEqual({
            type: 'FETCH_USER_SUCCESS'
        });
    });
    it("should create action FETCH_USER_FAIL correctly", () => {
        const action = actions.fetchUserFail();
        expect(action).toEqual({
            type: 'FETCH_USER_FAIL'
        });
    });
    it("should create action LOADING correctly", () => {
        const action = actions.loading();
        expect(action).toEqual({
            type: 'LOADING'
        });
    });
    it("should create action CLEAR_SEARCH correctly", () => {
        const action = actions.clearSearch();
        expect(action).toEqual({
            type: 'CLEAR_SEARCH'
        });
    });
