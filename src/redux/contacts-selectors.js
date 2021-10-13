import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// const getVisibleContacts = state => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

export { getFilter, getVisibleContacts };
