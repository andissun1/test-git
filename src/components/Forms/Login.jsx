import styles from './App.module.css';
import { TextField } from './TextField';
import { useState } from 'react';
import { validator } from '../utils/validator';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Provider/AuthProvider';
import { Toast } from '../../components/Notifications/Toast';

const userSchema = {
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
  const { login } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    try {
      const data = await login(userData);
      if (data) navigate('/table');
    } catch (error) {
      console.log('Ошибка при входе');
    }
  };

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
