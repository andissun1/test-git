import { useState } from 'react';
import { useRef } from 'react';
import styles from './App.module.css';

const initialState = {
  email: '',
  password: '',
  repeatPassword: '',
};

function getErrorText(name, number) {
  const errorTexts = [
    `Неверный ${name}. Допустимые символы - буквы, цифры и нижнее подчёркивание.`,
    `Неверный ${name}. Должно быть не больше 20 символов`,
    `Неверный ${name}. Должно быть не менее 4 символов`,
    `Пароли не совпадают. Убедитесь что не допустили ошибку при повторном вводе`,
  ];

  return errorTexts[number];
}

function App() {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState('');
  const ref = useRef(null);
  const refSubmit = useRef(null);

  function handleChangeInput({ target }) {
    setFormData({ ...formData, [target.id]: target.value });

    const addErrorStyle = target.classList.add(styles.red);

    // Валидация инпутов
    if (!/^[\w_@.]*$/.test(target.value)) {
      setFormError(getErrorText(target.name, 0));
      addErrorStyle;
    } else if (target.value.length > 20) {
      setFormError(getErrorText(target.name, 1));
      addErrorStyle;
    } else {
      setFormError('');
      target.classList.remove(styles.red);
    }

    if (
      !formError &&
      target.id === 'repeatPassword' &&
      target.value === ref.current.value
    ) {
      refSubmit.current.focus();
    }
  }

  function handleBlurInput({ target }) {
    if (target.value.length < 4) {
      target.classList.add(styles.red);
      setFormError(getErrorText(target.name, 2));
    }

    if (target.id === 'repeatPassword' && target.value !== ref.current.value) {
      setFormError(getErrorText(target.name, 3));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormData(initialState);
  }

  return (
    <>
      <h1 className={styles.header}>Создание аккаунта</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Почта: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="example@mail.ru"
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
        />
        <label htmlFor="password">Пароль: </label>
        <input
          id="password"
          name="пароль"
          type="new-password"
          value={formData.password}
          placeholder="Пароль может содержать буквы, числа и нижнее подчёркивание."
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
          ref={ref}
        />
        <label htmlFor="repeatPassword">Повторите пароль: </label>
        <input
          id="repeatPassword"
          name="пароль"
          type="new-password"
          value={formData.repeatPassword}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
        />
        {formError && <p className={styles.infoInput}>{formError}</p>}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={formError}
          ref={refSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export default App;
