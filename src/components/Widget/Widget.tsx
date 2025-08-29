import { useState } from 'react';
import { weatherService } from '../API/weather.service';
import { Info } from '../Info';
import { TextField } from '../TextField/TextField';
import './Widget.scss';
import type { IWeather } from '../model/weather.ts/weather';
import axios from 'axios';

export const Widget = () => {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cityName.trim() === '') return setError('Введите город');

    try {
      const weather = await weatherService.getWeather(cityName);
      setWeatherData(weather);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.cod === '404') return setError('Город не найден');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);

    if (error) setError('');
  };

  return (
    <div className="widget">
      <form action="" className="widget-form" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={cityName}
          name="city"
          label="Город"
          error={error}
        />
        {weatherData && (
          <>
            <h2 className="widget-title">{weatherData?.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt="weather-image"
              className="widget-image"
            />
            <p className="widget-description">{weatherData.weather[0].description}</p>
            <Info
              feels={weatherData?.main.feels_like}
              temp={weatherData?.main.temp}
              hum={weatherData?.main.humidity}
            />
          </>
        )}

        <button className="widget-submit">Отправить</button>
      </form>
    </div>
  );
};
