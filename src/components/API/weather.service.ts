import axios from 'axios';
import type { IWeather } from '../model/weather.ts/weather';

// const http = axios({baseURL: "https://api.openweathermap.org/data/2.5/weather"})

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

export const weatherService = {
  async getWeather(cityName: string): Promise<IWeather> {
    const { data } = await axios.get(baseURL, {
      params: {
        q: cityName,
        appid: import.meta.env.VITE_API_KEY,
        units: 'metric',
        lang: 'ru',
      },
    });

    return data;
  },
};
