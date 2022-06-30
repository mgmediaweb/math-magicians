import {
  NavLink,
} from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1>Header</h1>
    <nav>
      <NavLink
        to="/"
        className="link"
      >
        Home
      </NavLink>

      <NavLink
        to="Calculator"
        className="link"
      >
        Calculator
      </NavLink>

      <NavLink
        to="Quote"
        className="link"
      >
        Quote
      </NavLink>
    </nav>
  </div>
);

export default Header;
