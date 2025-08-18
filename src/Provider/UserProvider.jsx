import { createContext, useContext, useEffect, useState } from 'react';
import { http } from '../http';
import { data } from 'react-router-dom';

const UserContext = createContext();
export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await http.get('users');

      setUsers(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const getUserById = async (id) => {
    try {
      const data = http.get(`users/${id}`);
      return data;
    } catch (error) {
      console.log('Ошибка при получении данных пользователя', error.message);
      setError(error.message);
    }
  };

  const updateUser = async (id, payload) => {
    try {
      const { data } = await http.put(`users/${id}`, payload);
      console.log(response);

      const indexUser = users.findIndex((user) => {
        user._id === id;
      });
      const copyArray = [...users];
      copyArray[indexUser] = data;
      setUsers(copyArray);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <UserContext value={{ users, getUserById, updateUser }}>
      {isLoading ? <h2>Loading...</h2> : children}
    </UserContext>
  );
};
