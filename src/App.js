import React from 'react';
import Calculator from './components/calculator/Calculator';
import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
