import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = evt => {
    let idToDel = evt.target.id;
    let list = this.state.contacts;
    let index = list.findIndex(elem => elem.id === idToDel);
    list.splice(index, 1);
    this.setState({ contacts: list });
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let name = evt.target[0].value;
    let number = evt.target[1].value;
    let contacts = this.state.contacts;
    if (contacts.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    let newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    contacts.push(newContact);
    this.setState({ contacts: contacts });
    document.getElementsByTagName('form')[0].reset();
  };

  render() {
    let list = this.state.contacts;
    if (this.filter !== '') {
      list = list.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter)
      );
    }
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm submitCallback={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter changeCallback={this.handleFilterChange} />

        <ContactList listToRender={list} deleteCallback={this.deleteContact} />
      </div>
    );
  }
}

export default App;
