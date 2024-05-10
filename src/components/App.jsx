import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const HomePage = React.lazy(() => import('./pages/homePage'));

export const App = () => {
  return (
   
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
    
  );
};
