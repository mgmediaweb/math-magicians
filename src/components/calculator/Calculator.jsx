import React from 'react';
import Button from '../button/Button';
import Screen from '../screen/Screen';
import Calculate from '../../logic/calculate';
import './Calculator.scss';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };

    this.axn = this.axn.bind(this);
  }

  setDisplay(content) {
    this.setState(() => ({ next: content }));
  }

  axn(opc) {
    this.setState((state) => (Calculate(state, opc)));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculatorBody">
        <Screen info={next || total || '0'} onChange={(e) => this.setDisplay(e.target.value)} />
        <div className="rowBtn normal">
          <Button text="AC" type="normal" axn={this.axn} />
          <Button text="+/-" type="normal" axn={this.axn} />
          <Button text="%" type="normal" axn={this.axn} />
          <Button text="÷" type="operator" axn={this.axn} />
        </div>
        <div className="rowBtn normal">
          <Button text="7" type="normal" axn={this.axn} />
          <Button text="8" type="normal" axn={this.axn} />
          <Button text="9" type="normal" axn={this.axn} />
          <Button text="x" type="operator" axn={this.axn} />
        </div>
        <div className="rowBtn normal">
          <Button text="4" type="normal" axn={this.axn} />
          <Button text="5" type="normal" axn={this.axn} />
          <Button text="6" type="normal" axn={this.axn} />
          <Button text="-" type="operator" axn={this.axn} />
        </div>
        <div className="rowBtn normal">
          <Button text="1" type="normal" axn={this.axn} />
          <Button text="2" type="normal" axn={this.axn} />
          <Button text="3" type="normal" axn={this.axn} />
          <Button text="+" type="operator" axn={this.axn} />
        </div>
        <div className="rowBtn double">
          <Button text="0" type="normal" axn={this.axn} />
          <Button text="." type="normal" axn={this.axn} />
          <Button text="=" type="operator" axn={this.axn} />
        </div>
      </div>
    );
  }
}

export default Calculator;
