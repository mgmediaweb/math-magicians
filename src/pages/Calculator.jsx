import Calculator from '../components/calculator/Calculator';
import './pages.scss';

const CalculatorScreen = () => (
  <div className="screen">
    <div className="container twoColumns">
      <div>
        <h2>Let&apos;s do some Math!</h2>
      </div>
      <Calculator />
    </div>
  </div>
);

export default CalculatorScreen;
