import React, { useState } from 'react';
import Button from './button/Button';
import Screen from './screen/Screen';
import './Calculator.scss';

function Calculator() {
  const [screen, setScreen] = useState('0');

  const axn = (opc) => {
    if (opc === 'AC') {
      setScreen('0');
    } else if (opc === '=') {
      console.log('go result');
    } else if (screen === '0') {
      setScreen(opc);
    } else {
      setScreen(screen + opc);
    }
  };

  return (
    <div className="calculatorBody">
      <Screen info={screen} />
      <div className="rowBtn normal">
        <Button text="AC" type="normal" axn={axn} />
        <Button text="+/-" type="normal" axn={axn} />
        <Button text="%" type="normal" axn={axn} />
        <Button text="/" type="operator" axn={axn} />
      </div>
      <div className="rowBtn normal">
        <Button text="7" type="normal" axn={axn} />
        <Button text="8" type="normal" axn={axn} />
        <Button text="9" type="normal" axn={axn} />
        <Button text="X" type="operator" axn={axn} />
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
