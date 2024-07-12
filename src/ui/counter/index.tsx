import styles from './style.module.scss';

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter = ({ count, setCount }: CounterProps) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button type='button' className={styles.counter__button} onClick={decrement}>
        -
      </button>
      <p className={styles.counter__text}>{count}</p>
      <button type='button' className={styles.counter__button} onClick={increment}>
        +
      </button>
    </div>
  );
};
