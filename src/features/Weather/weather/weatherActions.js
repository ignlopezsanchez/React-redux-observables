
export const fetchWeatherApi = (searchText) => ({
    type: 'FETCH_WEATHER_API',
    payload: searchText
})
export const fetchWeatherSuccess = (users) => ({
    type: 'FETCH_WEATHER_SUCCESS',
    payload: users
})
export const fetchWeatherFail = (error) => ({
    type: 'FETCH_WEATHER_FAIL',
    payload: error
})

export const clearWeatherSearch = () => ({
    type: 'CLEAR_WEATHER_SEARCH',
})
