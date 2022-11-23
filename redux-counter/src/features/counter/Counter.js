import React from 'react';
import shallow from 'zustand/shallow';
import styles from './Counter.module.css';
import { OperationForm } from './OperationForm';
import { counterStore } from './store';

export function Counter() {
  const { count, decrement, increment } = counterStore(state => ({
    count: state.count,
    increment: state.increment,
    decrement: state.decrement
  }), shallow);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <OperationForm/>
      </div>
    </div>
  );
}
