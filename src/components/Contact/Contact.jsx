import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactdata }) => {
  const dispatch = useDispatch();
  const HandledeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={s.contactBox}>
      <div className={s.contactInfo}>
        <p>
          <FaUser /> {contactdata.name}
        </p>
        <p>
          <FaPhone /> {contactdata.number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => HandledeleteContact(contactdata.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
