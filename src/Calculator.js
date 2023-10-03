import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = math.evaluate(input);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <input type="text" className="result" value={result} readOnly />
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            className={`button ${button === '=' ? 'equals' : ''}`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
