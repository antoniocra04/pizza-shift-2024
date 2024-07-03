import { Link } from 'react-router-dom';
import { UserIcon, TimeIcon, CartIcon, ExitIcon } from '@icons/index';

import styles from './style.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <Link to="/"><img height={57} src="./logo.svg" alt="" /></Link>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav__list}>
          <li className={styles.header_nav__list_item}>
            <Link to="#">
              <UserIcon />
              Профиль
            </Link>
          </li>
          <li className={styles.header_nav__list_item}>
            <Link to="#">
              <TimeIcon />
              Заказы
            </Link>
          </li>
        </ul>
        <ul className={styles.header_nav__list}>
          <li className={styles.header_nav__list_item}>
            <Link to="/cart">
              <CartIcon />
              Корзина
            </Link>
          </li>
          <li className={styles.header_nav__list_item}>
            <Link to="#">
              <ExitIcon />
              Выйти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
