import PropTypes from 'prop-types';
// import css from './Label.module.css';

const Label = ({ text, children }) => {
  return (
    <label>
      {text}
      {children}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Label;
