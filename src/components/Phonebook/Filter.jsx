import { StyledInput } from './Phonebook.styled';

export const Filter = ({ setFilter }) => {
  return (
    <StyledInput
      onChange={setFilter}
      name="filter"
      placeholder="Enter filter value"
    />
  );
};
