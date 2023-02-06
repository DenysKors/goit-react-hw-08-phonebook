import { Navigate } from 'react-router-dom';
import { useAuthorization } from 'hooks/useAuthorization';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthorization();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
