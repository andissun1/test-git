import { useState, useEffect, useRef } from 'react';
import { TextField } from './TextField';
import { validator } from './validator';
import styles from './App.module.css';

export default function App() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const refSubmitButton = useRef(null);
  const [error, setError] = useState({});
  const isValid = Object.keys(error).length === 0;

  const userSchema = {
    email: {
      isRequired: { message: 'Обязательное поле' },
      isEmail: { message: 'Некорректный email' },
    },
    password: {
      isRequired: { message: 'Обязательное поле' },
      min: { message: 'Минимум 6 символов', value: 6 },
      max: { message: 'Максимум 10 символов', value: 10 },
    },
    repeatPassword: {
      isRequired: { message: 'Обязательное поле' },
      checkPassword: { message: 'Пароли не совпадают', ref: 'password' },
    },
  };

  useEffect(() => {
    const error = validator(userData, userSchema);
    setError(error);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    console.log(userData);
  };

  return (
    <>
      <h1 className={styles.header}>Создание аккаунта</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="email"
          label="Почта:"
          placeholder="example@mail.ru"
          value={userData.name}
          onChange={handleChange}
          error={error?.email}
        />

        <TextField
          name="password"
          type="new-password"
          label="Пароль:"
          placeholder="Пароль может содержать буквы, числа и спецсимволы."
          value={userData.password}
          onChange={handleChange}
          error={error?.password}
        />

        <TextField
          name="repeatPassword"
          type="new-password"
          label="Повторите пароль:"
          value={userData.repeatPassword}
          onChange={handleChange}
          error={error?.repeatPassword}
        />

        <button
          type="submit"
          disabled={!isValid}
          className={styles.submitButton}
          ref={refSubmitButton}
          autoFocus
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}
