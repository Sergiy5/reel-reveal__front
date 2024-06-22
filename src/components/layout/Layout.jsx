import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/footer/Footer';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';
import { Main } from 'styles';


const Layout = () => {
 
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
