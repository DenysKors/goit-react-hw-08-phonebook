import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/authorization/authorizationThunk';
import { useAuthorization } from 'hooks/useAuthorization';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/Home/Home';
import LoginPage from 'pages/Login/Login';

const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuthorization();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Fetching user data...</b>
  ) : (
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
  );
}
