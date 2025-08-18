import { RenderQualities } from '../components/Table/Qualities';
import { useProfessions } from '../Provider/ProfessionProvider';
import { useQualities } from '../Provider/QualitiesProvider';
import { Link } from 'react-router-dom';

export const columns = {
  name: {
    path: 'name',
    name: 'Имя',
    component: (item) => {
      return <Link to={`/users/${item._id}`}>{item.name}</Link>;
    },
  },

  rate: {
    path: 'rate',
    name: 'Рейтинг',
    component: (item) => {
      return <span>{item.rate}</span>;
    },
  },

  qualities: {
    name: 'Качества',
    component: (user) => {
      const { getQualitiesById } = useQualities();
      return <RenderQualities qualities={getQualitiesById(user.qualities)} />;
    },
  },

  professions: {
    path: 'profession.name',
    name: 'Профессия',
    component: (user) => {
      const { getProfessionsById } = useProfessions();
      return <p>{getProfessionsById(user?.profession)}</p>;
    },
  },

  delete: {
    name: 'Удалить',
    component: (user) => {
      return <button onClick={() => console.log(user)}>Delete</button>;
    },
  },
};
