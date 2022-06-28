import PropTypes from 'prop-types';
import './Button.scss';

function Button({ text, type, axn }) {
  const clickAxn = (opc) => axn(opc);

  return (
    <div
      className={`btn btn-${type}`}
      role="button"
      onClick={() => clickAxn(text)}
      onKeyUp={() => clickAxn(text)}
      tabIndex={text}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  axn: PropTypes.func.isRequired,
};

export default Button;
