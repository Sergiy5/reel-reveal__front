import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { HomePage } from "./pages/homePage";
import { MainWrapper } from "styles/MainWrapper.styled";
// import { MovieSearchPage } from "./pages/movieSearchPage";

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
