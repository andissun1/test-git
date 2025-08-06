import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">Вход</Link>
      <Link to="/auth">Создать аккаунт</Link>
      <Link to="/table">Таблица</Link>
      <Link to="/Forms">Создать пользователя</Link>
      <Link to="/">Образец</Link>
    </nav>
  );
};
