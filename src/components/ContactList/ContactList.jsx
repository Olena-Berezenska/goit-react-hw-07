import React from 'react';
import Contact from '../Contact/Contact';
import st from './ContactList.module.css';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';

import { selectNameFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={st.listOfContacts}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contactdata={contact} />
        ))}
      </ul>
      {loading && <h2>loading...</h2>}
      {error && <h2>Server is dead...</h2>}
    </>
  );
};

export default ContactList;
