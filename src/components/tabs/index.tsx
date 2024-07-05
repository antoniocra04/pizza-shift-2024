import { Tab } from './tab';

import styles from './style.module.scss';

interface TabsProps {
  tabs: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

export const Tabs = ({ tabs, setActive, active }: TabsProps) => (
  <div className={styles.tabs}>
    {tabs.map((tab, index) => (
      <Tab title={tab} isActive={index == active} onClick={() => setActive(index)}/>
    ))}
  </div>
);
