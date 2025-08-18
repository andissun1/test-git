import styles from './App.module.css';
import { TextField } from './TextField';
import { useState } from 'react';
import { validator } from '../utils/validator';
import { useEffect } from 'react';
import { useAuth } from '../../Provider/AuthProvider';

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

export const AuthForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const { register } = useAuth();

  const validate = () => {
    const error = validator(userData, userSchema);
    setError(error);
  };

  useEffect(() => {
    validate();
  }, [userData]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isValid = Object.keys(error).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    register(userData);
  };

  return (
    <>
      <span>Форма регистрации</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          name="name"
          type="text"
          label="Имя:"
          placeholder="Введите имя"
          value={userData.name}
          onChange={handleChange}
          error={error?.name}
        />

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
          placeholder="Пароль"
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
