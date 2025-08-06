import { RenderQualities } from '../components/Table/Qualities';

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
    name: 'Качества',
    component: (user) => {
      return RenderQualities(user);
    },
  },

  professions: {
    path: 'profession.name',
    name: 'Профессия',
    component: (user) => {
      return <p>{user.profession.name}</p>;
    },
  },

  delete: {
    name: 'Удалить',
    component: (user) => {
      return <button onClick={() => console.log(user)}>Delete</button>;
    },
  },
};
