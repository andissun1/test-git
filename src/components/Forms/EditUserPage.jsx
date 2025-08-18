import { useEffect, useState } from 'react';
import { useUsers } from '../../Provider/UserProvider';

export const EditUserPage = ({ id }) => {
  const { getUserById } = useUsers();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useUsers();

  useEffect(() => {
    setIsLoading(true);
    getUserById(id)
      .then(({ data }) => setData(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id);
  };

  // console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data.name} onChange={() => {}} />
      <input type="text" value={data.email} onChange={() => {}} />
      <button type="submit">Отправить</button>
    </form>
  );
};
