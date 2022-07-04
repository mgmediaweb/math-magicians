import PropTypes from 'prop-types';
import './Screen.scss';

const Screen = ({ info }) => (
  <div className="screenCalc">{info}</div>
);

Screen.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Screen;
