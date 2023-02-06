import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/ResponsiveAppBar/ResponsiveAppBar';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};
