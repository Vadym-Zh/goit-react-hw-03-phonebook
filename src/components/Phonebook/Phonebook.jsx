import React, { Component } from 'react';
import contactsData from '../contactsData.json';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import { nanoid } from 'nanoid';
import css from '../Phonebook/Phonebook.module.css';
class Phonebook extends Component {
  state = {
    contacts: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    // Перше завантаженн (пустий локалсторедж) контактів з json
    if (contacts === null) {
      this.setState({ contacts: contactsData });
      // Якщо всі контакти видалені (локалсторедж пустийрядок), контакти беруться з json
    } else if (contacts.length < 3) {
      this.setState({ contacts: contactsData });
      // Якщо в локалсторедж є контакти. вони беруться з нього
    } else if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    } else {
      //
      // } else if (this.state.contacts.length < 1) {
      //   this.setState({ contacts: contactsData });
      // } else {
      console.log('Відсутні контакти!');
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onSubmit = FormData => {
    const newContact = {
      id: nanoid(),
      name: FormData.name,
      number: FormData.number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === FormData.name.toLowerCase()
    )
      ? alert(`${FormData.name} is already in contacts`)
      : this.setState({
          contacts: [...this.state.contacts, newContact],
        });
  };

  onFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
    return (
      <>
        <div className={css.wrap}>
          <Form onSubmit={this.onSubmit} />
          <Filter
            onFilter={this.onFilter}
            type="text"
            value={this.state.filter}
            name="filter"
            title=""
            pattern=""
          />
          <ContactsList
            title="Contacts"
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </div>
      </>
    );
  }
}
export default Phonebook;
