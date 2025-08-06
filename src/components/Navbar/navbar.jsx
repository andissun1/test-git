import style from './navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">Авторизация</Link>
      <Link to="/auth">Регистрация</Link>
      <Link to="/table">Таблица</Link>
      <Link to="/">Образец</Link>
      <Link to="/">Образец</Link>
    </nav>
  );
};
