const appid = "9cf748c04e6ae0f475486f0f2fcc3e53"
export const getWeatherUrl = ({countryCode,city}) =>`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
export const getForecastURL = ({countryCode,city}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`