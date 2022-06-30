import Calculator from '../components/calculator/Calculator';
import './pages.scss';

const CalculatorScreen = () => (
  <div className="screen twoColumns">
    <div>
      <h1>Calculator</h1>
      <p>When you interact with a web application, navigate through different pages, identified.</p>
      <p>If you need to do routing using just vanilla JS, you may need to do something similar.</p>
    </div>
    <Calculator />
  </div>
);

export default CalculatorScreen;
