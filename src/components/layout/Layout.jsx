import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/footer/Footer';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';
import { MainWrapper } from 'styles';

const Layout = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
