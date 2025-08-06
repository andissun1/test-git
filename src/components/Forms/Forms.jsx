import styles from './App.module.css';
import { TextField } from './TextField';
import { MultiSelect } from './MultiSelect';
import { data } from '../../data';
import { SelectField } from './SelectField';
import { useEffect, useState } from 'react';
import { validator } from '../utils/validator';

const userSchema = {
  name: {
    isRequired: { message: 'Обязательное поле' },
    min: { message: 'Минимум 2 символа', value: 2 },
    max: { message: 'Максимум 20 символов', value: 20 },
  },
  age: {
    isRequired: { message: 'Обязательное поле' },
    isNumber: { message: 'Должно быть более 18', value: 18 },
  },
  profession: {
    isRequired: { message: 'Обязательное поле' },
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
  repeatPassword: {
    checkPassword: { message: 'Пароли не совпадают', ref: 'password' },
  },
};

export function Forms() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    qualities: [],
    profession: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [error, setError] = useState({});

  const validate = () => {
    const error = validator(userData, userSchema);
    setError(error);
  };

  const isValid = Object.keys(error).length === 0;

  useEffect(() => {
    validate();
  }, [userData]);

  const optionQualities = Object.values(data.qualities).map((elem) => {
    return {
      value: elem._id,
      label: elem.name,
    };
  });

  const optionProfessions = Object.values(data.professions).map((elem) => {
    return {
      value: elem._id,
      label: elem.name,
    };
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    console.log(userData); // Данные для создания нового пользователя
  };

  return (
    <>
      <span>Форма добавления пользователя</span>
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
          name="age"
          type="number"
          label="Возраст:"
          placeholder="Введите возраст"
          value={userData.age}
          onChange={handleChange}
          error={error?.age}
        />

        <MultiSelect
          name="qualities"
          options={optionQualities}
          onChange={handleChange}
          defaultValue={userData.qualities}
        />

        <SelectField
          name="profession"
          label="Профессия:"
          options={optionProfessions}
          onChange={handleChange}
          value={userData.profession}
          error={error?.profession}
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

        <TextField
          name="repeatPassword"
          type="text"
          label="Повторите пароль:"
          placeholder="Повтор пароля"
          value={userData.repeatPassword}
          onChange={handleChange}
          error={error?.repeatPassword}
        />

        <button type="submit" disabled={!isValid} className={styles.submitButton}>
          Сохранить
        </button>
      </form>
    </>
  );
}
