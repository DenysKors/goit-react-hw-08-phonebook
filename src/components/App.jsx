// import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from 'redux/contactsThunk';
// import {
//   selectContacts,
//   selectLoadingStatus,
//   selectErrorStatus,
// } from 'redux/selectors';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/Home/Home';
import ContactsPage from 'pages/Contacts/Contacts';
import LoginPage from 'pages/Login/Login';
import RegisterPage from 'pages/Register/Register';

export function App() {
  // const dispatch = useDispatch();

  // const itemsList = useSelector(selectContacts);
  // const isLoading = useSelector(selectLoadingStatus);
  // const error = useSelector(selectErrorStatus);
  // console.log(error);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <Wrapper>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {error !== null && (
    //     <p style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
    //       Something gone wrong, please try again!
    //     </p>
    //   )}
    //   {isLoading && !error && <p>Loading, please wait...</p>}
    //   {itemsList.length > 0 && <ContactList />}
    //   {itemsList.length === 0 && <p>You don`t have any contacts yet</p>}
    // </Wrapper>
  );
}
