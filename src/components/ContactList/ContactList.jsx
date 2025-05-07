import React from 'react';
import Contact from '../Contact/Contact';
import st from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.filter.filter);

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
    </>
  );
};

export default ContactList;
