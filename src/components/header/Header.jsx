import {
  NavLink,
} from 'react-router-dom';
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
        <NavLink to="/Home" className="link">
          Home
        </NavLink>

        <NavLink to="Calculator" className="link">
          Calculator
        </NavLink>

        <NavLink to="Quote" className="link">
          Quote
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Header;
