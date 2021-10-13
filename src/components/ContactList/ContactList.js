import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeContact, fetchContacts } from '../../redux/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleClick, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={s.btn}
            type="button"
            onClick={() => handleClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  handleClick: id => dispatch(removeContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  handleClick: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
