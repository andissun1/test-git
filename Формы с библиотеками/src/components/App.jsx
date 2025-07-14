import { useEffect, useRef } from 'react';
import styles from './App.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  let refSubmit = useRef(null);
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required('Обязательное поле')
      .matches(/^[\w_@.]*$/, 'Допустимые символы - буквы, цифры и нижнее подчёркивание')
      .max(30, 'Должно быть не больше 30 символов'),
    password: yup
      .string()
      .trim()
      .required('Обязательное поле')
      .min(4, 'Должно быть не менее 4 символов')
      .max(20, 'Должно быть не больше 20 символов'),
    repeatPassword: yup
      .string()
      .trim()
      .required('Обязательное поле')
      .min(4, 'Должно быть не менее 4 символов')
      .max(20, 'Должно быть не больше 20 символов')
      .oneOf(
        [yup.ref('password')],
        'Пароли не совпадают. Убедитесь что не допустили ошибку при повторном вводе'
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: [], mode: 'onBlur', resolver: yupResolver(schema) });

  function submitForm(data) {
    console.log({ data });
    reset();
  }

  let getErrorText = () => {
    let text = null;
    Object.values(errors).some((element) => {
      if (element?.message) {
        text = element?.message;
      }
    });

    return text;
  };

  function changeFocus({ target }) {
    if (getErrorText && target.value.length >= 4) refSubmit.current.focus();
    console.log(target.value);
  }

  return (
    <>
      <h1 className={styles.header}>Создание аккаунта</h1>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="email">Почта: </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@mail.ru"
          className={errors.email?.message ? styles.red : null}
          {...register('email')}
        />
        <label htmlFor="password">Пароль: </label>
        <input
          id="password"
          name="пароль"
          type="new-password"
          placeholder="Пароль может содержать буквы, числа и спецсимволы."
          className={errors.password?.message ? styles.red : null}
          {...register('password')}
        />
        <label htmlFor="repeatPassword">Повторите пароль: </label>
        <input
          id="repeatPassword"
          name="пароль"
          type="new-password"
          className={errors.repeatPassword?.message ? styles.red : null}
          {...register('repeatPassword')}
          onInput={changeFocus}
        />
        {<p className={styles.infoInput}>{getErrorText()}</p>}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={getErrorText()}
          ref={refSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export default App;
