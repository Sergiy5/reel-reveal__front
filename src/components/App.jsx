import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { MainWrapper } from "styles/MainWrapper.styled";
// import { MovieSearchPage } from "./pages/movieSearchPage";
// import  HomePage  from "./pages/homePage";

const HomePage = React.lazy(() => import('./pages/homePage'));

export const App = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/search" element={<MovieSearchPage />} /> */}
          {/* <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<Favorite />} />

          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </MainWrapper>
  );
};
