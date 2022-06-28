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

  return (
    <div className="calculatorBody">
      <Screen info={state.next || state.total || '0'} onChange={(e) => setDisplay(e.target.value)} />
      <div className="rowBtn normal">
        <Button text="AC" type="normal" axn={axn} />
        <Button text="+/-" type="normal" axn={axn} />
        <Button text="%" type="normal" axn={axn} />
        <Button text="÷" type="operator" axn={axn} />
      </div>
      <div className="rowBtn normal">
        <Button text="7" type="normal" axn={axn} />
        <Button text="8" type="normal" axn={axn} />
        <Button text="9" type="normal" axn={axn} />
        <Button text="x" type="operator" axn={axn} />
      </div>
      <div className="rowBtn normal">
        <Button text="4" type="normal" axn={axn} />
        <Button text="5" type="normal" axn={axn} />
        <Button text="6" type="normal" axn={axn} />
        <Button text="-" type="operator" axn={axn} />
      </div>
      <div className="rowBtn normal">
        <Button text="1" type="normal" axn={axn} />
        <Button text="2" type="normal" axn={axn} />
        <Button text="3" type="normal" axn={axn} />
        <Button text="+" type="operator" axn={axn} />
      </div>
      <div className="rowBtn double">
        <Button text="0" type="normal" axn={axn} />
        <Button text="." type="normal" axn={axn} />
        <Button text="=" type="operator" axn={axn} />
      </div>
    </div>
  );
}

export default Calculator;
