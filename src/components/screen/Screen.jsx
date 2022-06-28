import PropTypes from 'prop-types';
import './Screen.scss';

function Screen({ info }) {
  return (
    <div className="screen">{info}</div>
  );
}

Screen.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Screen;
