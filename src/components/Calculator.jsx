import React from 'react';
import Button from './button/Button';
import Screen from './screen/Screen';
import './Calculator.scss';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: '0',
    };

    this.axn = this.axn.bind(this);
  }

  axn(opc) {
    this.setState((state) => {
      if (opc === '=') {
        console.log('go result');
      } else if (opc === 'AC') {
        return { screen: '0' };
      } else {
        let ans = state.screen + opc;

        if (state.screen === '0') {
          ans = opc;
        }

        return { screen: ans };
      }

      return true;
    });
  }

  render() {
    const { screen } = this.state;
    return (
      <div className="calculatorBody">
        <Screen info={screen} />
        <div className="rowBtn normal">
          <Button text="AC" type="normal" axn={this.axn} />
          <Button text="+/-" type="normal" axn={this.axn} />
          <Button text="%" type="normal" axn={this.axn} />
          <Button text="/" type="operator" axn={this.axn} />
        </div>
        <div className="rowBtn normal">
          <Button text="7" type="normal" axn={this.axn} />
          <Button text="8" type="normal" axn={this.axn} />
          <Button text="9" type="normal" axn={this.axn} />
          <Button text="X" type="operator" axn={this.axn} />
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
