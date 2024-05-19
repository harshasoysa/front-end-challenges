'use client';

import styles from './calculator.module.css';
import React, { useState } from 'react';

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const handleAddition = (event: React.FormEvent) => {
        event.preventDefault();
        setTotal(firstNumber + secondNumber);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1>Adding Two Numbers</h1>
                </div>
                <div className={styles.cardBody}>
                    <form onSubmit={handleAddition}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="firstNumber">First Number</label>
                            <input
                                id="firstNumber"
                                type="number"
                                step="any"
                                value={firstNumber}
                                onChange={(e) => setFirstNumber(+e.target.value)}
                                placeholder="First number"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="secondNumber">Second Number</label>
                            <input
                                id="secondNumber"
                                type="number"
                                step="any"
                                value={secondNumber}
                                onChange={(e) => setSecondNumber(+e.target.value)}
                                placeholder="Second number"
                            />
                        </div>
                        <button className={styles.button} type="submit">Add Two Numbers</button>
                        <div className={styles.outputWrapper}>
                            <span className={styles.outputLabel}>Total</span>
                            <span className={styles.output}>{total}</span>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
