import { useAuth } from '../../Provider/AuthProvider';

export const LoginButton = () => {
  const { login, isAuth } = useAuth();

  return (
    <div onClick={() => login()} style={{ cursor: 'pointer' }}>
      Повторный вход <span style={isAuth ? { color: 'green' } : { color: 'red' }}>●</span>
    </div>
  );
};
