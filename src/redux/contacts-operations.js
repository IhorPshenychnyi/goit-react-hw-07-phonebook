import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = text => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', text);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const removeContact = contactId => async dispatch => {
  dispatch(removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(removeContactSuccess(contactId));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

export { addContact, removeContact, fetchContacts };
