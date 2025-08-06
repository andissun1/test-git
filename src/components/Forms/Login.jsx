import styles from './App.module.css';
import { TextField } from './TextField';
import { useState } from 'react';
import { validator } from '../utils/validator';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const userSchema = {
  name: {
    isRequired: { message: 'Обязательное поле' },
    min: { message: 'Минимум 2 символа', value: 2 },
    max: { message: 'Максимум 20 символов', value: 20 },
  },
  email: {
    isRequired: { message: 'Обязательное поле' },
    isEmail: { message: 'Введите корректный email' },
  },
  password: {
    isRequired: { message: 'Обязательное поле' },
    min: { message: 'Минимум 6 символа', value: 6 },
    max: { message: 'Максимум 10 символов', value: 10 },
  },
};

export const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    validate();
  }, [userData]);

  const validate = () => {
    const error = validator(userData, userSchema);
    setError(error);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isValid = Object.keys(error).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    loginAccount(userData); // Данные для регистрации передаются на API
  };

  async function loginAccount(data) {
    let response = await fetch('http://94.228.114.203:3004/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) navigate('/table');
  }

  return (
    <>
      <span>Форма авторизации</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="text"
          label="Почта:"
          placeholder="Почта"
          value={userData.email}
          onChange={handleChange}
          error={error?.email}
        />

        <TextField
          name="password"
          type="text"
          label="Пароль:"
          placeholder="пароль"
          value={userData.password}
          onChange={handleChange}
          error={error?.password}
        />

        <button type="submit" disabled={!isValid} className={styles.submitButton}>
          Войти
        </button>
      </form>
    </>
  );
};
