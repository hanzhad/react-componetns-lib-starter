import React, { useState } from 'react';
import './index.css';

interface CounterProps {
    min: number;
    max: number;
    step: number;
}

const Counter: React.FC<CounterProps> = ({ min, max, step }) => {
    const [count, setCount] = useState(min);

    const increment = () => {
        if (count + step <= max) {
            setCount(count + step);
        }
    };

    const decrement = () => {
        if (count - step >= min) {
            setCount(count - step);
        }
    };

    return (
        <div className="counter-wrapper">
        <button className="counter-btn" onClick={decrement}>-</button>
        <span>{count}</span>
        <button className="counter-btn" onClick={increment}>+</button>
        </div>
);
};

export default Counter;