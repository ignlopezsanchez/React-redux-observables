import * as actions from './searchActions';
describe('actions', () => {

    it("should create action FETCH_API correctly", () => {
        const action = actions.fetchApi("Prueba de busqueda")
        expect(action).toEqual({
            type: 'FETCH_API',
            payload: "Prueba de busqueda"
        });
    })
    it("should create action FETCH_USER_SUCCESS correctly", () => {
        const action = actions.fetchUserSuccess({});
        expect(action).toEqual({
            type: 'FETCH_USER_SUCCESS',
            payload: {}
        });
    })

    it("should create action FETCH_USER_FAIL correctly", () => {
        const action = actions.fetchUserFail();
        expect(action).toEqual({
            type: 'FETCH_USER_FAIL'
        });
    });
    it("should create action CLEAR_SEARCH correctly", () => {
        const action = actions.clearSearch();
        expect(action).toEqual({
            type: 'CLEAR_SEARCH'
        });
    });
})