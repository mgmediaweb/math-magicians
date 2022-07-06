import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from '../components/header/Header';
import HomeScreen from '../pages/Home';
import CalculatorScreen from '../pages/Calculator';
import QuoteScreen from '../pages/Quote';
import Calculator from '../components/calculator/Calculator';
import Button from '../components/button/Button';

describe('testing react components using jest snapshot', () => {

  it('Testing Header component', () => {
    const testRenderer = TestRenderer.create(<Header />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it('Testing Home component', () => {
    const testRenderer = TestRenderer.create(<HomeScreen />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it('Testing Calculator component', () => {
    const testRenderer = TestRenderer.create(<CalculatorScreen />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });    

  it('Testing Quote component', () => {
    const testRenderer = TestRenderer.create(<QuoteScreen />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it('Testing Calculator component', () => {
    const testRenderer = TestRenderer.create(<Calculator />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });  

  it('Testing Button component', () => {
    const testRenderer = TestRenderer.create(<Button
      key="+"
      text="+"
      type="orange"
      axn={() => { console.log('1'); }}
    />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});