import { createContext, useContext, useEffect, useState } from 'react';
import { http } from '../http';

const ProfessionContext = createContext();
export const useProfessions = () => useContext(ProfessionContext);

export const ProfessionProvider = ({ children }) => {
  const [professions, setProfessions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProfessions = async () => {
    setIsLoading(true);
    try {
      const { data } = await http.get('professions');
      setProfessions(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfessions();
  }, []);

  const getProfessionsById = (ids) => {
    if (!ids) {
      return null;
    }

    const findedProfession = professions.find((prof) => ids === prof._id);
    return findedProfession.name;
  };

  // if (error) {
  //   return <h2>{error}</h2>;
  // }

  return (
    <ProfessionContext value={{ professions, getProfessionsById }}>
      {isLoading || children}
    </ProfessionContext>
  );
};
