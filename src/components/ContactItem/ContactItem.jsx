import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Item, Text, Button } from 'components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsThunk';

export const ContactItem = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return filteredContacts.map(({ id, name, number }) => (
    <Item key={id}>
      <Text>
        {name}, tel. {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  ));
};
