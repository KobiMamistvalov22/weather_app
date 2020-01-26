const API_KEY = '2f7af1a5465bd62281a469e954c520d5';

/*
  get city weather details from openweathermap by city name
  Ex. getWeatherFromServer(cityName)
  Props:
    cityName: strings (name of the city)
*/
export const getWeatherFromServer = async (cityName) => {
  let reqWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
  const api = await fetch(reqWeather);
  return await api.json();
};

