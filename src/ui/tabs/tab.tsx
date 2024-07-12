import { clsx } from 'clsx';

import styles from './style.module.scss';

interface TabProps {
  onClick: () => void;
  title: string;
  isActive: boolean;
}

export const Tab = ({ onClick, title, isActive }: TabProps) => {
  const tabStyles = clsx(styles.tab, isActive ? styles.active : '');
  return (
    <button type='button' key={title} onClick={onClick} className={tabStyles}>
      {title}
    </button>
  );
};
