import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import {
  selectContacts,
  selectLoadingStatus,
  selectErrorStatus,
} from 'redux/contacts/selectors';
import { Wrapper } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();

  const itemsList = useSelector(selectContacts);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Wrapper>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {error !== null && (
          <p style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
            Something gone wrong, please try again!
          </p>
        )}
        {isLoading && !error && <p>Loading, please wait...</p>}
        {itemsList.length > 0 && <ContactList />}
        {itemsList.length === 0 && !isLoading && (
          <p>You don`t have any contacts yet</p>
        )}
      </Wrapper>
    </main>
  );
}
