import Axios from 'axios';
//TODO: Hide keys on ENV. 


export const getWeather = async (city = 'Toronto') => {
  try {
    if (city.trim() === '') city = 'Toronto';

    //TODO: Error handling when current or location is undefined.
    const {
      data: {current, location},
      status,
    } = await Axios.get(
      `https://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${city}`,
    );

    return {current, location};
  } catch (err) {
    throw Error(err);
  }
};

export const getForecast = async (city = 'Toronto') => {
  try {
    const {
      data: {
        current,
        location,
        forecast: {forecastday},
      },
    } = await Axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${city}&days=2`,
    );

    // next day object
    const nextDay = {
      ...forecastday[1].day,
    };

    return {current, location, nextDay};
  } catch (err) {
    throw err;
  }
};

export const getBulkWeather = async () => {
  try {
    const mexico = getWeather('Mexico');
    const colombia = getWeather('Colombia');
    const panama = getWeather('Panama');
    const amsterdam = getWeather('Amsterdam');
    const boston = getWeather('boston');

    const response = await Promise.all([
      mexico,
      colombia,
      panama,
      amsterdam,
      boston,
    ]);

    return response;
  } catch (err) {
    throw err;
  }
};
