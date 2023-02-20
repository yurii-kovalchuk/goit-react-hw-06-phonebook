import { Filter } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { AppWrapper } from './App.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number, id) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(state => [...state, { name, number, id }]);
    }
  };

  const updateFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const vivsibleContacts = filteredContacts();

  const deleteContact = id => {
    setContacts(state => [...state.filter(contact => contact.id !== id)]);
  };

  return (
    <AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={updateFilter} />
      {vivsibleContacts.length !== 0 ? (
        <ContactList contacts={vivsibleContacts} onDelete={deleteContact} />
      ) : (
        <h3>Your contacts will be here</h3>
      )}
    </AppWrapper>
  );
};

// export class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// addContact = (name, number, id) => {
//   if (
//     this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     )
//   ) {
//     alert(`${name} is already in contacts`);
//   } else {
//     this.setState(state => ({
//       contacts: [...state.contacts, { name, number, id }],
//     }));
//   }
// };

// updateFilter = e => {
//   this.setState({ filter: e.target.value });
// };

// filteredContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizeFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizeFilter)
//   );
// };

// deleteContact = id => {
//   this.setState(state => ({
//     contacts: state.contacts.filter(contact => contact.id !== id),
//   }));
// };

//   componentDidMount() {
// const localData = JSON.parse(localStorage.getItem('contacts'));
// if (localData !== null && localData.length !== 0) {
//   this.setState({ contacts: localData });
// }
//   }

//   componentDidUpdate(_, prevState) {
// const nextContacts = this.state.contacts;
// const prevContacts = prevState.contacts;
// if (prevContacts !== nextContacts) {
//   localStorage.setItem('contacts', JSON.stringify(nextContacts));
// }
//   }

//   render() {
//     const { filter } = this.state;
//     const vivsibleContacts = this.filteredContacts();
//     return (
//       <AppWrapper>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.updateFilter} />
//         {vivsibleContacts.length !== 0 ? (
//           <ContactList
//             contacts={vivsibleContacts}
//             onDelete={this.deleteContact}
//           />
//         ) : (
//           <h3>Your contacts will be here</h3>
//         )}
//       </AppWrapper>
//     );
//   }
// }
