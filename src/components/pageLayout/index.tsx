import { Header } from '@components/header';

import styles from './style.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};
