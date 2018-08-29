import * as actions from './weatherActions';
describe('actions', () => {

    it("should create action FETCH_WEATHER_API correctly", () => {
        const action = actions.fetchWeatherApi("Prueba de busqueda")
        expect(action).toEqual({
            type: 'FETCH_WEATHER_API',
            payload: "Prueba de busqueda"
        });
    })
    it("should create action FETCH_WEATHER_SUCCESS correctly", () => {
        const action = actions.fetchWeatherSuccess({});
        expect(action).toEqual({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: {}
        });
    })

    it("should create action FETCH_WEATHER_FAIL correctly", () => {
        const action = actions.fetchWeatherFail();
        expect(action).toEqual({
            type: 'FETCH_WEATHER_FAIL'
        });
    });
    it("should create action CLEAR_SEARCH correctly", () => {
        const action = actions.clearWeatherSearch();
        expect(action).toEqual({
            type: 'CLEAR_WEATHER_SEARCH'
        });
    });
})