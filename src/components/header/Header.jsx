import calcImage from '../../assets/images/calculator.png';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="container d-flex">
      <div className="logo">
        <img src={calcImage} alt="Math Magicians" />
        <h1>Math Magicians</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/quote">Quote</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
