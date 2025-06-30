<<<<<<< HEAD
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
=======
import { RenderQualities } from '../components/Qualities';

export const columns = {
  name: {
    path: 'name',
    name: 'Имя',
  },

  age: {
    path: 'age',
    name: 'Возраст',
  },

  qualities: {
>>>>>>> DynamicTable123
    name: 'Качества',
    component: (user) => {
      return RenderQualities(user);
    },
  },

  professions: {
<<<<<<< HEAD
    path: '',
=======
    path: 'profession.name',
>>>>>>> DynamicTable123
    name: 'Профессия',
    component: (user) => {
      return <p>{user.profession.name}</p>;
    },
<<<<<<< HEAD
    sortOption: function (...states) {
      sortUsers(...states, 'profession');
    },
=======
>>>>>>> DynamicTable123
  },

  delete: {
    name: 'Удалить',
    component: (user) => {
      return <button onClick={() => console.log(user)}>Delete</button>;
    },
  },
};
