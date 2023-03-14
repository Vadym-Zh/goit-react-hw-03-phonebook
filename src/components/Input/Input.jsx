import PropTypes from 'prop-types';
// import css from './Input.module.css';

const Input = ({ type, name, pattern, title, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
