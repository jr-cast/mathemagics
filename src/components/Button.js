import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => <button className={className} type="button" text={text} onClick={onClick}>{text}</button>;

Button.defaultProps = {
  className: 'grid-item',
  text: 'template',
  onClick: 'compute',
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
