import { createContext, useContext, useEffect, useState } from 'react';
import { http } from '../http';

const QualitiesContext = createContext();

export const useQualities = () => useContext(QualitiesContext);

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getQualities = async () => {
    setIsLoading(true);
    try {
      const { data } = await http.get('qualities');
      setQualities(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const getQualitiesById = (ids = []) => {
    // console.log('Массив качеств', qualities);
    // console.log('Массив пользователя', ids);
    const result = qualities.filter((qualitiy) => ids.includes(qualitiy._id));
    // console.log('Результат', result);
    return result;
  };

  useEffect(() => {
    getQualities();
  }, []);

  // if (error) {
  //   return <h2>{error}</h2>;
  // }

  return (
    <QualitiesContext value={{ qualities, getQualitiesById }}>
      {isLoading || children}
    </QualitiesContext>
  );
};
