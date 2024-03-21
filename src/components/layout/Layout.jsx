import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/footer/Footer';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
