import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'components/redux/contactsSlice';
import { changeValue } from 'components/redux/filterSlice';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { AppWrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContacts = (name, number, id) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number, id));
    }
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = e => {
    dispatch(changeValue(e.target.value));
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const vivsibleContacts = filteredContacts();

  return (
    <AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={updateFilter} />
      {vivsibleContacts.length !== 0 ? (
        <ContactList contacts={vivsibleContacts} onDelete={deleteContacts} />
      ) : (
        <h3>Your contacts will be here</h3>
      )}
    </AppWrapper>
  );
};
