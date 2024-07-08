import { Link } from 'react-router-dom';
import { CartIcon, ExitIcon, TimeIcon, UserIcon } from '@icons/index';
import { useDispatch, useSelector } from '@store/baseHooks';
import { logOut } from '@store/user/userSlice';

import styles from './style.module.scss';

export const Header = () => {
  const user = useSelector((state) => state.user);
  const userDispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link to='/'>
          <img height={57} src='./logo.svg' alt='' />
        </Link>
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav__list}>
            <li className={styles.header_nav__list_item}>
              <Link to='/'>
                <UserIcon />
                Профиль
              </Link>
            </li>
            <li className={styles.header_nav__list_item}>
              <Link to='/orders'>
                <TimeIcon />
                Заказы
              </Link>
            </li>
          </ul>
          <ul className={styles.header_nav__list}>
            <li className={styles.header_nav__list_item}>
              <Link to='/cart'>
                <CartIcon />
                Корзина
              </Link>
            </li>
            <li className={styles.header_nav__list_item}>
              {user.token ? (
                <Link to='/auth' onClick={() => userDispatch(logOut())}>
                  <ExitIcon />
                  Выйти
                </Link>
              ) : (
                <Link to='/auth'>
                  <ExitIcon />
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
