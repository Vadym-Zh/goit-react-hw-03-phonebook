import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
            className={css.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactsList;
