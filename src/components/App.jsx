import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import MyProvider from './context/MyProvider';
import useResize from 'utils/useResize';

const HomePage = React.lazy(() => import('./pages/homePage'));

export const App = () => {
    const [width, setWidth] = useState();
    const viewWidth = useResize();

    useEffect(() => {
      setWidth(viewWidth);
    }, [viewWidth]);

  return (
    <MyProvider value={width}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/search" element={<MovieSearchPage />} /> */}
          {/* 
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<Favorite />} />

          <Route path="*" element={<NotFound />} /> */}
          
        </Route>
      </Routes>
    </MyProvider>
  );
};
