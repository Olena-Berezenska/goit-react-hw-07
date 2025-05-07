import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
const ContactForm = () => {
  const dispatch = useDispatch();

  const HandleaddContact = data => {
    const newcontact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    dispatch(addContact(newcontact));
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 111-11-11')
      .required('Required'),
  });
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: '',
          number: '',
          id: '',
        }}
        validationSchema={validation}
        onSubmit={HandleaddContact}
      >
        <Form className={styles.form}>
          <label htmlFor="name">
            Name
            <Field id="name" name="name" placeholder="Name Surname" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>
          <label htmlFor="number">
            Number
            <Field id="number" name="number" placeholder="111-11-11" />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
