import { Navigate, useParams } from 'react-router-dom';
import { EditUserPage } from '../components/Forms/EditUserPage';

export const UsersLayouts = () => {
  const { id, edit } = useParams();

  return (
    <>
      {id ? (
        edit === 'edit' ? (
          <EditUserPage id={id} />
        ) : (
          <h1>Просмотр пользователя: {id}</h1>
        )
      ) : (
        <Navigate to={'/table'} />
      )}
    </>
  );
};
