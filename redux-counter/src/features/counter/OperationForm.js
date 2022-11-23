import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../counter/Counter.module.css';
import { counterStore } from './store';
import { historialStore } from '../historial/store';

export function OperationForm () {
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementByAmount = counterStore(state => state.incrementByAmount);
    const counter = counterStore(state => state.count);
    const addResult = historialStore(state => state.addResult);
    const navigate = useNavigate();

    const incrementValue = Number(incrementAmount);

    return (
    <>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            addResult(counter)
            navigate('/history')
          }}
        >
          Save Count
        </button>
    </>
    );
}