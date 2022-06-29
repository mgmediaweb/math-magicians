import React, { useState } from 'react';
import Button from '../button/Button';
import Screen from '../screen/Screen';
import Calculate from '../../logic/calculate';
import './Calculator.scss';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const setDisplay = (content) => {
    setState(() => ({ next: content }));
  };

  const axn = (opc) => {
    setState(Calculate(state, opc));
  };

  const buttons = [
    { text: 'AC', type: 'normal' },
    { text: '+/-', type: 'normal' },
    { text: '%', type: 'normal' },
    { text: '÷', type: 'orange' },
    { text: '7', type: 'normal' },
    { text: '8', type: 'normal' },
    { text: '9', type: 'normal' },
    { text: 'x', type: 'orange' },
    { text: '4', type: 'normal' },
    { text: '5', type: 'normal' },
    { text: '6', type: 'normal' },
    { text: '-', type: 'orange' },
    { text: '1', type: 'normal' },
    { text: '2', type: 'normal' },
    { text: '3', type: 'normal' },
    { text: '+', type: 'orange' },
    { text: '0', type: 'normal double' },
    { text: '.', type: 'normal' },
    { text: '=', type: 'orange' },
  ];

  return (
    <div className="calculatorBody">
      <Screen info={state.next || state.total || '0'} onChange={(e) => setDisplay(e.target.value)} />
      <div className="rowBtns">
        {
          buttons.map((btn) => (
            <Button
              key={btn.text}
              text={btn.text}
              type={btn.type}
              axn={axn}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Calculator;
