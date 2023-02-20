import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormWrapper, Label, Input, Btn } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const onSubmit = ({ name, number }, { resetForm }) => {
    addContact(name, number, nanoid());
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormWrapper>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </FormWrapper>
    </Formik>
  );
};

ContactForm.proprTypes = {
  addContact: PropTypes.func.isRequired,
};
