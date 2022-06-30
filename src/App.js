import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import CalculatorScreen from './pages/Calculator';
import HomeScreen from './pages/Home';
import QuoteScreen from './pages/Quote';
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/calculator" element={<CalculatorScreen />} />
        <Route path="/quote" element={<QuoteScreen />} />
        <Route index element={<HomeScreen />} />
      </Routes>
    </Router>
  </div>
);

export default App;
