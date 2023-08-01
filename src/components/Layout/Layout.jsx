import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/ResponsiveAppBar/ResponsiveAppBar';
import Footer from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
