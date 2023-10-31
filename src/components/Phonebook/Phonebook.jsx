import { nanoid } from 'nanoid';
import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledInput,
  StyledButton,
  StyledList,
  StyledWrap,
  StyledForm,
} from './Phonebook.styled';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContacts = () => {
    const contact = { id: nanoid(), name: this.state.name };
    this.setState(prev => ({
      contacts: [contact, ...prev.contacts],
      name: '',
    }));
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState8({ number: e.target.value });
  };

  render() {
    const { contacts } = this.state;
    return (
      <StyledWrap>
        <StyledTitle>Phonebook</StyledTitle>
        <StyledForm>
          <StyledText>Name</StyledText>
          <StyledInput
            onChange={this.handleChangeName}
            type="text"
            name="name"
            required
          />
          <StyledText>Number</StyledText>
          <StyledInput
            onChange={this.handleChangeNumber}
            type="tel"
            name="number"
            required
          />
          <StyledButton onClick={this.handleAddContacts}>
            Add contact
          </StyledButton>
        </StyledForm>
        <StyledTitle>Contacts</StyledTitle>
        <StyledList>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </StyledList>
      </StyledWrap>
    );
  }
}
