import React, { Component } from 'react';
import Input from '../Input/Input';
import Label from '../Label/Lable';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({
      name,
      number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <Label text="Name">
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleChange}
            />
          </Label>
          <Label text="Number">
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
            />
          </Label>
          <button type="submit" className={css.formButton}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default Form;
