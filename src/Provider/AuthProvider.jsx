import { createContext, useContext, useState } from 'react';
import { http } from '../http';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const initialLoginData = {
  email: 'pucho@mail.ru',
  password: '123123',
};

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = async (payload = initialLoginData) => {
    try {
      const { data } = await http.post('auth/login', payload);

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      setIsAuth(true);
      return data;
    } catch (error) {
      console.log('Ошибка при авторизации:', error);
    }
  };

  const createUser = async (payload) => {
    try {
      const { data } = await http.post('users', payload);
      return data;
    } catch (error) {
      console.log('Ошибка при создании пользователя');
    }
  };

  const register = async (payload) => {
    try {
      await createUser(payload);
      const { data } = await http.post('auth/register', payload);

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      setIsAuth(true);
    } catch (error) {
      console.log('Ошибка при создании аккаунта');
    }
  };

  return (
    <AuthContext value={{ login, isAuth, register, createUser }}>{children}</AuthContext>
  );
};
