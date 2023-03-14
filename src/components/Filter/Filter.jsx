import PropTypes from 'prop-types';
import Input from '../Input/Input';
import css from './Filter.module.css';

const Filter = ({ onFilter, value, name, type, title, pattern }) => {
  return (
    <>
      <h2 className={css.title}>Find contacts by name</h2>
      <Input
        type={type}
        title={title}
        name={name}
        value={value}
        pattern={pattern}
        onChange={onFilter}
      />
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default Filter;
