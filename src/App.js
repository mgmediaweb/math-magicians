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
import background from './assets/images/blackboard.jpg';
import './App.scss';

const App = () => (
  <div className="App" style={{ backgroundImage: `url(${background})` }}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/calculator" element={<CalculatorScreen />} />
        <Route exact path="/quote" element={<QuoteScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/math-magicians" element={<HomeScreen />} />
        <Route exact path="" element={<HomeScreen />} />
        <Route
          path="*"
          element={
            <div><h2>404 Page not found</h2></div>
          }
        />
      </Routes>
    </Router>
  </div>
);

export default App;
