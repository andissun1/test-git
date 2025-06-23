import sortUsers from '../components/SortUsers';
import { RenderQualities } from '../components/RenderUsers';

export const columns = {
  name: {
    path: '',
    name: 'Имя',
    sortOption: function (...states) {
      sortUsers(...states, 'name');
    },
  },

  age: {
    path: '',
    name: 'Возраст',
    sortOption: function (...states) {
      sortUsers(...states, 'age');
    },
  },

  qualities: {
    path: '',
    name: 'Качества',
    component: (user) => {
      return RenderQualities(user);
    },
  },

  professions: {
    path: '',
    name: 'Профессия',
    component: (user) => {
      return <p>{user.profession.name}</p>;
    },
    sortOption: function (...states) {
      sortUsers(...states, 'profession');
    },
  },

  delete: {
    name: 'Удалить',
    component: (user) => {
      return <button onClick={() => console.log(user)}>Delete</button>;
    },
  },
};
