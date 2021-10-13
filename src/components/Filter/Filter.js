import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
